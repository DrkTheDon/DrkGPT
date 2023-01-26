# DrkGPT
DrkGPT uses the GPT 3.1 API to generate an answer to your question. 

Teachers nowadays use draftback to see if you copy or pasted. DrkGPT writes the essay for you at a designated speed, pausing now and then making your writing more trustworthy.
## Installation/Usage
### Python Installation
```
git clone https://github.com/DrkTheDon/DrkGPT.git
cd /DrkGPT/python
pip3 install -r requirements.txt
python3 main.py
```
### Javascript/Node Installation
```
git clone https://github.com/DrkTheDon/DrkGPT.git
cd /DrkGPT/js
npm install openai
npm install prompt-sync
npm install express
npm update
cd src/
node index.js
```
### API USAGE
In order to use **DrkGPT** you need an **API access key**. Enter [API KEYS](https://beta.openai.com/account/api-keys) and create a secret key



## Preview
#### QUESTION TO DRKGPT
![](https://github.com/DrkTheDon/DrkGPT/blob/main/github/Screenshot%20from%202023-01-24%2023-24-48.png)
#### OUTPUT IN GOOGLE DOCUMENTS
![](https://github.com/DrkTheDon/DrkGPT/blob/main/github/ezgif-2-b9f85f2fc1.gif)

*Written on the "HIGH SPEED" option. Ignore the dot that was my mistake lol.*


## For Developers

#### API Code Section in Python
```py
# API Key and URL Variable
openai.api_key = "YOUR_API_KEY"
url = "https://api.openai.com/v1/completions"

# API REQUEST
headers = {"Authorization": f"Bearer {openai.api_key}"}
data = {'model': 'text-davinci-003', 'prompt': f'{prompt}', "temperature": 0, "max_tokens": 2048}
raw_json = requests.post(url, headers=headers, json=data).json()

# Getting generated text from json and stripping it out of the \n lines.
plain_text = raw_json['choices'][0]['text']
plain_text_stripped = plain_text.strip() # Finished Completion
```
#### API Code Section in Javascript
```js
const { Configuration, OpenAIApi } = require("openai");


var API_KEY = "API_KEY"; // Variable for api key
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
```

## Future Plans
#### Browser Extension
We Plan to make this into a browser extension. Head onto [DrkGPT-EXT](https://github.com/DrkTheDon/DrkGPT-EXT) and check it out!

#### Builds
I'm currently working on making a workflow that will make drkgpt.py into an exe after each commit.

## Credits
All credits given to the OpenAI team for the API usage. 
The Main developers of this project are **DrkTheDon** (drk#4697) and **DragonSlayer64** (ludvig#2236).
