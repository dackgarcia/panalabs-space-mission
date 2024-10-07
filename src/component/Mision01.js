import React, { useState } from 'react';
import Mision02 from '../component/Mision02';

const Mision01 = () => {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/fondo_2.svg)`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    animation: 'movimientoFondo 35s infinite alternate',
  };

  const [showMision, setShowMision] = useState(false);
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    if (name.trim() === '') {
      setErrorMessage('Please enter your name.');
    } else {
      setShowMision(true);
      setErrorMessage(''); // Clear the error message
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
    setErrorMessage(''); // Clear the error message if the user types something
  };

  return (
    <div style={backgroundStyle}>
      {showMision ? (
        <Mision02 name={name} /> // Pass the name to Mision02
      ) : (
        <div className="container_welcome">
          <h2>What's your name?</h2>
          <input
            className="transparent-input"
            type="text"
            value={name}
            onChange={handleChange}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <br />
          <button type="button" onClick={handleButtonClick}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Mision01;