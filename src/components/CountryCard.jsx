import React from 'react';

const CountryCard = ({ country, onSelect }) => {
  return (
    <div style={styles.card} onClick={() => onSelect(country)}>
      <img src={country.flags.svg} alt={country.name.common} style={styles.flag} />
      <h3>{country.name.common}</h3>
      <p>Region: {country.region}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '1rem',
    margin: '0.5rem',
    textAlign: 'center',
    width: '200px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  flag: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
};

export default CountryCard;