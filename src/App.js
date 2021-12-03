import './App.css';

import { ThemeContext, themes } from './contexts/ThemeContext';
import React from 'react';
import ToggleDark from './components/toggleDark';
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-warning">L’HISTOIRE DES SAUVETAGES EN MER
</h1>
      </header>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>

      <footer className="center footer">
      <SearchBar placeholder="Enter a Book Name..."/>
      </footer>
    </div>
  );
}

export default App;
