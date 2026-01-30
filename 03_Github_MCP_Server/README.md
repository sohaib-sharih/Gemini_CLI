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

#### Unable to add, commit or push changes (Solution)

1. **Background:** Sometimes you would get an error on Gemini CLI indicating that it was unable to execute the git command since it couldnt find the ***powershell.***
2. **Problem:** The reason why gemini cli can't find the powershell is because:
	a. **Container Isolation:** The GitHub MCP server uses the **GitHub API**. It does not execute local shell commands like `git add` or `git commit`.
	b. **Pathing Errors:** If Gemini tries to use a local terminal command, but the container lacks that binary, you will get "not found" errors.
3. **Solution Options:**
	a. **Use API-based Prompts:** Use prompts that trigger the MCP server's API tools directly.
	- Example: "Create a new file in my repository 'repo-name' with this content."
	- Example: "Update the content of README.md in 'repo-name'."
	- Example: "Create a new commit in 'repo-name' on branch 'main' that adds these changes."
	b. 1. **Verify MCP Server Toolsets:** The GitHub MCP server uses specific "toolsets." Ensure your `~/.gemini/settings.json` doesn't restrict these. A default setup usually includes `repo`, `contents`, and `issues`.
	c. **Local (Non-Docker) Installation:** To interact with your local Git files directly, install the [GitHub MCP server](https://github.com/) locally using **Node.js** instead of Docker. This allows the server to run in your native environment.
	- Install via npm: `npm install -g @modelcontextprotocol/server-github` (or as an extension in Gemini CLI).
	- This ensures the server can access your local environment variables and system paths more easily.
	d. **Check Terminal Integration:** If using Docker, ensure the `gemini` CLI has access to your shell. Some users find success by running Gemini in **"Agent Mode"** which allows it more flexibility in choosing between local terminal tools and MCP tools. ***Quick Test:** Try the prompt: `"Create a new file named 'test.txt' in [YourRepoName] with text 'Hello World' using the` `GitHub MCP tool``."` If this works, the issue is with how you are phrasing local Git commands versus API-based repository updates.*

#### Solution Option: *Modify settings.json file + set the powershell Path on Windows*

1. **settings.json**: This file can be found in the .gemini folder installed in your c drive. Add the `tools` configuration to your file. This allows Gemini to use your local shell for commands like `git`

```
{
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  },
  "tools": {
    "shell": {
      "enableInteractiveShell": true
    }
  },
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}
-------------------------

settings.json file (GEMINI API KEY + GITHUB PERSONAL ACCESS TOKEN)


```

2. ***Why the API prompts failed?*** *Even when providing the remote URL, Gemini CLI still tries to use a **local tool** called `run_shell_command` to execute the `git` binary on your computer. Without the `tools.shell` configuration, Gemini cannot "see" your terminal.*
3. **Usage Tips for Local Git**
	a. **Manual Shell Mode:** You can type `!` in the Gemini CLI to run a command (e.g., `! git status`).
	b. **Prompting Gemini:** You can say: _"Stage my local changes and commit them with the message 'testing mcp' then push to origin."_ Gemini will attempt to use `powershell.exe` to run those commands.
	c. **Confirmation:** Gemini will likely ask for your permission before running these shell commands unless you mark the shell tool as "trusted" in your prompts.
4. **Setting the Powershell Path:** *Note: Do not use the setx command on powershell to set the path, otherwise it will overwrite all other paths.*
	- Identify the PowerShell Path
	- Add to PATH via PowerShell (Recommended)
	- Run this command in your current PowerShell window to permanently add the directory to your User PATH: 
```
Powershell:

[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Windows\System32\WindowsPowerShell\v1.0", "User")

NOTE: On Windows, Gemini looks for `powershell.exe` in your system `PATH`. If it fails, You will need to add/make sure `C:\Windows\System32\WindowsPowerShell\v1.0\` is in your Environment Variables.

------------

Verify the PATH
1. Check your Environment Variable Settings -> Advanced tab > Environment Variables.
2. Under **User variables**, select **Path** and click **Edit**.
   
----------
The Command Breakdown

- **"Path"**: This is the name of the variable we are editing.
- **$env:Path + "..."**: This tells Windows to take your **current** path and add the new location to the end (so you don't delete your existing settings).
- **"User"**: This is a fixed keyword for the Windows API. It means "Apply this to the current user's profile."
  
To Confirm
- Run echo $env:PATH
- You will find the path you added for powershell
- Or check the environment variable settings through windows.

```

**Congratulations!** If you have followed all the steps, You can now run all of your github commands through Github MCP Server and Gemini CLI.
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


Goodluck!