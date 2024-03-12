import React, { useEffect, useRef, useState } from 'react';

const Ball = ({isBowlerInMark,nextBall,setNextBall}) => {
    let ball = useRef('');


    useEffect(() =>{
        if(nextBall){
            ball.current.style.transition = '0s';
            ball.current.style.transform = "translate(-50%, 1200%)";
    
        }

        if(isBowlerInMark){ //Then throw ball
                // Move bats man direct based on playbale short 
                ball.current.style.transition = '1s';
                ball.current.style.transform = "translate(0px, -40px)"; //Throwing... point !
                // clearTimeout(throws);

            let finalBallDestination = async() =>{
                return await new Promise((resolve, reject)=>{
                    let hit = setTimeout(() => {
                        //Ball destination after batsman shot !
                        ball.current.style.transform = `translate(${Math.ceil(Math.random()*50)}px, ${Math.ceil(Math.random()*50)}px)`;
                        clearTimeout(hit);  
                    }, 800);
                    resolve();
                })
            }
            finalBallDestination().then(res => {setNextBall(false)}).catch(e => {console.log("Error while batter hitting !")})
        }
        
    },[isBowlerInMark]);

 
    return (
        <div ref={ball} style={{borderRadius:'50%', height:'5px',width:'5px', position:'fixed',left:'50%', bottom:'50%', backgroundColor:'red',transition:'1s', zIndex:'5'}}>
            
        </div>
    );
};

export default React.memo(Ball);