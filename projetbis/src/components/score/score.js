import React, { useState } from 'react'
import img1 from '../images/logo.svg'
export const Score = (props) => {

   

  return (
    
        <div className='flex justify-center'>
                <div className='border-2 border-white flex justify-between w-[500px] p-3 rounded-xl'>
                    <div>
                        <img src={img1} alt=""  />
                    </div>
                    <div className='bg-white px-7 rounded-xl text-blue-900 text-center py-3'>
                        <p className='text-sm'>Score</p>
                        {/* props pour le chiffr */}
                        <p className='font-bold text-5xl'>{props.score}</p>
                    </div>
                </div>
            </div>
  
  )
}
