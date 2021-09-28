import Head from 'next/head'
import { RoughNotationGroup, RoughNotation } from 'react-rough-notation';
import { useTheme } from 'next-themes';
import { useMediaQuery } from 'react-responsive';
import { random, randomColor } from '../utils/random';
import Link from 'next/link';

const Home = () => {
  const { theme } = useTheme();
  const small = useMediaQuery({minWidth: 768});
  const inBetween = useMediaQuery({minWidth: 1020});
  const dark = theme === "dark";

  return (
    <div className="overflow-hidden relative z-0 m-0 t-0 left-0 right-0 text-center">
      <Head>
        <title>Home | Zachary Collazo</title>
      </Head>
      <main className="flex flex-col md:grid m-0 md:grid-cols-1 justify-between pr-36 md:pr-20 md:p-12 items-stretch">
        <RoughNotation show={small} iterations={random(2, 6)} type="box" animate animationDelay={1400} animationDuration={1000} color={randomColor(dark)}>
          <div id="jumbotron" className="flex relative md:grid items-stretch justify-between w-full flex-col md:grid-cols-2 font-mono">
            <RoughNotationGroup> 
              <div className={`flex w-full md:m-20 m-16 flex-col items-stretch`}>
                <RoughNotation iterations={random(2, 6)} animate show animationDuration={700} color={randomColor(dark)} strokeWidth={3} type="circle">
                  <h1 className="md:text-9xl text-5xl py-4">Hello</h1>
                </RoughNotation>
                <h2 className="md:text-4xl text-lg p-2 md:p-4">my name is</h2>
                <RoughNotation multiline iterations={random(2, 6)} animate show animationDuration={700} color={randomColor(dark)} type="highlight">
                  <h1 className="md:text-6xl text-3xl font-extralight">Zachary Collazo</h1>
                </RoughNotation>
                <h1 className="mt-12 rotate-6 md:text-5xl text-2xl font-mono">
                  <span style={{color: randomColor(dark)}}>I </span>
                  <span style={{color: randomColor(true)}} className="font-mono dark:bg-gray-700 bg-gray-200 rounded-xl p-2"><code>Code</code></span>
                  <span style={{color: randomColor(dark)}}> Stuff</span>
                </h1>
              </div>
            </RoughNotationGroup>
            {/* <div className="text-center md:text-5xl text-2xl font-serif rotate-12">
              Image will go here eventually
              <h1>Image Placeholder</h1>
            </div> */}
          </div>
        </RoughNotation>
      </main>
      <div className="bg-transparent h-full grid grid-cols-2 grid-flow-row-dense min-w-screen">
        <div className="slanted-right h-full absolute left-0 min-w-full">
          <h2>Slanted-right</h2>
        </div>
        <div className="slanted-left h-full w-1/2 absolute right-0 min-w-full bg-gray-300 dark:bg-gray-600">
          <h2>Slanted-left</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;
