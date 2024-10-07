import React from 'react';

const Mision02 = ({ name }) => {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/fondo_2.svg) !important`,
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
      <h2>¡Hello, {name}!</h2>
      <br/  >
      <p>¡my name is Alex, I am at international Space Station</p>
      {/* Aquí puedes agregar más contenido para la misión, como instrucciones o elementos interactivos */}
    </div>
  );
};

export default Mision02;