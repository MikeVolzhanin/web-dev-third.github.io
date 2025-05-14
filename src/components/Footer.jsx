import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Country Explorer</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '1rem',
    marginTop: '2rem',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
  },
};

export default Footer;