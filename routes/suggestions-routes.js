import express from "express";
import { getSuggestions, submitSuggestion } from "../controllers/suggestions-controller.js";

const routeInventory = express.Router();

// Define routes for the base path "/"
routeInventory.route("/").get(getSuggestions).post(submitSuggestion);

export default suggestionsRoutes;
