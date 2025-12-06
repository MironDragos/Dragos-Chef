export default function ListAndGet(prop){
    return(
        <section className='MainFunction'>
                <h2>Ingredients on Hand</h2>
                <ul className='ListContainer'>{prop.ListIngredients}</ul>
                {prop.list.length>1 &&<div className='GetRecipeContainer'>
                    <div className='GetTextContainer'>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button className="GetRecipeButton"onClick={prop.toggle}>Get recipe</button>
                </div>}
            </section>
    )
}