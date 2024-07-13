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
      <div className="">
        <button
          onClick={toggleModel1}
          className="flex bg-white text-black font-bold justify-center items-center py-2 px-4 rounded"
        >
          {activeModel === 'model1' ? 'Hide Model' : 'Candy Top'}
        </button>
      </div>
      {activeModel === 'model1' && (
        <div className="mt-4">
          <Models1 />
        </div>
      )}
    </div>
  );
}

export default App;
