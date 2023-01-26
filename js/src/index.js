/////////////////////////////////////////////////////
// DrK ChatGPT Writer (DrkGPT)                     //
// We do a little bit of trolling.                 //
// https://drkbro.ml/                              //
// Coded by: drk, DragonSlayer64                   //
/////////////////////////////////////////////////////


#Main 
const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const prompt = require("prompt-sync")();

const configuration = new Configuration({
  apiKey: "Your Api code",
});


#Api#Post
const openai = new OpenAIApi(configuration);

const completionFunction = async () => {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "what is the capital of germany?",
  });

  console.log(completion.data.choices[0].text);
};


#Prompt/#Request
const userQuestion = prompt("Enter a prompt: ");
completionFunction(userQuestion);
console.log("Generating Answer, this might take some time.")


//Npm install prompt-sync, Express and openai before using code(CHECK JSON FILE)
