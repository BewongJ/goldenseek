import React, { useState } from 'react';
import Models1 from './components/Models1';
import Models2 from './components/Models2'

function App() {
  const [showModel, setShowModel] = useState(false);
  const [showAnotherModel, setShowAnotherModel] = useState(false);

  const toggleModel = () => {
    setShowModel(!showModel);
  };

  const toggleAnotherModel = () => {
    setShowAnotherModel(!showAnotherModel);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="navbar bg-white-500 w-100 h-10 text-center text-white font-mono text-2xl">
        GOLDEN SEEKS
      </div>
      <div className="flex justify-between items-center mt-4 px-10">
        <button
          onClick={toggleModel}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          {showModel ? 'Hide Model' : 'Candy Top'}
        </button>
        <button
          onClick={toggleAnotherModel}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          {showAnotherModel ? 'Hide Model' : 'Test'}
        </button>
      </div>
      {showModel && (
        <div className="mt-4">
          <Models1/>
        </div>
      )}
      {showAnotherModel && (
        <div className="mt-4">
          <Models2/>
        </div>
      )}
    </div>
  );
}

export default App;
