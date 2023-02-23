import React, { useEffect, useState } from 'react'
import papier from '../images/icon-paper.svg'
import pierre from '../images/icon-rock.svg'
import ciseaux from '../images/icon-scissors.svg'
import { Partie } from '../partie/partie'
import { Score } from '../score/score'

export const Choix = () => {

    const [acceuil, setAcceuil]
        = useState('block')

    const [opa, setOpa] = useState('opacity-0')
    const [solid, setSolid] = useState('')
    const [partie, setPartie] = useState('hidden')


    const [imgPerso, setImgperso] = useState()
    const [choix, setChoix] = useState('')

    const [rebours, setRebours] = useState(3);
    const trois = ["yellow", "blue", "red"]
    const [choixAdv, setChoixadv] = useState(trois[Math.floor(Math.random() * trois.length)])
    const [imgAdv, setImgAdv] = useState()

    const [score, setScore] = useState(0)

    const [win, setWin] = useState('')






    const border = trois[Math.floor(Math.random() * trois.length)];


    //Function pour le score et random
    const random = () => {






        setChoixadv(border);

        setImgAdv(() => {
            if (border === "red") {
                return <img src={pierre} alt="" />;
            } else if (border === "blue") {
                return <img src={papier} alt="" />;
            } else if (border === "yellow") {
                return <img src={ciseaux} alt="" />;
            } else {
            }
        });




        setTimeout(() => {
            setPartie('block')
            setAcceuil('hidden')
        }, 1000);

        // Counter()


    }

    const compare = (choix, choix2) => {
        setTimeout(() => {
            if (choix === "red" && choix2 === "red") {
                setWin('Egalité red');
            }
            else if (choix === "yellow" && choix2 === "yellow") {
                setWin('Egalité yellow');
            }
            else if (choix === "blue" && choix2 === "blue") {
                setWin('Egalité blue');
            }
            else if (choix === "yellow" && choix2 === "blue") {
                setScore(score + 1);
                setWin('you win');
            }
            else if (choix === "yellow" && choix2 === "red") {
                setScore(score - 1);
                setWin('you lose');
            }
            else if (choix === "blue" && choix2 === "yellow") {
                setScore(score - 1);
                setWin('you lose');
            }
            else if (choix === "blue" && choix2 === "red") {
                setScore(score + 1);
                setWin('you win');
            }
            else if (choix === "red" && choix2 === "yellow") {
                setScore(score + 1);
                setWin('you win');
            }
            else if (choix === "red" && choix2 === "blue") {
                setScore(score - 1);
                setWin('you lose');
            }
            else {

            }
        }, 6000);
    }

    // effect



    // useEffect(() => {
    // },[rebours])
    // const [rebours, setRebours] = useState(3);
    // const [isHidden, setIsHidden] = useState(false);

    // const Counter = () => {


    //     useEffect(() => {
    //         const intervalId = setInterval(() => {
    //             setRebours(rebours => rebours - 1);
    //         }, 1000);

    //         return () => {
    //             clearInterval(intervalId);
    //         };
    //     }, []);

    //     useEffect(() => {
    //         if (rebours <= 0) {
    //             setIsHidden(true);
    //             setRebours(3);
    //         } else {
    //             setIsHidden(false);
    //         }
    //     }, [rebours]);

    //     const rebours = isHidden ? "opacity-0 border-[22px]" : "opacity-1";


    // }




    useEffect(() => {
        compare(choix, choixAdv);
    }, [choix, choixAdv]);




    //ONCLICK
    const paper = () => {
        setChoix('blue')
        setImgperso(<img src={papier} alt="" />)
        random()

        console.log('mon choix es ' + choix);
        console.log('son choix es ' + choixAdv);


    }

    const scissors = () => {
        setChoix('yellow')
        setImgperso(<img src={ciseaux} alt="" />)
        random()
        console.log('mon choix es ' + choix);
        console.log('son choix es ' + choixAdv);
    }

    const rock = () => {
        setChoix('red')
        setImgperso(<img src={pierre} alt="" />)
        random()
        console.log('mon choix es ' + choix);
        console.log('son choix es ' + choixAdv);
    }

    const rejouer = () => {
        setTimeout(() => {
            setPartie('hidden')
            setAcceuil('block')
        }, 300);

    }




    return (
        <div className='flex justify-center pt-[50px] flex-col items-center'>



            <div className={`w-[1000px] h-[600px] bg-blue-900 pt-10 ${acceuil}`}>

                <Score score={score} />

                <div className='flex justify-center mt-[100px]'>
                    <div className='w-[200px] relative h-[275px]' id='bg'>
                        <div onClick={paper} className='absolute cursor-pointer -top-10 -left-10
                     bg-white p-5 rounded-full border-[15px] border-blue-500 hover:translate-x-6 hover:scale-[1.5] hover:rotate-[360deg] hover:z-50 transition duration-300 ease-in-out'><img src={papier} alt="" /></div>
                        <div onClick={scissors} className='absolute cursor-pointer -top-10 -right-10
                       bg-white p-5 rounded-full border-[15px] border-yellow-500 hover:-translate-x-6 hover:scale-[1.5] hover:-rotate-[360deg] hover:z-50 transition duration-300 ease-in-out'><img src={ciseaux} alt="" /></div>
                        <div onClick={rock} className='absolute cursor-pointer bottom-10 left-[20%]
                      bg-white p-5 rounded-full border-[15px] border-red-500 hover:-translate-y-6 hover:scale-[1.5] hover:-rotate-[360deg] hover:z-50 transition duration-300 ease-in-out'><img src={pierre} alt="" /></div>

                    </div>

                </div>

                <div className='flex justify-end px-5'>
                    <div className='uppercase text-white border-2 px-9 hover:bg-white hover:text-blue-900 rounded-md py-1 border-white'>rulers</div>
                </div>
            </div>

            <Partie partie={partie} imgPerso={imgPerso} borderChoix={choix} choixAdv={choixAdv} imgAdv={imgAdv} win={win} opa={opa} solid={solid} rebours={rebours} rejouer={rejouer} score={score} />

        </div>


    )
}
