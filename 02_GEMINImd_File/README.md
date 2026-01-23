## 2.0 Additional Context using GEMINI.md file

1. You can add additional context to what you are building to help **gemini cli** to assist you in building up your project.
2. Run the following command and it will help you generate a ***markdown file*** by reading through your entire project folder:
```
/init

This creates the GEMINI.md markdown file.
```

3. You can create or make edits to the GEMINI.md file **manually.**
4. **Purpose:** This markdown file gives gemini cli a ***context*** to how to make code changes to the project whenever we ask it to do so.
5. **Options:** `/memory refresh`, this allows you to refresh the gemini.md file by reviewing any changes made to the project and to apply any edits to it just to make sure that the **context** is up to date.
6. **Subfolders:** You can create a separate GEMINI.md file inside subfolders to provide context to that specific folder as well. We can create a ***project-wide*** file in the root directory, and a folder specific file inside ***sub directories.***
7. **Global GeminiMD file:** We can provide a global level gemini.md file to provide instructions to the model for all the projects we initialize in your local system.

```
Where to create the gemini.md file globally?

- Enable hidden files and folders
- Locate a .gemini folder inside your C drive, where gemini is installed.
- Example path -> C:\Users\USER\.gemini
```


### 2.2 Openai Project + Gemini

1. Project Structure:

```
├── audio/        ← THIS is your app.
│   ├── app.py
│   ├── requirements.txt
│   ├── .env
│   ├── .gitignore
│   └── venv/

```
1. Pre-requisites

```
- Vscode
- Python
- Virtual Environment
- Libraries: Chainlit, openai, dotenv, os
- API Keys: Openai(paid), gemini
Note: You can use a different ai model(free version) and replace the model and modify the code to make it work through chainlit. This is an example code using openai's model 'gpt-4.1'
```
1. Create a python virtual environment
```
Use Powershell:
python -m venv venv
```

2. Run the installation for libraries required through requirements.txt

```
Use Powershell:
pip install -r requirements.txt
```

3. Run the App

```
chainlit run app.py
```

4. Setting **Environment Variables**
	a. Linux/Ubuntu
	b. Windows (Powershell)
	c. .env file

```
Linux/Ubuntu/WSL

1. vi ~/.bashrc -> add the following at the end of the document
   export OPENAI_API_KEY="xxxx"
   export GEMINI_API_KEY="xxxx"
2. Esc + wq! + Enter
3. Reload -> source ~/.bashrc
--------------------------------
Windows (Powershell)

1. setx OPENAI_API_KEY "xxxx"
   setx GEMINI_API_KEY "xxxx"
2. Check -> Open 'Environment Variables Settings' from Windows Search. Look for the list of Environment Variables under System Variables. To Navigate, open the 'Env Settings' -> Advanced Settings -> Top Box contains Env Variables List -> Scroll To check.
3. Another Check Method -> Type -> echo $env:OPENAI_API_KEY -> Enter
4. You will need to restart your pc/laptop to ensure the ENV are loaded in your shell.
--------------------------------
   
Dot Env File (.env)

5. Add a .env file in your project folder
6. Add the env variables and their keys
7. Each Env Var must be in a new line.
8. Use the python-dotenv library in your app.py file to import or let python read env variables from the .env file.
9. Before pushing your code to github, add the .env file in your .gitignore file (IMPORTANT to keep your secrets/keys Safe!!) 

Flow:
.env file ---> This loads your env from .env
   ↓ (python-dotenv)
OS environment --> This reads your env
   ↓ (os.getenv)
Python code

Code Change:

Add the following code snippet in your app.py:

app.py file:
import os
from dotenv import load_dotenv

load_dotenv

api_key = os.getenv("OPENAI_API_KEY") ---> Example how it'll work then.


```
