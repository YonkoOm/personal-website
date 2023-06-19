import React from 'react';
import Head from 'next/head';
import { motion, Transition, Variant } from 'framer-motion';
import AnimatedText from '../components/animated-text';
import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  const exitAnimation: Variant = {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4 }
  };

  const textAnimation = {
    hover: {
      scale: 1.2
    },
    tap: {
      scale: 0.9
    }
  };

  const textTransition: Transition = {
    type: 'spring',
    stiffness: 500,
    damping: 8
  };

  const topLine = 'Welcome!';
  const middleLine = "I'm Om Moradia,";
  const bottomLine = 'aspiring software engineer.';

  return (
    <motion.div
      className="absolute my-0 mx-auto top-36 md:top-[35%] left-[10%] z-20"
      exit={exitAnimation}
    >
      <Head>
        <title>Om Moradia - Homepage</title>
      </Head>
      <h1 className="font-coolvetica font-normal text-[28px] sm:text-[36px] md:text-[40px] lg:text-5xl leading-tight lg:leading-[53px]">
        <AnimatedText
          text={topLine}
          delay={0.4}
          whileHover={textAnimation.hover}
          whileTap={textAnimation.tap}
          transition={textTransition}
          letterAnimation={{
            color: ['#fcdff5', '#9bb3fa', '#ffca28'],
            transition: {
              delay: 1,
              duration: 5.5,
              ease: [0.7, 0.1, 0.1, 0.7],
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
        />
        <AnimatedText
          text={middleLine}
          delay={0.075 * (topLine.length + 1) + 0.4}
          whileHover={textAnimation.hover}
          whileTap={textAnimation.tap}
          transition={textTransition}
          className="hover:text-[#64ffda] text-[#fff7ed]"
        />
        <AnimatedText
          text={bottomLine}
          delay={0.075 * (topLine.length + middleLine.length + 1) + 0.4}
          whileHover={textAnimation.hover}
          whileTap={textAnimation.tap}
          transition={textTransition}
          // className="hover:text-[#64ffda]"
          letterAnimation={{
            color: ['#ffca28', '#9bb3fa', '#fcdff5'],
            transition: {
              delay: 1,
              duration: 5.5,
              ease: [0.7, 0.1, 0.1, 0.7],
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
        />
      </h1>
      <h2 className="font-mplus font-normal text-[#64ffda] inline-flex space-x-1.5 sm:mt-0.5 md:mt-1 text-[15px] sm:text-[20px] lg:text-xl">
        <div>$ echo</div>
        <Typewriter
          onInit={typewriter => {
            typewriter
              .pauseFor(2500)
              .typeString('"what\'s up doc?"')
              .pauseFor(1500)
              .deleteAll()
              .pauseFor(500)
              .typeString('"my name is Om."')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(500)
              .typeString('"and yes... it\'s two letters long."')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(500)
              .typeString('"i\'m a student."')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(500)
              .typeString('"programmer."')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(500)
              .typeString('"music connoisseur."')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(500)
              .typeString('"and an anime & k-drama enthusiast."')
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(500)
              .typeString('"welcome to my page :)"')
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
          options={{ loop: true, deleteSpeed: 7, delay: 70 }}
        />
      </h2>
    </motion.div>
  );
};

export default Home;
