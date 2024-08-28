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
    </div>
  );
};

export default Hours;

