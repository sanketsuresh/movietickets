import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl text-black shadow-black w-1/2 text-left border border-zinc-400">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={`${movie.Title} Poster`}
          className="w-full md:w-48 h-auto rounded-lg shadow-lg object-cover"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-blue-400">
              {movie.Title}{" "}
              <span className="text-sm text-black">({movie.Year})</span>
            </h2>

            <p className="mb-1">
              <span className="font-semibold text-black">🎭 Genre:</span>{" "}
              {movie.Genre}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-black">🎬 Director:</span>{" "}
              {movie.Director}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-black">🎤 Actors:</span>{" "}
              {movie.Actors}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-black">⭐ IMDb Rating:</span>{" "}
              {movie.imdbRating}
            </p>
          </div>

          <p className="mt-4 text-gray-600">
            <span className="font-semibold">📝 Plot:</span> {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
