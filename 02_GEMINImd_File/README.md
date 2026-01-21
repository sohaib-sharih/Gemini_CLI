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
