import { useTheme } from "next-themes";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { RoughNotation } from "react-rough-notation";
import Typist from "react-typist"
import { randomColor, random } from "../utils/random";
import Link from "next/link"
import Head from "next/head"

const About = () => {
    const [show, setShouldShow] = React.useState(false);
    const small = useMediaQuery({minWidth: 640});
    const { theme } = useTheme();

    return (
        <div className="text-center p-10">
            <Head>
                <title>About | Zachary Collazo</title>
            </Head>
            <RoughNotation iterations={random(2, 6)} animationDuration={1400} color={randomColor(theme === "dark")} type="box" animate show={show && small}>
                <main className="flex flex-col text-center flex-wrap flex-1 p-2 md:p-5 font-mono">
                    <Typist avgTypingDelay={10} stdTypingDelay={5} startDelay={10} cursor={{show:false}} onTypingDone={() => setShouldShow(true)}>
                        <h1 className="text-5xl p-2 md:p-4 md:text-9xl">Hey there.</h1>
                        <h1 className="text-3xl p-2 md:p-4 md:text-7xl">
                            My name is Zachary Collazo
                        </h1>
                        <div className="text-xl p-2 md:p-4 md:text-3xl">
                            I&#39;m a teenage developer from Chesterfield, VA, USA. I make cool websites
                            and apps, and I strive to learn everything I can get my hands on.
                        </div>
                        <div className="text-lg p-2 md:p-4 md:text-2xl">
                            Check out some of my <Link passHref href="/projects"><a className="font-bold">projects</a></Link>.
                        </div>
                    </Typist>
                </main>
            </RoughNotation>
        </div>
    )
}

export default About;