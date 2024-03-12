import React, { memo, useCallback, useEffect, useState } from 'react';
import Extra from './Extra';

const Card = ({chars}) => {

//    console.log(chars)
   console.log("Rendering !")
    return (
        <div>
            {
                chars.map(item =>
                    <div key={item.id}  style={{maxWidth:'300px',border:'1px solid gray',padding:'5px',margin:'5px'}}>
                        <img src={item.image}/>
                        <p>Name: {item.name} <span style={{background:'lime',padding:'3px 5px'}}>{item.status}</span></p>
                    </div>
                    )
            }
        </div>
    );
};

export default memo(Card);

// 3 
//useCallback 
//useMemo
//React.memo