import React, { useState } from "react";

export const semaforo = () => {

    const [selector, setSelector] = useState ("")

    const handleClick = (val) => {
        setSelector (val)
    }

    return (
        <div>
            <h2>El semaforo tiene la luz encendida: {selector}</h2>
            <ul>
               <li className={`${selector === 'circulo-1' ? 'light-on' : ''}`} onClick={() => handleClick('circulo-1')}></li>
               <li className={`${selector === 'circulo-2' ? 'light-on' : ''}`} onClick={() => handleClick('circulo-2')}></li>
               <li className={`${selector === 'circulo-3' ? 'light-on' : ''}`} onClick={() => handleClick('circulo-3')}></li>
            </ul>
        </div>
    )
}
