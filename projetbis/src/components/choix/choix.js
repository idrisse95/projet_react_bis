import React, { useEffect, useState } from 'react'
import papier from '../images/icon-paper.svg'
import pierre from '../images/icon-rock.svg'
import ciseaux from '../images/icon-scissors.svg'
import { Modal } from '../modal/modal'
import { Partie } from '../partie/partie'
import { Score } from '../score/score'

export const Choix = () => {

    const [acceuil, setAcceuil]
        = useState('block')

    const [opa, setOpa] = useState('opacity-1')
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



    const e = useEffect
    e(() => {
        let cmpt = setInterval(() => {

            setRebours(rebours => rebours - 1)
            if (rebours <= 0) {
                setOpa("opacity-0")
                setSolid('border-[22px] ')
                setRebours(0)
            }
            else {
                setOpa("opacity-1")
                setSolid('')
            }

        }, 1000)
        return () => {
            clearInterval(cmpt)
        }

    })

    console.log(rebours);

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

        setRebours(4)


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
        }, 6500);


        // Counter()
    }

    // effect



    // useEffect(() => {
    // },[rebours])
    // const [rebours, setRebours] = useState(3);
    // const [isHidden, setIsHidden] = useState(false);

    // const Counter = () => {


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setRebours(rebours => rebours - 1);
    //     }, 1000);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (rebours <= 0) {
    //         setOpa("opacity-0")
    //         setSolid('border-[22px] ')
    //         setRebours(0)
    //     } else {
    //          setOpa("opacity-1")
    //         setSolid('')
    //     }
    // }, [rebours]);



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
        }, 1000);
        setWin('')

    }




    return (
        <div className='sm:flex justify-center sm:pt-[50px] flex-col items-center'>



            <div className={` relative sm:w-[1000px] sm:h-[600px] pb-10 h-screen max-sm:w-full bg-blue-900 pt-10 ${acceuil}`}>

                <img className='pap' src={papier} alt="" />
                <img className='cis' src={ciseaux} alt="" />
                <img className='pier' src={pierre} alt="" />
                 
                <img className='pap' src={papier} alt="" />
                <img className='cis' src={ciseaux} alt="" />
                <img className='pier' src={pierre} alt="" />

                <Score score={score} />

                <div className='flex justify-center mt-[100px] max-sm:mt-[180px]'>
                    <div className='w-[200px] max-sm:w-[250px] max-sm:h-[300px] relative h-[275px]' id='bg'>
                        <div onClick={paper} className='absolute cursor-pointer -top-10 -left-10
                     bg-white p-5 max-sm:p-8 max-sm:-top-20 rounded-full  border-[15px] border-blue-500 hover:shadow-xl hover:shadow-blue-500/50 hover:bg-blue-500 hover:translate-x-6 hover:scale-[1.5] hover:rotate-[360deg] hover:z-50 transition duration-300 ease-in-out'><img src={papier} alt="" /></div>
                        <div onClick={scissors} className='absolute cursor-pointer -top-10 -right-10
                       bg-white p-5 max-sm:p-8 max-sm:-top-20 rounded-full border-[15px] hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-500/50  border-yellow-500 hover:-translate-x-6 hover:scale-[1.5] hover:-rotate-[360deg] hover:z-50 transition duration-300 ease-in-out'><img src={ciseaux} alt="" /></div>
                        <div onClick={rock} className='absolute cursor-pointer bottom-10 left-[20%]
                      bg-white p-5 max-sm:p-8  rounded-full border-[15px] border-red-500 hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/50  hover:-translate-y-6 hover:scale-[1.5] hover:-rotate-[360deg] hover:z-50 transition duration-300 ease-in-out'><img src={pierre} alt="" /></div>

                    </div>

                </div>

                <div className='flex justify-end max-sm:justify-center max-sm:mt-[150px] px-5'>
                    <Modal />
                </div>
            </div>

            <Partie partie={partie} imgPerso={imgPerso} borderChoix={choix} choixAdv={choixAdv} imgAdv={imgAdv} win={win} opa={opa} solid={solid} rebours={rebours} rejouer={rejouer} score={score} />


        </div>


    )
}
