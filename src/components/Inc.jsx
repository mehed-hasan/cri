import React, { useState } from 'react';

const Inc = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>{value}</p>
            <button onClick={()=>setValue(value + 1)}>Increment</button>
        </div>
    );
};

export default Inc;