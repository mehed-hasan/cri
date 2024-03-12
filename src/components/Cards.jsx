import React, { useCallback, useEffect, useRef, useState } from 'react';
import Card from './Card';
import Inc from './Inc';

const Cards = () => {
    const [value, setValue] = useState(0);
    const [chars, setChars] = useState([]);
    const [test, setTest] = useState('');

   const fetchData  = useCallback(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setChars(data.results))
            .catch(err => console.log(err));
    }, [test]); // No dependencies here

    useEffect(() =>{
        fetchData();
    },[fetchData])

    return (
        <div>
            <div>
                <p>{value}</p>
                <button onClick={() => setValue(value + 1)}>Parent Press</button>
                <button onClick={()=>setTest(test + 1)}>Bring Chars</button>
            </div>
            <Inc/>
            <Card chars={chars}/>
        </div>
    );
};

export default Cards;
