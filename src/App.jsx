import { useState } from 'react';
import GlobalStyle from '../GlobalStyle';
import Layout from './components/Layout/Layout';
import { Context } from './context/Context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  console.log(isLoggedIn);
  return (
    <>
      <Context.Provider
        value={{ isLoggedIn, setIsLoggedIn, darkTheme, setDarkTheme }}
      >
        <GlobalStyle />
        <Layout />
      </Context.Provider>
    </>
  );
}

export default App;
