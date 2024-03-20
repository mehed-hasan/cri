import React, { useEffect, useRef, useState } from 'react';




const Ball = ({isBowlerInMark,nextBall,setNextBall,shortInfo}) => {
    

    let ball = useRef('');
    useEffect(() =>{
        if(nextBall){
            ball.current.style.transition = '0s';
            ball.current.style.transform = "translate(-50%, 2300%)";
    
        }

        if(isBowlerInMark){ //Then throw ball
                // Move bats man direct based on playbale short 
                ball.current.style.transition = '1s';
                ball.current.style.transform = "translate(0px, -30px)"; //Throwing... point !
                // clearTimeout(throws);

            let finalBallDestination = async() =>{
                return await new Promise((resolve, reject)=>{
                    let hit = setTimeout(() => {
                        //Ball destination after batsman shot !
                        ball.current.style.transform = `translate(${shortInfo.x}px, ${shortInfo.y}px)`;
                        ball.current.style.transition = '6s';

                        if(shortInfo.score ===6){
                            ball.current.classList.add('six');
                        }else{
                            ball.current.classList.remove('six');
                        }
                        

                        clearTimeout(hit);  
                    }, 800);
                    resolve();
                })
            }
            finalBallDestination().then(res => {setNextBall(false);ball.current.classList.remove('six');
        }).catch(e => {console.log("Error while batter hitting !")})
        }
        console.log(shortInfo.score + " Active ")

    },[isBowlerInMark]);

 
    return (
            <div className='ball'  ref={ball} style={{borderRadius:'50%', position:'fixed',left:'50%', bottom:'50%', backgroundColor:'red',transition:'1s', zIndex:'5' }}>
                
            </div>
    );
};

export default React.memo(Ball);