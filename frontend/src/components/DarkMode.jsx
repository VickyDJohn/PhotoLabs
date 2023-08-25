import React from "react";
import "../styles/DarkMode.scss"

const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkMode;