import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries, onSelect }) => {
  return (
    <div style={styles.grid}>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} onSelect={onSelect} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '1rem',
  },
};

export default CountryList;