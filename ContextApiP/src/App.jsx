import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/context';
import ThemeBtn from './components/ThemeBtn';
// FIXED: Capitalized 'Card' to perfectly match the file name 'Card.jsx'
import Card from './components/Card'; 

function App() {
  const [themeMode, setTheme] = useState('light');

  const darkTheme = () => { setTheme("dark"); };
  const lightTheme = () => { setTheme("light"); };

  // Watch for theme changes and update the root HTML element class list
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    // Providing the theme state and modifiers globally to the component tree
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="w-full">
          {/* Top layout container for the toggle button */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4 px-4">
            <ThemeBtn />
          </div>

          {/* Core Card wrapper */}
          <div className="w-full max-w-sm mx-auto px-4">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;