import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { ALL_RECIPES } from '../utils/APIS.js';
import RecipeItem from '../components/RecipeItem.jsx';
import { Link } from 'react-router';

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
            } finally {
                setIsLoading(false)
            }
        }
        getRecipes();
    }, []);

    // setInterval, setTimeout (will take seconds)
    if (isLoading) {
        return(
            <div>Loading ...</div>
        )
    }

    return (
        <div>

        <div className='grid grid-cols-12 gap-3'>
            
        {
            recipes.map((recipe, i) => {
                return (
                    <div key={i} className='col-span-4'> 
                        <Link to={`/recipes/${recipe.id}`}>
                            <RecipeItem recipe={recipe} />
                        </Link>
                    </div>
                )

            })
        }
        </div>
        </div>
    )
}

export default Recipes
