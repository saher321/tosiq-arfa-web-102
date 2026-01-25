import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdLocalDining } from "react-icons/md";
import { GiCook } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";

const RecipeItem = ({recipe}) => {
  return (
    <div className='rounded-lg shadow hover:shadow-lg bg-white'>
      <div className='h-44 w-full relative' style={{
        backgroundImage: `url(${recipe.image})`, 
        backgroundPosition: "center", 
        backgroundSize: "cover", 
        borderTopLeftRadius: "8px", 
        borderTopRightRadius: "8px"
        }}>
        <span className='absolute top-[5%] right-[5%] bg-white rounded p-1'> 
            <FaStar className='text-yellow-500 inline -mt-1'/> { recipe.rating } 
        </span>
      </div>

      <div className='p-2'>
        <div className='font-bold text-sm'>
            {recipe.name}
        </div>
        <div className='my-3 mx-6 flex items-center justify-between'>
            <div className='text-center'>
                <MdLocalDining className='inline text-zinc-600' />
                <div>{recipe.servings}</div>
            </div>
            <div className='text-center'>
                <GiCook className='inline text-zinc-600' />
                <div>{recipe.difficulty}</div>
            </div>
            <div className='text-center'>
                <BiSolidDish className='inline text-zinc-600' />
                <div>{recipe.cuisine}</div>
            </div>
        </div>

        
            {
                recipe?.tags?.length > 0 &&
                <>
                <hr className='text-zinc-200'/>
                <div className='mt-3 flex gap-1 text-xs'> 
                    {
                        recipe.tags.map((tag)=> {
                            return (
                                <div className='p-1 rounded-lg bg-purple-200 text-purple-800'>{tag}</div>
                            )
                        })
                    }
                </div>
                </>
            }
      </div>
    </div>
  )
}

export default RecipeItem
