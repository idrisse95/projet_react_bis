import img from '../images/modal-desk.png'
import img2 from '../images/mobile-rules-modal.jpg'
import React, { useState } from 'react'

export const Modal = () => {

const [ferm, setFerm ] = useState('hidden')
 


const fermer = () => {
    ferm==='block' ? setFerm('hidden') : setFerm('block')
}
const fermer2 = () => {
    ferm==='block' ? setFerm('hidden') : setFerm('block')
}
const ouvre = () => {
    ferm==='hidden' ? setFerm('block') : setFerm('hidden')
}

 
    return (
        
        <div>
            <div id='mod' className={`fixed top-0 left-0 flex justify-center items-center  h-screen w-full ${ferm}`}>
                <div className="relative w-[500px] h-[500px] max-sm:hidden">
                    <img src={img} className={`w-full h-full`} alt="" />
                    <div onClick={fermer}  className='absolute top-[55px] right-[35px] cursor-pointer'>
                        <div className='w-[30px] h-[2px] bg-gray-300 rotate-[45deg] rounded-md'></div>
                        <div className='w-[30px] h-[2px] bg-gray-300 -rotate-[45deg] rounded-md'></div></div>
                </div>
                <div className="relative w-full h-screen max-sm:block sm:hidden">
                    <img onClick={fermer2} src={img2} className="w-full h-full" alt="" />
                    {/* <div  className='absolute top-[55px] right-[35px] '>
                        <div className='w-[30px] h-[2px] bg-gray-300 rotate-[45deg] rounded-md'></div>
                        <div className='w-[30px] h-[2px] bg-gray-300 -rotate-[45deg] rounded-md'></div></div> */}
            
                </div>
            </div>
           
            <div id='regl' onClick={ouvre} className='uppercase cursor-pointer text-white border-2 px-9 max-sm:text-xl max-sm:py-2 max-sm:px-16 hover:bg-white hover:text-blue-900 rounded-md py-1 border-white relative transition duration-300 ease-in-out'>rulers  <img id='img-regl' src={img} width="200px" className={` absolute -top-[150px] rounded-full  -left-10`} alt="" /></div>
        </div>
    )
}
