import express from "express";
import { getSuggestions, submitSuggestion } from "../controllers/suggestions-controller.js";

const suggestionsRoutes = express.Router();

suggestionsRoutes.route("/").get(getSuggestions).post(submitSuggestion);

export default suggestionsRoutes;
