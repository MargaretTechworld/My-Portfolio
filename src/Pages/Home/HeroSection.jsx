import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import data from '../../data/index.json';

const HeroSection = () => (
  <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hey, I&apos;m Margaret</p>
        <h1 className="type-text" style={{ paddingTop: '0.3rem', margin: 'auto 0', fontWeight: 'normal' }}>
          <span style={{ color: '#1C1E5B', fontWeight: 'bold' }}>
            <Typewriter
              words={['Full-Stack Developer', 'Full-Stack Developer', 'Full-Stack Developer', 'Full-Stack Developer']}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="hero--section-description">
          Passionate full-stack web developer focused on creating
          impactful user experiences through immersive and
          high-quality solutions.
        </p>
      </div>
      <div className="skills-container">
        {data?.social?.map((item) => (
          <div key={item.id}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img className="social" src={item.src} alt="skills" />
            </a>
          </div>
        ))}
      </div>
    </div>
    <div className="hero--section--img">
      <motion.img
        src="./img/mag.jpg"
        alt="Hero Section"
        initial={{ y: -1000 }}
        animate={{
          y: [-10, 30, -10],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />
    </div>
  </section>
);

export default HeroSection;
