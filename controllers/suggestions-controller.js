import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getSuggestions = async (req, res) => {
  try {
    const data = await knex("suggestions");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Error retrieving suggestions");
  }
};

const submitSuggestion = async (req, res) => {
  // validate submission here

  try {
    const result = await knex("suggestions").insert({
      name: req.body.name,
      email: req.body.email,
      suggestion: req.body.suggestion,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: `Unable to submit suggestion: ${error}`,
    });
  }
};

export { getSuggestions, submitSuggestion };
