import React, { useState } from 'react';
import Mision01 from '../component/Mision01';


const ilus1 = `${process.env.PUBLIC_URL}/img/i1.svg`
const MainT = ({ children }) => {
    const [showMision, setShowMision] = useState(false); // Estado para controlar qué template mostrar

    const handleButtonClick = () => {
        setShowMision(true); // Cambia el estado para mostrar 'Mision01'
    };
    return (
        <div className="container">
            {showMision ? (
                <Mision01 /> // Muestra el componente 'Mision01' si el estado es verdadero
            ) : (
            <div className="container_imagen">
            <figure className="astronauta">
                <img src={ilus1} alt="astronauta" width="200" />
            </figure>
                <div className="container_welcome">
                    <h1>Welcome</h1>
                    <h2>to the adventure</h2>
                
                    <button type="button" onClick={handleButtonClick}>Start</button>
                </div>
            </div>
            )}
            {children} {/* Renderiza los hijos si los hay */}
        </div>
    );
};

export default MainT;