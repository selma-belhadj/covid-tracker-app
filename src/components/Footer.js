import React from 'react';

const Footer = () => {
  const link = {
    fontSize: '0.7rem',
    color: '#000',
    marginLeft: '0.5rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
  };
  return (
    <div className="footer text-center">
      Data gathered from
      {' '}
      <a href="https://covid19tracking.narrativa.com/index_en.html">Narrativa API</a>
      <br />
      Copyright &copy; Corona Tracker
      <br />
      Made by
      <a href="https://github.com/selma-belhadj" style={link} target="_blank" rel="noreferrer">Selma</a>
    </div>
  );
};

export default Footer;
