import React, { useState } from 'react';

const Context = React.createContext({});

export function UseTypePokemon({ children }) {
  const [typePokemon, setTypePokemon] = useState([]);

  return (
    <Context.Provider value={{ typePokemon, setTypePokemon }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
