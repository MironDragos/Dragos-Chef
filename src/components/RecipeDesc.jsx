import React from 'react';
import Markdown from 'react-markdown';

export default function RecipeDesc(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <Markdown>
                {props.recipe}
            </Markdown>
        </section>
    )
}