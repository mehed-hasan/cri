import React, { useEffect, useRef, useState } from 'react';

const Useref = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef(0);
    const headingRef = useRef();
    useEffect(() => {
        console.log(headingRef.current.innerText);

    }, []);
    console.log("Rendered !");
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2 ref={headingRef} >Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );
};

export default Useref;