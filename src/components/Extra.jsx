import React, { useEffect, useState } from 'react';

const Extra = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        // Use a temporary variable to store the updated number
        let newNumber = number;
        while (newNumber < 999999) {
            newNumber++;
            setNumber(newNumber); // Update the state with the newNumber
        }
    }, []); // Empty dependency array ensures the effect runs only once

    console.log("Extra rendered !" + number);

    return (
        <div>
            <p>Extra components {number}</p>
        </div>
    );
};

export default React.memo(Extra);
