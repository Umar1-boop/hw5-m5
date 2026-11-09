import { use, useEffect, useState } from 'react'
import './simpleRecipes.scss'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function SimpleRecipes() {
    const [recipes, setRecipes] = useState()

    useEffect(() => {
      axios.get('https://dummyjson.com/recipes')
      .then(({data}) => setRecipes(data?.recipes))
      .catch((e) => console.log(e))
    }, [])
  return (
    <div>
        <section className="container recipesCount">
            <h2>Simple and tasty recipes</h2>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

            {
                recipes?.map((recipe) => (
                  <NavLink key={recipe.id} to={`/recipes-page/${recipe.id}`}>
                    <h1>{recipe.name}</h1>
                  </NavLink>
                ))
            }
        </section>
    </div>
  )
}
