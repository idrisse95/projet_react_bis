import React, { useState } from 'react'
import { Modal } from '../modal/modal'
import { Score } from '../score/score'

export const Partie = (props) => {

    const [solid, setSolid] = useState('')






    return (
        <div className={`sm:w-[1000px] sm:h-[600px] max-sm:h-screen bg-blue-900 pt-10 ${props.partie} `}>

            <Score score={props.score} />




            {/* <div className='flex justify-center'>
                    <div className='border-2 border-white flex justify-between w-[500px] p-3 rounded-xl'>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div className='bg-white px-7 rounded-xl text-blue-900 text-center py-3'>
                            <p className='text-sm'>Score</p>
                          
                            <p className='font-bold text-5xl'>{score}</p>
                        </div>
                    </div>
                </div> */}

            <div className='flex justify-center max-sm:mt-[100px] mt-16 items-center text-center'>
                <div className='max-sm:flex max-sm:flex-col-reverse mr-5'>
                    <div className='text-white mb-10 tracking-widest font-semibold max-sm:mt-10'>YOU PICKED</div>

                    <div id='g' >
                        <div id='f'   >
                            <div id='o'   >
                                <div   className={`max-sm:w-[150px] max-sm:h-[150px] w-[200px] h-[200px] flex justify-center items-center
                         bg-white  rounded-full border-[22px] border-${props.borderChoix}-500`}> {props.imgPerso}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='mx-10 max-sm:absolute bottom-[230px]'>
                    <p className='uppercase text-white text-3xl max-sm:text-6xl font-bold'>{props.win}</p>
                    <p><button onClick={props.rejouer} className='bg-white max-sm:text-2xl max-sm:px-20 max-sm:py-4 px-10 uppercase text-sm py-2 rounded-md mt-4'>Play again</button></p>
                </div>



                <div className='max-sm:flex max-sm:flex-col-reverse ml-5'>

                    <div className='text-white mb-10 tracking-widest font-semibold max-sm:mt-10'>THE HOUSE PICKED</div>
                    <div className={`relative max-sm:w-[150px] max-sm:h-[150px] w-[200px] h-[200px] flex justify-center items-center 
                     bg-white  rounded-full ${props.solid} border-${props.choixAdv}-500`}>{props.imgAdv}

                        <div className={`w-full h-full bg-violet-800 rounded-full absolute flex justify-center items-center text-[100px] ${props.opa}`}>{props.rebours}</div>

                    </div>
                </div>


            </div>


            <div className='flex max-sm:absolute bottom-[100px] left-[20%] justify-end max-sm:justify-center mt-12 px-5'>
                <Modal />
            </div>
        </div>

    )
}

