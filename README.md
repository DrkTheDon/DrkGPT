# DrkGPT
DrkGPT uses the GPT 3.1 API to generate an answer to your question. Teachers nowadays use draftback to see if you copy or pasted. My program writes the essay for you at a designated speed, pausing now and then making your writing more trustworthy.
## Installation
#### Python insallation
```
git clone https://github.com/DrkTheDon/DrkGPT.git
cd /DrkGPT/python
pip3 install -r requirements.txt
python3 main.py
```
### API USAGE
To use DrkGPT you need an API access key. To get your personal you need to own an account and enter: https://beta.openai.com/account/api-keys

## Showcase
#### QUESTION
![](https://github.com/DrkTheDon/DrkGPT/blob/main/github/Screenshot%20from%202023-01-24%2023-24-48.png)
#### OUTPUT IN GOOGLE DOCUMENTS
![](https://github.com/DrkTheDon/DrkGPT/blob/main/github/ezgif-2-b9f85f2fc1.gif)

*Whoops accidentaly put the dot at the beggining. And this was written on the "HIGH SPEED" option.*

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

## Credits
All credits given to the OpenAI team for the API usage. 
The Main developers of this project are **DrkTheDon** (drk#4697) and **DragonSlayer64** (ludvig#2236).
