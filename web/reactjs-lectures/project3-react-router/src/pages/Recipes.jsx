import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { ALL_RECIPES } from '../utils/APIS.js';

// get => display data
// delete => data delete
// post => add data
// put/patch => data update

const Recipes = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(ALL_RECIPES)
                if (response.data.recipes.length == 0) return setRecipes([]);

                setRecipes(response.data.recipes)
                setIsLoading(false)
                
            } catch (error) {
                console.log("Error: ", error)
                setIsLoading(false)
            }
        }
        getRecipes();
    }, [])

    if (isLoading) {
        return(
            <div>Loading ...</div>
        )
    }


    return (
        <div>
        {
            recipes.map((recipe, i) => {
                return (
                    <div key={i}> {recipe.id} - {recipe.name}</div>
                )

            })
        }
        </div>
    )
}

export default Recipes
