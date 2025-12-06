# 👨‍🍳 DragosChef - AI Recipe Generator

## 🌟 About the Project

**DragosChef** is a modern web application built with **React** that transforms your list of available ingredients into a complete, suggested recipe. This project utilizes an advanced Large Language Model (`Meta-Llama-3-8B-Instruct`) to generate creative and personalized recipes in real-time based on what you have on hand.

The mission is simple: **Cook more, waste less!**

## 💡 How It Works

1.  **Input Ingredients:** The user adds the ingredients they have available in their kitchen.
2.  **AI Call:** The list is sent to a specialized endpoint of the Hugging Face API.
3.  **Recipe Generation:** The AI model (`Meta-Llama-3-8B-Instruct`) processes the input and generates a single, detailed recipe, strictly formatted in Markdown according to a rigorous `SYSTEM_PROMPT`.
4.  **Display:** The application parses and displays the generated recipe using a Markdown renderer.

## ⚙️ Technology Stack

- **Frontend:** React (with a focus on Hooks: `useState`, state management).
- **Tooling:** Vite.
- **Styling:** Modular CSS (CSS files imported directly into their respective components).
- **AI Integration:** Asynchronous logic (`async/await`) and error handling managed within `ai.js`.

## 🚀 Installation and Local Setup

To run this project locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone [Your GitHub URL]
cd dragoschef
```

### 2\. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3\. Configure the API Keys (Secret Management)

The project uses Environment Variables (managed by Vite) to protect the API key, ensuring it is not exposed in the source code or on GitHub.

1.  Obtain an API Key from your provider (Hugging Face).
2.  Create a file named **`.env`** in the **root directory** of the project (next to `package.json`).
3.  Add the necessary variables, ensuring you use the **`VITE_`** prefix:

<!-- end list -->

```env
VITE_HF_API_TOKEN="YOUR_API_KEY_HERE"
VITE_API_URL="[https://api-inference.huggingface.co/models](https://api-inference.huggingface.co/models)"
```

**\*Note:** The `.env` file is automatically ignored by Git for security.\*

### 4\. Start the Application

```bash
npm run dev
# or
yarn dev
```

The application should now be running at `http://localhost:5173`.

## 📝 AI Response Format

The AI model is strictly instructed to adhere to the following Markdown format to guarantee correct and consistent recipe display:

```markdown
### [Name of the Recipe]

#### Ingredients

[List of ingredients, including quantities]

#### Instructions

[Clear, step-by-step instructions]
```

## 🤝 Contributions

All contributions are welcome\! Please open an **Issue** or a **Pull Request** for improvements or fixes.

```

```
