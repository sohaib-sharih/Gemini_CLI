# Project Overview

This project is a Python application utilizing the Chainlit framework to create an interactive chatbot. It integrates with the OpenAI API, specifically the `gpt-4.1` model, to process user messages and generate text-based responses.

## Core Technologies

*   **Python**: The primary programming language.
*   **Chainlit**: Framework for building the chat interface and handling message flow.
*   **OpenAI API**: Used for natural language processing and response generation.

## Functionality

The application listens for user messages via the Chainlit interface. Each message is sent to the OpenAI API, and the resulting text response is displayed back to the user in the chat.

# Building and Running

To run this application:

1.  **Ensure Dependencies are Installed**: Install the required Python packages (e.g., `openai`, `chainlit`). You might need to run `pip install -r requirements.txt` if such a file exists, or `pip install openai chainlit`.
2.  **Set OpenAI API Key**: Set your OpenAI API key as an environment variable:
    ```bash
    export OPENAI_API_KEY='your-api-key-here'
    ```
    (Replace `your-api-key-here` with your actual key).
3.  **Run the application**: Navigate to the project directory (`D:\Gemini\02_GEMINImd_File\audio`) in your terminal and run:
    ```bash
    chainlit run app.py
    ```

## Configuration

The Chainlit configuration is managed in `.chainlit/config.toml`. Key settings include:

*   `unsafe_allow_html = false`: Disables HTML rendering for security.
*   `edit_message = true`: Allows users to edit their messages.
*   `spontaneous_file_upload.enabled = true`: Enables file uploads.
*   `name = "Assistant"`: Sets the assistant's display name.

# Development Conventions

*   **Language**: Python.
*   **Structure**: The main application logic is in `app.py`. Chainlit configurations are in `.chainlit/config.toml`.
*   **Environment Variables**: The `OPENAI_API_KEY` is expected to be set in the environment.
*   **Security**: HTML rendering is disabled by default for safety.
