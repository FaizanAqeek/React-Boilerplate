import React, { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const layout = {
    primaryColor: '#2196f3',
    fontColor: '#fff',
  };

  return (
    <ThemeContext.Provider value={{ ...layout }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
