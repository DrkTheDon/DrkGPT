const prompt = "DrkGPT\n>";
const { Configuration, OpenAIApi } = require("openai");


var API_KEY = "API_KEY"; // API KEY
const configuration = new Configuration({
  apiKey: API_KEY, 
});

const openai = new OpenAIApi(configuration);
async () => {
  try {
    const response = await openai.Completion.create({
      engine: "text-davinci-003",
      prompt: prompt,
    });
    console.log(response.choices[0].text);
  } catch (error) {
    console.log(error);
  }
};
