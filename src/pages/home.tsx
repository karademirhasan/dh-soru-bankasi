import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="Page-Home">
      <h1>Doping Hafıza</h1>
      <Link to="/test">Teste Başlat</Link>
    </div>
  );
};
