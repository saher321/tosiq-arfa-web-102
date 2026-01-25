import React from 'react'
import { FaStar } from "react-icons/fa";

const RecipeItem = ({recipe}) => {
  return (
    <div className='rounded-lg shadow hover:shadow-lg bg-white'>
      <div className='h-44 w-full relative' style={{backgroundImage: `url(${recipe.image})`, backgroundPosition: "center", backgroundSize: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}>
        <span className='absolute top-[5%] right-[5%] bg-white rounded p-1'> 
            <FaStar className='text-yellow-500 inline -mt-1'/> { recipe.rating } 
        </span>
      </div>

      <div className='p-2'>
        <div className='font-bold text-sm'>
            {recipe.name}
        </div>
      </div>
    </div>
  )
}

export default RecipeItem
