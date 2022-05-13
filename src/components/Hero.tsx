import { Canvas, useThree } from '@react-three/fiber';
import { Text, Sparkles, Torus, MeshWobbleMaterial } from '@react-three/drei';
import useTheme from '@/utils/use-theme';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { randomColor } from '@/utils/random';

const TitleText = () => {
  const theme = useTheme();

  return (
    <>
      <Torus args={[10, 0.5, 16, 100]} position={[0, 0, 0]}>
        <MeshWobbleMaterial factor={0.01} speed={1} color={randomColor(true)} />
      </Torus>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Text anchorX="center" fontSize={2} anchorY="middle" color={theme === 'dark' ? 'white' : 'black'}>Hey, I&apos;m Zachary</Text>
    </>
  );
};

const Content = () => {
  const three = useThree();
  const theme = useTheme();

  useEffect(() => {
    const handler = (event) => {
      three.camera.position.x = event.clientX / window.innerWidth - 0.5;
      three.camera.position.y = -(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handler);

    return () => window.removeEventListener('mousemove', handler);
  });
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <TitleText />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Sparkles position={[0, 0, 0]} color={randomColor(theme === 'dark')} count={500} size={9} opacity={0.5} speed={2} noise={0.7} scale={50} />
    </>
  );
};

const Hero = () => {
  const md = useMediaQuery({ minWidth: '768px' });
  return (
    <Canvas camera={{ zoom: md ? 0.3 : 0.2 }} style={{ minHeight: '60vh' }}>
      <Content />
    </Canvas>
  );
};

export default Hero;
