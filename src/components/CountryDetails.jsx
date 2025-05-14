import React from 'react';

const CountryDetails = ({ country }) => {
  return (
    <div style={styles.container}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={country.name.common} style={styles.flag} />
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fafafa',
    textAlign: 'center',
  },
  flag: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
};

export default CountryDetails;
