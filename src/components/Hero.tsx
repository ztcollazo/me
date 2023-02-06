import { Canvas } from '@react-three/fiber';
import { Text, Stars, Center, Float } from '@react-three/drei';
import font from 'three/examples/fonts/helvetiker_regular.typeface.json';
import { randomColor } from '@/utils/random';
import { useMediaQuery } from 'react-responsive';

const TitleText = () => {
  const md = useMediaQuery({ minWidth: 768 });

  return (
    <Center>
      <Float speed={5}>
        {/* @ts-expect-error the font type does not match */}
        <Text fontSize={md ? 2 : 1} font={font}>
          Hey, I&apos;m Zachary
          <meshBasicMaterial color={randomColor(true)} />
        </Text>
      </Float>
    </Center>
  );
};

const Content = () => (
  <>
    <ambientLight />
    <pointLight />
    <TitleText />
    <Stars />
  </>
);

const Hero = () => (
  <Canvas style={{ height: '45vh' }}>
    <Content />
  </Canvas>
);


export default Hero;
