import React from 'react';
import stadiumSound from '../assets/sounds/stadium.mp3';
const Field = () => {
    let environmentSound = new Audio(stadiumSound);
    environmentSound.play();
    return (
        <div className='field'>
            <div className='pitch'></div>
        </div>
    );
};

export default Field;