import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { TextureLoader } from 'three';

const TorusKnot = () => {
  const knot = useRef(null);
  const loader = new TextureLoader();
  const matcapTexture = loader.load('https://bruno-simon.com/prismic/matcaps/3.png');

  useFrame(() => {
    knot.current.rotation.x += 0.01;
    knot.current.rotation.y += 0.01;
    knot.current.rotation.z += 0.01;
  });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      knot.current.position.x = (-(event.clientX / window.innerWidth));
      knot.current.position.y = (event.clientY / window.innerHeight) / 2;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  });

  return (
    <mesh visible ref={knot} rotation={[Math.PI / 2, 0, 0]} scale={2.6} position={[0, 0, 0]}>
      <torusKnotBufferGeometry args={[0.5, 0.15, 200, 30]} />
      <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  );
};

export default TorusKnot;
