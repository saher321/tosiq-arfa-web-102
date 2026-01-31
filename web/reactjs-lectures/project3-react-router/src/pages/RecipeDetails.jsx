import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ALL_RECIPES } from '../utils/APIS.js';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';
import { BiSolidDish } from 'react-icons/bi';
import { GiCook } from 'react-icons/gi';
import { MdLocalDining } from 'react-icons/md';

const RecipeDetails = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [recipeDetails, setRecipeDetails] = useState(null);
    const params = useParams();

    useEffect(() => {
        const getRecipeDetails = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(ALL_RECIPES)
                if (response.data.recipes.length == 0) return setRecipeDetails(null);

                // find recipe item
                const recipeData = response.data.recipes.find((item) => item.id == params.id)
                console.log(recipeData)
                setRecipeDetails(recipeData)
                setIsLoading(false)

            } catch (error) {
                console.log("Error: ", error)
            } finally {
                setIsLoading(false)
            }
        }
        getRecipeDetails();
    }, []);

    // setInterval, setTimeout (will take seconds)
    if (isLoading) {
        return (
            <div>Loading ...</div>
        )
    }

    return (
        <div className='bg-white shadow-2xl p-4 rounded-lg'>
            <div className='flex items-start gap-6 flex-wrap'>
                <div>
                    <img src={recipeDetails?.image} className='rounded-lg h-56 w-56' alt="" />
                </div>
                <div>
                    <div className='font-bold text-lg'>
                        {recipeDetails?.name}
                    </div>
                    <div>
                        <div className='my-3 flex items-center justify-between'>
                            <div className='text-center'>
                                <MdLocalDining className='inline text-zinc-600' />
                                <div>{recipeDetails?.servings}</div>
                            </div>
                            <div className='text-center'>
                                <GiCook className='inline text-zinc-600' />
                                <div>{recipeDetails?.difficulty}</div>
                            </div>
                            <div className='text-center'>
                                <BiSolidDish className='inline text-zinc-600' />
                                <div>{recipeDetails?.cuisine}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaStar className='text-yellow-500 inline -mt-1' /> {recipeDetails?.rating}
                    </div>

                    <div className='my-4'>
                        <button className='hover:shadow cursor-pointer py-2 px-4 bg-black text-gray-50 rounded active:bg-black/80'>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex justify-between gap-8 mt-4'>
                
                <div>
                    <span className='mt-6 mb-4 block font-bold'>Ingredients</span>

                    <ol>
                        {
                            recipeDetails?.ingredients.map((ingredient, i) => {
                                return (
                                    <li key={i}>{i+1}- {ingredient}</li>
                                )
                            })
                        }
                    </ol>
                </div>
                <div className='mt-6 h-[100] w-[2px] bg-gray-200'>&nbsp;</div>
                <div>
                    <span className='mt-6 mb-4 block font-bold'>Instructions</span>

                    <ol>
                        {
                            recipeDetails?.instructions.map((instruction, i) => {
                                return (
                                    <li key={i}>{i+1}- {instruction}</li>
                                )
                            })
                        }
                    </ol>
                </div>

            </div>
        </div>
    )
}

export default RecipeDetails
