// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import suggestionsRoutes from "./routes/suggestions-routes.js";
// import votesRoutes from "./routes/votes-routes.js";

// const app = express();

// const PORT = process.env.PORT || 8080;
// const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`;

// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());

// app.get("/", (_req, res) => {
//   res.send("Welcome to the Bell Changemakers server");
// });

// app.use("/suggestions", suggestionsRoutes);
// app.use("/votes", votesRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on ${BACKEND_URL}${PORT}`);
// });
import cors from "cors";
import express from "express";
import "dotenv/config";
import suggestionsRoutes from "./routes/suggestions-routes.js";
import votesRoutes from "./routes/votes-routes.js";

const app = express();

// CORS configuration for allowing requests from your Netlify frontend
const allowedOrigins = ["https://your-netlify-app.netlify.app"]; // Replace with your actual Netlify URL
const corsOptions = {
  origin: allowedOrigins,
  methods: "GET, POST, PUT, DELETE",
};

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to the Bell Changemakers server");
});

app.use("/suggestions", suggestionsRoutes);
app.use("/votes", votesRoutes);

const PORT = process.env.PORT || 8080;
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server running on ${BACKEND_URL}`);
});
