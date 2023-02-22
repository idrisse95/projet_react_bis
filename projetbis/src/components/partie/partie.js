import React, { useState } from 'react'
import { Score } from '../score/score'
import papier from '../images/icon-paper.svg'
import pierre from '../images/icon-rock.svg'
import ciseaux from '../images/icon-scissors.svg'

export const Partie = (props,tr) => {
   
   
   
   console.log(props.borderChoix);
   console.log(props.choixAdv);


    return (
        <div className='w-[1000px] h-[600px] bg-red-900 pt-10 mt-10'>

            <Score  b={tr}/>

            <div  className='flex justify-center mt-16 items-center text-center'>
                <div>
                    <div className='text-white mb-10 tracking-widest font-semibold'>YOU PICKED</div>
                    <div className={` w-[200px] h-[200px] flex justify-center items-center 
                     bg-white  rounded-full border-[22px] border-${props.borderChoix}-500`}> {props.imgPerso}  
                     </div>
                </div>
                <div className='mx-10'>
                    <p className='uppercase text-white text-3xl font-bold'>{props.win}</p>
                    <p><button className='bg-white px-10 uppercase text-sm py-2 rounded-md mt-4'>Play again</button></p>
                </div>
                <div>
                <div className='text-white mb-10 tracking-widest font-semibold'>THE HOUSE PICKED</div>
                <div className={` w-[200px] h-[200px] flex justify-center items-center 
                     bg-white  rounded-full border-[22px] border-${props.choixAdv}-500`}>{props.imgAdv}
                     </div>
                </div>
            </div>


            <div className='flex justify-end mt-16 px-5'>
                <div className='uppercase text-white border-2 px-9 hover:bg-white hover:text-blue-900 rounded-md py-1 border-white'>rulers</div>
            </div>
        </div>
    )
}


// setScore(() => {
//     if (win === "you win") {
//          setScore(score+1);
//     }
//     else{
//         return score
//     }
// })
