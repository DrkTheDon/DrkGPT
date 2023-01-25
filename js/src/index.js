const { Configuration, OpenAIApi } = require("openai");


var API_KEY = "API_KEY"; // API KEY
const configuration = new Configuration({
  apiKey: API_KEY, 
});

const openai = new OpenAIApi(configuration);
(async() => {
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
    });
    console.log(completion.data.choices[0].text)
    })()
