import React from 'react';

const Header = ({ toggleTheme, darkMode }) => {
  return (
    <header className="bg-purple-700 dark:bg-gray-800 py-4">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">Book Generator API</h1>
        <button 
          onClick={toggleTheme}
          className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <nav className="mt-4">
        <ul className="flex justify-center space-x-8 text-sm">
          <li><a href="#" className="hover:text-gray-400">Overview</a></li>
          <li><a href="#" className="hover:text-gray-400">Authentication</a></li>
          <li><a href="#" className="hover:text-gray-400">Endpoints</a></li>
          <li><a href="#" className="hover:text-gray-400">Tutorial</a></li>
          <li><a href="#" className="hover:text-gray-400">Code Examples</a></li>
          <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

