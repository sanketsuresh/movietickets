const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

// Routes
app.get("/api/movie", async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Movie title is required" });
  }

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${
        process.env.OMDB_API_KEY
      }`
    );

    if (response.data.Response === "False") {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching movie:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Server listen
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
