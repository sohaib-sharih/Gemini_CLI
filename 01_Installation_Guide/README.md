### 1.0 Installing Gemini CLI and Introduction

1. Gemini CLI allows us to create code for our applications by providing context and using ***gemini cli commands***, moreover we can do the following:
	a. Add custom CLI Commands
	b. Connect to an MCP server, which allows you to access 3rd party services and apis such as firebase, nano banana, etc.
2. **Installation**
```
Prerequisite
1. Install Nodejs on Windows

Installing Globally:
npm install -g @google/gemini-cli
```

3. **GEMINI API KEYS:** Click on the following link to get your free api keys [Gemini API Keys Link](https://aistudio.google.com/app/apikey)
4. **How to start?**

```
Prequisites
1. Install Gemini CLI
2. Set the API keys
3. Authenticate
   
To start, type the following command on your terminal

gemini

Then for authentication, type:

/auth
OUTPUT:
1. login with Google
2. Use GEMINI Api key
3. Vertex Ai

NOTE: You need to select how you want to authenticate? You can export the GEMINI_API_KEY, that allows gemini command to load the Environment variable while starting Gemini Google.
------------

```
3. **Environment Variables:** There are environment variables that are loaded using a sequence from the lower most to the uppper most level of the directory where it searches for env variables in ***.env files found.*** 
4. **How do we set ENV Variables?**

For **WSL/LINUX shells**

```
Method 1 (WSL/LINUX)

Add the following in the ~/.bashrc file
- export GEMINI_API_KEY="xxxx"
- reload it using source ~/.bashrc
- Then run gemini
  
Method 2 (WSL/LINUX)
Create a temporary env variable with your api key stored in it
- Run export GEIMINI_API_KEY="xxx"
- Run gemini
- Note: This is temporary, you will have to do this all the time each time you restart your computer.
  
Method 3 (Works for all)
Using .env file
- save the .env file in your project folder
- Run (WSL/Linux Shell) --> export $(cat .env | xargs)

Example output:
GEMINI_API_KEY=abc123 APP_ENV=production
------------------------
Interpretation of export $(cat .env | xargs)

export $(...)

becomes:
export GEMINI_API_KEY=abc123 APP_ENV=production

So variables are exported **by name**, not just values.

Where are variables exported to?

Into the **current shell environment**.

That means:
- Any command run **after** this
- In the **same terminal** can read them.
--------------------------

NOTE:
`xargs`

Turns multiple lines into one:

```

For **Windows Powershell**

```
setx env:GEMINI_API_KEY "xxx"

Example Steps:
1. setx env:GITHUB_PERSONAL_ACCESS_TOKEN "xxxx"
2. Restart your computer, or just the powershell
3. CHECK -> echo $env:GITHUB_PERSONAL_ACCESS_TOKEN
Note: If it returns the value, then its working, otherwise you will have to restart the powershell terminal or restart your computer for changes to take effect.
4. You can also check the win GUI -> Environment Variables Advanced Settings -> USER section must contain the variable set.

```

### 1.1 Run your Gemini CLI

1. Open your vscode and Powershell
2. Type **gemini** and hit enter.
3. If you're **env variable** is set properly, then it would automatically detect your api token and start.
4. Press Esc to installing vscode companion, however, you can install the extension of Google Gemini Companion separately.
5. Give it a test prompt and ask it to perform a task.
6. Congratulations you're done.
