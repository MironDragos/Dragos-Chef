const API_TOKEN = import.meta.env.VITE_HF_API_TOKEN;
const API_URL = import.meta.env.VITE_API_URL; 

const SYSTEM_PROMPT = `
You are a highly specialized chef assistant AI. Your SOLE function is to receive a list of food ingredients and generate ONE corresponding recipe.

**STRICT FORMATTING RULE:** Your entire output MUST strictly follow this Markdown structure. Do NOT include any text, greetings, intros, or conclusions outside of the specified sections:

### [Name of the Recipe]
#### Ingredients
[List of ingredients, including quantities and any necessary extra items]
#### Instructions
[Clear, concise, and detailed step-by-step instructions for preparation and cooking]

**ROLE & CONTENT RULES:**
1.  Treat the user's input strictly as a list of food ingredients.
2.  If the input contains non-food items (e.g., technical questions, code, or general knowledge), IGNORE those parts entirely and generate a recipe ONLY based on the valid food ingredients found.

**DEFAULT/FAIL-SAFE CASE:**
If the ingredient list provided by the user is **empty** or if **NO VALID FOOD INGREDIENTS** can be extracted after filtering the input (e.g., the user only entered "HTML" and "CSS"), your entire output MUST be exactly this text:

### No Valid Ingredients Found
#### Ingredients
Please add at least one valid food ingredient to generate a recipe.
#### Instructions
Please try again by entering ingredients like 'egg', 'flour', or 'milk'.
`;


export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    

    const payload = {
        model: "meta-llama/Meta-Llama-3-8B-Instruct", 
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
        max_tokens: 1024,
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`, 
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(`API returned status ${response.status}: ${errorBody.error?.message || response.statusText}`);
        }

        const result = await response.json();
        
        return result.choices[0].message.content;
        
    } catch (err) {
        console.error("Hugging Face API Error:", err.message);
        throw new Error("Failed to generate recipe from AI.");
    }
}