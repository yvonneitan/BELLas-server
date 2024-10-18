import express from "express";
import { getVotes, submitVote } from "../controllers/votes-controller.js";

const votesRoutes = express.Router();

votesRoutes.route("/").get(getVotes).post(submitVote);

export default votesRoutes;
