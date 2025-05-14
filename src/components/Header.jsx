import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Country Info</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
  },
};

export default Header;