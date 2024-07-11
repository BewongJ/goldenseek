import React, { useMemo, useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useProgress } from '@react-three/drei';
import { TextureLoader } from 'three';
import Loading from './Loading'; // Import the Loading component

// Preload all optimized models
const models = ['./golden/babyblue.glb', './golden/almond.glb', './golden/babypink.glb'];
const colors = ['#89cff0', '#EED9C4', '#F4C2C2'];

models.forEach((model) => {
  useGLTF.preload(model);
});

// Functional component for the 3D model
const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Adjust rotation speed as needed
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.15} position={[0, 2, -5]} />;
};

const Page1 = () => {
  const [currentModel, setCurrentModel] = useState(models[0]);

  const wallTexture = useMemo(() => new TextureLoader().load('textures/1.png'), []);

  const changeModel = (model) => {
    setCurrentModel(model);
  };

  const { active } = useProgress();

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <div className="relative w-full h-full">
        {active && <Loading />} 
        <Canvas camera={{ position: [0, 1.9, 10], fov: 60 }}>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            zoomSpeed={0.5}
            rotateSpeed={0.5}
            enableDamping={true}
            dampingFactor={0.25}
            minDistance={0.5} 
            maxDistance={30} 
            target={[0, 1.9, 0]}
          />

          <ambientLight intensity={4} />
          <directionalLight intensity={4} position={[-5, 0, 0]} />
          <directionalLight intensity={4} position={[5, 0, 0]} />
          <directionalLight intensity={4} position={[0, 5, 0]} />
          <directionalLight intensity={4} position={[0, 1, 10]} />
          <directionalLight intensity={4} position={[0, -5, -10]} />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, -5]}>
            <planeGeometry args={[15, 15]} />
            <meshStandardMaterial color="black" />
          </mesh>

          <mesh position={[0, 3.5, -12.5]}>
            <planeGeometry args={[15, 10]} />
            <meshStandardMaterial map={wallTexture} />
          </mesh>

          <mesh position={[0, 0.1, -5]}>
            <boxGeometry args={[3, 3.5, 3]} />
            <meshStandardMaterial color="black" />
          </mesh>

          <Suspense fallback={null}>
            <Model modelPath={currentModel} />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {models.map((model, index) => (
            <button
              key={index}
              onClick={() => changeModel(model)}
              className={`w-12 h-12 rounded-full text-xl`}
              style={{ backgroundColor: colors[index] }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page1;
