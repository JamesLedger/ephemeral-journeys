import React from 'react';
import { Canvas } from '@react-three/fiber';

const RightSidebar = () => {
  return (
    <div style={{ width: '50%', height: '100%', float: 'left' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default RightSidebar;
