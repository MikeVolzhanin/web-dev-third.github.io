import React, { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import { CountryProvider, CountryContext } from './context/CountryContext';
import useCountries from './hooks/useCountries';

const AppContent = () => {
  const countries = useCountries();
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext);

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.main}>
        <div style={styles.leftColumn}>
          <CountryList countries={countries} onSelect={setSelectedCountry} />
        </div>
        <div style={styles.rightColumn}>
          {selectedCountry ? (
            <CountryDetails country={selectedCountry} />
          ) : (
            <p style={{ padding: '1rem' }}>Выберите страну для подробной информации</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <CountryProvider>
    <AppContent />
  </CountryProvider>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  leftColumn: {
    flex: 2,
    overflowY: 'auto',
    padding: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  rightColumn: {
    flex: 1,
    padding: '1rem',
    borderLeft: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    minWidth: '300px',
  },
};

export default App;
