const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const completionFunction = async () => {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "what is the capital of germany?",
  });

  console.log(completion.data.choices[0].text);
};

completionFunction();

app.get("/", function (req, res) {
  res.send("Hello World");
});
