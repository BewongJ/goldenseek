import React, { useState } from 'react';
import Page1 from './components/Page1';

function App() {
  const [showModel, setShowModel] = useState(false);

  const toggleModel = () => {
    setShowModel(!showModel);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="navbar bg-gray-500 w-100 h-10 text-center text-white font-mono text-2xl">
        GOLDEN SEEKS
      </div>
      <div className="flex justify-start pl-10 mt-4">
        <button
          onClick={toggleModel}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          {showModel ? 'Hide Model' : 'Candy Top'}
        </button>
      </div>
      {showModel && (
        <div className="mt-4">
          <Page1 />
        </div>
      )}
    </div>
  );
}

export default App;
