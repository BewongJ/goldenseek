import React, { useState } from 'react';
import Models1 from './components/Models1';
import Models2 from './components/Models2';

function App() {
  const [activeModel, setActiveModel] = useState(null);

  const toggleModel1 = () => {
    setActiveModel(activeModel === 'model1' ? null : 'model1');
  };

  const toggleModel2 = () => {
    setActiveModel(activeModel === 'model2' ? null : 'model2');
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="navbar bg-white-500 w-100 h-10 text-center text-white font-mono text-2xl">
        GOLDEN SEEKS
      </div>
      <div className="flex justify-between items-center mt-4 px-10">
        <button
          onClick={toggleModel1}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          {activeModel === 'model1' ? 'Hide Model' : 'Candy Top'}
        </button>
        <button
          onClick={toggleModel2}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          {activeModel === 'model2' ? 'Hide Model' : 'Test'}
        </button>
      </div>
      {activeModel === 'model1' && (
        <div className="mt-4">
          <Models1 />
        </div>
      )}
      {activeModel === 'model2' && (
        <div className="mt-4">
          <Models2 />
        </div>
      )}
    </div>
  );
}

export default App;
