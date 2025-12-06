import './Main.css'
import React from 'react'
import ListAndGet from './ListAndGet'
import RecipeDesc from './RecipeDesc'
import {getRecipeFromMistral} from '../ai'



export default function Main(){
    const [list, setList] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    async function getRecipe() {
        setIsLoading(true); 
        setRecipe("")

        const recipeMarkdown = await getRecipeFromMistral(list)
        if (list.length > 1) {
            setRecipe(recipeMarkdown)
        }

        setIsLoading(false);
    }

    const ListIngredients=list.map(function ingredient(prop, index){
        return(
            <li onClick={() => removeOne(index)} key={index} className='ListEntry'>{prop}</li>
        )
    })


    function submit(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient===""){
            return
        }
        setList(prevList => [...prevList, newIngredient])
    }

    function removeOne(indexToRemove){
        setRecipe("");
        setIsLoading(false)

        setList(prevList => {
            return prevList.filter((_, index) => index !== indexToRemove);
        });
    }

    return(
        <div className='MainContainer'>
            <form action={submit} className='FormContainer'>
                <input 
                type="text"
                placeholder="eg. egg" 
                name="ingredient"
                />
                <button disabled={isLoading}>Add ingredients</button>
            </form>
            {list.length>0 && <ListAndGet
                list={list}
                ListIngredients={ListIngredients}
                toggle={getRecipe}
            />}
            {recipe && <h2 className='recipeStart'>Dragos Recommends:</h2>}
            {recipe && <RecipeDesc recipe={recipe} />}
            {isLoading && <p className='loading-spinner'>Loading...</p>}
        </div>
    )
}