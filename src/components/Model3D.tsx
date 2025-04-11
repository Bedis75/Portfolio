import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

const Model3D: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const [rotation, setRotation] = useState({ x: 0.3, y: 0, z: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scene } = useGLTF('/src/assets/3D_Laptop.glb');

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setMouse({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && groupRef.current) {
        const deltaX = (e.clientX - mouse.x) * 0.01;
        const deltaY = (e.clientY - mouse.y) * 0.01;
        
        setRotation(prev => ({
          x: prev.x + deltaY,
          y: prev.y + deltaX,
          z: prev.z + (deltaX + deltaY) * 0.1
        }));
        
        setMouse({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, mouse]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      if (!isDragging) {
        setRotation(prev => ({
          x: prev.x,
          y: prev.y + delta * 0.5,
          z: prev.z
        }));
      }
      groupRef.current.rotation.x = rotation.x;
      groupRef.current.rotation.y = rotation.y;
      groupRef.current.rotation.z = rotation.z;
    }
  });
  
  return (
    <group 
      ref={groupRef} 
      position={[0, 0, 0]} 
      scale={3.5}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Model3D; 