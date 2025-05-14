import { useEffect, useState } from 'react';

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error('Ошибка при загрузке стран:', err);
      }
    };

    fetchCountries();
  }, []);

  return countries;
};

export default useCountries;
