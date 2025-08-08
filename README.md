# 🎬 Movie Search App (React + Express + OMDb API)

This is a full-stack movie search application using React (frontend) and Node.js/Express (backend) with the OMDb API to fetch movie details by title.

---

## 🔧 Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express + Axios
- **API:** [OMDb API](http://www.omdbapi.com/)
- **Environment Variables:** `.env` file used to store API keys

---

## 🚀 Features

- Search for movies by title
- View movie poster, title, year, genre, and plot
- Friendly error handling
- Fully responsive design
- Organized codebase (frontend/backend separation)

---

## 📁 Project Structure

movie-search/
├── backend/
│ ├── server.js # Express API server
│ ├── .env # Contains your OMDb API key
├── frontend/
│ ├── src/
│ │ └── components/ # MovieCard component
│ │ ├── App.jsx # Main app logic
│ │ └── main.jsx # React entry point

---

## 🔑 API Key Setup

Create a `.env` file inside the `/backend` folder:

Make sure you install `dotenv` in your backend:

```bash
npm install dotenv
cd backend
npm install
node server.js
cd frontend
npm install
npm run dev




