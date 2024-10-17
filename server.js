import express from "express";
import cors from "cors";
import "dotenv/config";
import knex from "knex";  // Import Knex

const app = express();

const PORT = process.env.PORT || 8080;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:";


const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
});


app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bell Hackathon Server");
});

// i will move this to controller file later 
app.get("/suggestions", async (req, res) => {
    try {
      const suggestions = await db("suggestions").select("*");  
      res.status(200).json(suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      res.status(500).json({ error: "Failed to fetch suggestions" });
    }
});


app.listen(PORT, () => {
  console.log(`Server running on ${BACKEND_URL}${PORT}`);
});
