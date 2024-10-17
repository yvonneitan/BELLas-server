import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();

const PORT = process.env.PORT || 8080;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:";

//Middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
  res.send("Bell Hackathon Server");
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on ${BACKEND_URL}${PORT}`);
});