import express, { application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpeAIApi } from "openai";

dotenv.config();

// openai configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create instance of openAi
const openai = new OpeAIApi(configuration);

// initialize express app
const app = express();

// allow to make cross origin requests
app.use(cors());

// pass json data from front end to back end
app.use(express.json());

// dummy root route - to check if server is running
// get route
app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

// post route to get prompt from front end and send it to openai
app.post("/", async (req, res) => {
  try {
    // get prompt from front end
    const prompt = req.body.prompt;

    // send prompt to openai
    const response = await openai.createCompletion({});
  } catch (error) {}
});
