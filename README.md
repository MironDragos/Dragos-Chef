# 👨‍🍳 DragosChef — AI Recipe Generator

A modern web app that transforms your available ingredients into a complete AI-generated recipe — in seconds.

> **Live Demo:** [dragos-chef.vercel.app](https://dragos-chef.vercel.app)

---

## 🌟 About the Project

**DragosChef** is built with **React** and powered by a Large Language Model (`Meta-Llama-3-8B-Instruct` via Hugging Face) that generates creative, personalized recipes based on whatever ingredients you have on hand.

The mission is simple: **Cook more, waste less.**

---

## 💡 How It Works

1. **Input Ingredients** — Add the ingredients you have available in your kitchen
2. **AI Call** — The list is sent to the Hugging Face Inference API
3. **Recipe Generation** — The LLM processes the input and returns a detailed recipe, strictly formatted in Markdown via a custom `SYSTEM_PROMPT`
4. **Display** — The app parses and renders the recipe using a Markdown renderer

---

## ✨ Features

- 🥕 Add and remove ingredients dynamically
- 🤖 Real-time AI recipe generation using a live LLM
- 📄 Clean Markdown recipe output (name, ingredients, step-by-step instructions)
- 🔐 Secure API key management via Vite environment variables
- ⚡ Fast development and build with Vite

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Modular CSS (per-component) |
| AI Model | Meta-Llama-3-8B-Instruct (Hugging Face) |
| API Communication | Fetch API with async/await |
| Deployment | Vercel |

---

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/MironDragos/Dragos-Chef.git
cd Dragos-Chef
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory (next to `package.json`):

```env
VITE_HF_API_TOKEN="your_huggingface_api_token_here"
VITE_API_URL="https://api-inference.huggingface.co/models"
```

> Get your free API token at [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

> ⚠️ The `.env` file is listed in `.gitignore` and will never be pushed to GitHub.

### 4. Run the development server

```bash
npm run dev
```

App runs at `http://localhost:5173`

---

## ☁️ Deploy on Vercel

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import this repo
3. In **Environment Variables**, add:
   - `VITE_HF_API_TOKEN` → your Hugging Face token
   - `VITE_API_URL` → `https://api-inference.huggingface.co/models`
4. Click **Deploy** — done ✅

---

## 📝 AI Response Format

The model is instructed via a strict `SYSTEM_PROMPT` to always respond in this Markdown structure:

```markdown
### [Recipe Name]

#### Ingredients
- [ingredient + quantity]

#### Instructions
1. [Step one]
2. [Step two]
...
```

This guarantees consistent, parseable output every time.

---

## 📁 Project Structure

```
src/
├── components/       # UI components (IngredientList, RecipeDisplay, etc.)
├── ai.js             # Hugging Face API call + prompt logic
├── App.jsx           # Root component + state management
└── index.css         # Global styles
```

---

## 🔮 Future Improvements

- Save favorite recipes to localStorage
- Choose cuisine style (Italian, Asian, etc.)
- Recipe history / session log
- Multiple recipe suggestions per request
- Mobile-optimized UI

---

## 🤝 Contributions

Contributions are welcome! Open an **Issue** or submit a **Pull Request** for any improvements or bug fixes.

---

## 👤 Author

**Dragos Miron**
- GitHub: [@MironDragos](https://github.com/MironDragos)
- LinkedIn: [linkedin.com/in/dragosmiron](https://linkedin.com/in/dragosmiron)
