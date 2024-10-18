import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getVotes = async (req, res) => {
  try {
    const data = await knex("votes");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Error retrieving votes");
  }
};

const submitVote = async (req, res) => {
  // validate submission here

  try {
    const result = await knex("votes").insert({
      suggestion_id: req.body.suggestion_id,
      email: req.body.email,
      optin: req.body.optin,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: `Unable to submit suggestion: ${error}`,
    });
  }
};

export { getVotes, submitVote };
