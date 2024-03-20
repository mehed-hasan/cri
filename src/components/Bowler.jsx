import React, { useCallback, useEffect, useRef, useState } from 'react';
import Ball from './Ball';

const Bowler = () => {

    let shorts = [
        {
            x:40,
            y:150,
            score:4
    
        },
        {
            x:-240,
            y:-150,
            score:6
        },
        {
            x:350,
            y:-150,
            score:4
        },
    ]
    let shortInfo = shorts[Math.round(Math.random()*(shorts.length-1))] ;

    let bowler = useRef('');
    let [isBowlerInMark, setBowlerInMark] = useState(false); 
    let [nextBall,setNextBall] = useState(false);
    console.log("Bowler rendered !")
 

    useEffect(() => {


      
        const runUp = () => {
            return new Promise((resolve, reject) => {
                let run = setTimeout(() => {
                    bowler.current.style.transition = '1s';
                    bowler.current.style.transform = `translate(-50%, 350%)`;
                    clearTimeout(run);
                }, 1);
                let isBowlerArrivedInMark = setTimeout(() => {
                    clearTimeout(isBowlerArrivedInMark);
                    resolve();
                }, 500);
            });
        };

        runUp().then(res => {setBowlerInMark(true);}).catch(e => {"Error while run up"}) //


    }, [nextBall]);

    let handleReset =  () =>{
        setBowlerInMark(false);
        bowler.current.style.transform = 'translate(-50%, 900%)';
        bowler.current.style.transition = '0s';
        setNextBall(true);
        // console.log(isBowlerInMark);
        // console.log(nextBall);
    }

        // Set up interval to call handleReset every 3 seconds
        useEffect(() => {
            const interval = setInterval(() => {
                handleReset();
            }, 6500);
    
            // Clean up the interval when the component unmounts or nextBall changes
            return () => clearInterval(interval);
        }, [nextBall]);
    
    return (
       <div className='bowler'>
        {/* <button ref={btn} onClick={()=>handleReset()}> Run ball</button> */}
         <div  ref={bowler} style={{height:'8px',width:'8px', backgroundColor:'black',position:'fixed',left:'50%', bottom:'50%',transition:'1s', zIndex:9}}>
        </div>
        <Ball shortInfo={shortInfo}   setNextBall={setNextBall} nextBall={nextBall}  isBowlerInMark={isBowlerInMark}/>
       </div>

    );
};

export default Bowler;