import React, { useState } from 'react'
import papier from '../images/icon-paper.svg'
import pierre from '../images/icon-rock.svg'
import ciseaux from '../images/icon-scissors.svg'
import { Partie } from '../partie/partie'
import { Score } from '../score/score'

export const Choix = () => {

    const [imgPerso, setImgperso] = useState()
    const [choix, setChoix] = useState('')


    const trois = ["yellow", "blue", "red"]
    const [choixAdv, setChoixadv] = useState(trois[Math.floor(Math.random() * trois.length)])
    const [imgAdv, setImgAdv] = useState()

    const [score, setScore] = useState(0)

    const [win, setWin] = useState('')

    const random = () => {
        const border = trois[Math.floor(Math.random() * trois.length)];
        setChoixadv(border);

        setImgAdv(() => {
            if (border === "red") {
                return <img src={pierre} alt="" />;
            } else if (border === "blue") {
                return <img src={papier} alt="" />;
            } else if (border === "yellow") {
                return <img src={ciseaux} alt="" />;
            } else {
                console.log('oui');
            }
        });


        setWin(() => {
            if (choix === "red" && choixAdv === "red") {
                return 'Egalité red'
            }
            else if (choix === "yellow" && choixAdv === "yellow") {
                return 'Egalité yellow'
            }
            else if (choix === "blue" && choixAdv === "blue") {
                return 'Egalité blue'
            }


            else if (choix === "yellow" && choixAdv === "blue") {
                setScore(score+1)
                return 'you win'
            }
            else if (choix === "yellow" && choixAdv === "red") {
                return 'you lose'
            } 
            
            else if (choix === "blue" && choixAdv === "yellow") {
                return 'you lose'
            } 
            else if (choix === "blue" && choixAdv === "red") {
                setScore(score+1)
                return 'you win'
            }
            else if (choix === "red" && choixAdv === "yellow") {
                setScore(score+1)
                return 'you win'
            } 
            else if (choix === "red" && choixAdv === "blue") {
                return 'you lose'
            }
             
        })
        console.log(win
    );

       

        console.log(score);

    }


    console.log(score);

    //ONCLICK
    const paper = () => {
        setChoix('blue')
        setImgperso(<img src={papier} alt="" />)


        random()
    }

    const scissors = () => {
        setChoix('yellow')
        setImgperso(<img src={ciseaux} alt="" />)

        random()
    }

    const rock = () => {
        setChoix('red')
        setImgperso(<img src={pierre} alt="" />)

        random()
    }


    // choixAdv === "blue" ? setImgAdv(<img src={papier} alt="" />) : console.log('');

    return (
        <div className='flex justify-center pt-[50px] flex-col items-center'>
            <div className='w-[1000px] h-[600px] bg-blue-900 pt-10'>

                <Score score={score}/>

                <div className='flex justify-center mt-[100px]'>
                    <div className='w-[200px] relative h-[275px]' id='bg'>
                        <div onClick={paper} className='absolute cursor-pointer -top-10 -left-10
                     bg-white p-5 rounded-full border-[15px] border-blue-500 '><img src={papier} alt="" /></div>
                        <div onClick={scissors} className='absolute cursor-pointer -top-10 -right-10
                       bg-white p-5 rounded-full border-[15px] border-yellow-500'><img src={ciseaux} alt="" /></div>
                        <div onClick={rock} className='absolute cursor-pointer bottom-10 left-[20%]
                      bg-white p-5 rounded-full border-[15px] border-red-500'><img src={pierre} alt="" /></div>

                    </div>

                </div>

                <div className='flex justify-end px-5'>
                    <div className='uppercase text-white border-2 px-9 hover:bg-white hover:text-blue-900 rounded-md py-1 border-white'>rulers</div>
                </div>
            </div>

            <Partie imgPerso={imgPerso} borderChoix={choix} choixAdv={choixAdv} imgAdv={imgAdv} win={win} />

        </div>


    )
}
