// Mision01.js
import React from 'react';

const ilus3 = `${process.env.PUBLIC_URL}/img/i3.svg`

const Mision01 = () => {
  const backgroundStyle = {
    //backgroundImage: `url(${process.env.PUBLIC_URL}/img/fondo_2.svg) !important`,
    backgroundSize: 'cover', // O 'contain', según tus necesidades
    height: '100vh', // Asegúrate de que tenga altura para ver el fondo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    animation: 'movimientoFondo 35s infinite alternate'

};
  return (
  <div className="" style={backgroundStyle}>
    <div className="container-01">
          <figure className="astronauta left-element">
              <img src={ilus3} alt="astronauta" width="200" />
          </figure>
          <div className='right-container'>
            <div className='right-element'>
              <h1 className='text-white'>Mision 01: </h1>
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit  </p>
            </div>
            <div className='right-element'>
              <h1 className='text-white'>Mision 02: </h1>
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit  </p>
            </div>            
            <div>
            </div>

        </div>
    </div>
  </div>
  );
};

export default Mision01;