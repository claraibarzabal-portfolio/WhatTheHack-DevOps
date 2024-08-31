import React from 'react';

const Hours = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 es domingo, 6 es sábado

  let hours;
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    hours = 'El refugio está abierto de 10 a.m. a 4 p.m. hoy.';
  } else {
    hours = 'El refugio está abierto de 9 a.m. a 8 p.m. hoy.';
  }

  return (
    <div>
      <h2>Horas de Operación</h2>
      <p>{hours}</p>
      <img 
        src="https://i.pinimg.com/736x/4f/a6/65/4fa66567c82cd5f8708b2a2e2c160229.jpg" 
        alt="Un perro adorable" 
        style={{ width: '300px', height: 'auto', display: 'block', marginTop: '10px' }} 
      />
    </div>
  );
};

export default Hours;


