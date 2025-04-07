import React from "react";

import { useState } from "react";
export const Semaforo = () => {

    const [selector, setSelector] = useState("")

    const handleClick = (val) => {

        setSelector(val)

    }
    return (
        <div>
            <h2>El semaforo tiene la luz encendida: {selector}</h2>
            <div className="container p-1">
			<div className="row d-flex justify-content-center">
				<div className="luces">                  
                        <div className={`circulo-1 ${selector == "circulo-1" ? "circulo-1 light-on" : ""}` } onClick={() => handleClick('circulo-1')}></div>
                        <div className={`circulo-2 ${selector == "circulo-2" ? "circulo-2 light-on" : ""}` } onClick={() => handleClick('circulo-2')}></div>
                        <div className={`circulo-3 ${selector == "circulo-3" ? "circulo-3 light-on" : ""}` } onClick={() => handleClick('circulo-3')}></div>
                    </div>
                </div>
            </div>
        </div>    
    )
}