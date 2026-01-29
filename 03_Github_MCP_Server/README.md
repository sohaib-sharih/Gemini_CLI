## 3.0 Github_MCP_Server and Docker

1. Prerequisites

```
1. Docker Desktop
2. Nodejs
3. Python
4. Libraries for ai project: Chainlit, openai, python-dotenv
```

2. **Setup github Personal Access Token** and **Configure .gemini/settings.json file.**

#### Using MCP Servers

[Tutorials | Gemini CLI](https://geminicli.com/docs/cli/tutorials/)
#### Setting up a Model Context Protocol (MCP Server)

1. We will demonstrate an example of using an MCP server of Github, allowing your gemini cli to communicate with your github repository and perform **github operations**.
2. The server can be **remote** or run **locally** in a Docker container
3. **PAT - Personal Access Token:** *You need to create this from your github account and ensure to select the right permissions*.
4. **How does GEMINI work with an MCP server?**
	a. The server is defined in the `~/.gemini/settings.json` file.
	b. It requires a GitHub Personal Access Token (PAT) with appropriate scopes for authorization.
	c. The Gemini model automatically selects and executes the appropriate GitHub tools based on natural language prompts.
	d. The CLI presents a confirmation dialog for tool executions unless the server is marked as "trusted".
5. **Configuring the settings.config file:**
```
Location on Windows

C:\Users\<YOUR_USER_NAME>\.gemini

Apply the following json code block -> settings.json file:

{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}

FINAL OUTPUT:

{

  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  },
  "hasSeenIdeIntegrationNudge": true,
 
"mcpServers": {
  "github": {
    "command": "docker",
    "args": [
      "run",
      "-i",
      "--rm",
      "-e",
      "GITHUB_PERSONAL_ACCESS_TOKEN",
      "ghcr.io/github/github-mcp-server"
    ],
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
    }
  }
}
}
```

6. **Setting up Environment Variables**: *You should set up a consistent environment, if you are using windows, and have **nodejs, Gemini, npm and npx** installed on windows, then save all your environment variables on windows only, and not on **WSL**, otherwise running gemini from wsl may not work because Nodejs was only installed on windows and not the file system of WSL.*

```
For windows

1. setx env:GITHUB_PERSONAL_ACCESS_TOKEN "xxxx"
2. Restart your computer, or just the powershell
3. CHECK -> echo $env:GITHUB_PERSONAL_ACCESS_TOKEN
Note: If it returns the value, then its working, otherwise you will have to restart the powershell terminal or restart your computer for changes to take effect.
4. You can also check the win GUI -> Environment Variables Advanced Settings -> USER section must contain the variable set.
   
For WSL/LINUX

1. vi ~/.bashrc
2. export GITHUB_PERSONAL_ACCESS_TOKEN="xxxx"
3. Add the export line in the last line of the bashrc file
4. Save it by ESC + !wq + Enter
5. source ~/.bashrc  -> to reload
```
#### Gemini CLI Capabilities

1. Repository management, including browsing code, searching files, and analyzing commits.
2. Issue and pull request automation, such as creating, listing, and managing issues or pull requests.
3. Code operations, such as creating branches, updating files, and managing releases.
4. Workflow monitoring, including analyzing GitHub Actions build failures and managing CI/CD pipelines.
5. **CI/CD and Workflows**: The server can create, monitor, and manage GitHub Actions. This includes:
    - Listing all available workflows in a repository.
    - Monitoring real-time status of workflow runs and individual jobs.
    - Triggering workflows manually with custom inputs.
    - Re-running failed jobs or canceling active runs.
    - Analyzing build failures to debug pipeline issues.

#### Example Python Script App

1. This app can change the values in the fields of a **csv file.**
#### Github_MCP_Server: Sales Price Update and GitHub Repository Operations

This project involves a Python script to modify a CSV file, specifically updating 'Sale price' values, and demonstrates concepts related to GitHub repository management, though some steps were initially uncompleted due to environment limitations.
#### Functionality:

1. **CSV File Modification:**
    a. The `update_csv.py` script reads `white heaven.csv`.
    b. It identifies and updates all 'Sale price' values in the CSV to `4800`.
    c. The modified data is then written to `updated_white_heaven.csv`.
#### How to use the script:
  
1.  Ensure you have Python installed.
2.  Navigate to this directory in your terminal.
3.  Run the script using: `python update_csv.py`

#### Uncompleted GitHub Steps (Initial Environment Limitations):

*Initially, this project attempted to perform Git repository initialization, GitHub repository creation, and code pushing, but these steps could not be completed directly within the execution environment due to `git` and `python` commands not being in the system's PATH.* **Solution:** *You need to provide the github repository path by creating it manually from your account.*

*(Note: These GitHub operations are now being handled by the Gemini CLI for the overall project.)*
