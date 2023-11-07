import { Canvas } from '@react-three/fiber';
import { Text, Center, Float, Sparkles } from '@react-three/drei';
import font from 'three/examples/fonts/helvetiker_regular.typeface.json';
import { useMediaQuery } from 'react-responsive';
import useTheme from '@/utils/use-theme';

const TitleText = () => {
  const md = useMediaQuery({ minWidth: 768 });
  const theme = useTheme();

  return (
    <Center>
      <Float speed={5}>
        {/* @ts-expect-error the font type does not match */}
        <Text fontSize={md ? 2 : 1} font={font}>
          Hey, I&apos;m Zachary
          <meshBasicMaterial color={theme === 'dark' ? '#ffffff' : '#000000'} />
        </Text>
      </Float>
    </Center>
  );
};

const Content = () => {
  const theme = useTheme();

  return (
    <>
      <ambientLight />
      <pointLight />
      <TitleText />
      <Sparkles color={theme === 'dark' ? '#ffffff' : '#000000'} scale={5} count={1000}  />
    </>
  );
};

const Hero = () => (
  <Canvas style={{ height: '45vh' }}>
    <Content />
  </Canvas>
);


export default Hero;
