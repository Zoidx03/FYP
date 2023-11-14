import { useState } from 'react';

export const useLogged = () => {
  const [logged, setLogged] = useState(false);

  const updateLogged = (value) => {
    setLogged(value);
  };

  return { logged, updateLogged };
};
