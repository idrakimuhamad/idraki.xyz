import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';

import SEO from '../components/seo';

const title = 'Idraki Muhamad';
const initialAnimate = {
  y: 50,
  opacity: 0,
};
const initialIntroAnimate = {
  x: 50,
  opacity: 0,
};

function IndexPage() {
  const bgControl = useAnimation();
  const introControls = useAnimation();
  const controls = useAnimation();

  async function initAnimate() {
    await bgControl.start({
      opacity: 1,
      transition: { duration: 1 },
    });

    await introControls.start((i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
      },
    }));

    await introControls.start(() => ({
      y: [0, 20, 40],
      opacity: [1, 0, 0],
      transition: {
        delay: 1.5,
        y: { stiffness: 1000, velocity: -100 },
      },
    }));

    await controls.start((i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        y: { stiffness: 1000, velocity: -100 },
      },
    }));
  }

  useEffect(() => {
    initAnimate();
  }, []);
  return (
    <>
      <SEO
        keywords={[
          `idraki`,
          `muhamad`,
          `idrakimuhamad`,
          `react`,
          `react-native`,
          `javascript`,
          `html`,
          `css`,
        ]}
        title="Idraki Muhamad"
      />

      <motion.section
        initial={{ opacity: 0 }}
        animate={bgControl}
        className="hero-bg bg-white w-full relative flex justify-center items-center">
        <div className="absolute">
          <h1 className="font-sans text-gray-700 text-center tracking-widest uppercase">
            {title.split('').map((t, i) => (
              <motion.span
                key={`${t}-${i}`}
                initial={initialIntroAnimate}
                animate={introControls}
                custom={i}
                className={`text-6xl font-bold ${
                  t === ' ' ? 'content' : 'inline-block'
                }`}>
                {t}
              </motion.span>
            ))}
          </h1>
        </div>
        <div className="max-w-4xl mx-auto h-screen flex flex-col justify-center items-start relative">
          <motion.h5
            custom={0}
            animate={controls}
            initial={initialAnimate}
            className="font-sans text-gray-700 tracking-widest uppercase">
            {title}
          </motion.h5>
          <motion.p
            animate={controls}
            initial={initialAnimate}
            custom={1}
            className="font-sans text-white text-3xl leading-loose">
            Front-end developer from Kuala Lumpur, MY.
          </motion.p>
          <div className="md:py-4">
            <motion.p
              animate={controls}
              initial={initialAnimate}
              custom={2}
              className="font-sans text-gray-800 text-base">
              <span className="text-gray-400">Currently</span> at{' '}
              <span className="text-gray-400">Maybank Group Tech</span> as{' '}
              <span className="text-gray-400">Senior Front-End Developer</span>
              .
              <br />
              <span className="text-gray-400">Previously</span> at{' '}
              <span className="text-gray-400">RHB, Digital Transformation</span>{' '}
              as <span className="text-gray-400">Front-End Architect</span>.
            </motion.p>
          </div>
          <div className="md:py-4">
            <motion.p
              className="font-sans text-gray-800 text-base"
              animate={controls}
              initial={initialAnimate}
              custom={3}>
              See my work at{' '}
              <a
                className="text-gray-400 transition-all duration-200 ease-in-out border-b hover:border-b-4 hover:bg-white hover:border-transparent hover:text-gray-800"
                href="http://github.com/idrakimuhamad"
                target="_blank"
                rel="noreferrer">
                Github
              </a>{' '}
              and{' '}
              <a
                className="text-gray-400 transition-all duration-200 ease-in-out border-b hover:border-b-4 hover:bg-pink-600 hover:border-transparent"
                href="https://dribbble.com/idraki"
                target="_blank"
                rel="noreferrer">
                Dribbble
              </a>
              .
            </motion.p>
            <motion.p
              className="font-sans text-gray-800 text-base"
              animate={controls}
              initial={initialAnimate}
              custom={4}>
              Or, you can connect with me on{' '}
              <a
                className="text-gray-400 transition-all duration-200 ease-in-out border-b hover:border-transparent hover:bg-blue-700"
                href="https://www.linkedin.com/in/idraki-muhamad-24671940/"
                target="_blank"
                rel="noreferrer">
                LinkedIn
              </a>
              , if you enjoy that stuff.
            </motion.p>
            <motion.p
              className="font-sans text-gray-800 text-base"
              animate={controls}
              initial={initialAnimate}
              custom={5}>
              For <span className="text-gray-400">CV</span>, you may check it
              out{' '}
              <Link
                className="text-gray-400 transition-all duration-200 ease-in-out border-b hover:border-transparent hover:bg-blue-500"
                key="CV"
                to="/cv">
                here
              </Link>
              .
            </motion.p>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default IndexPage;
