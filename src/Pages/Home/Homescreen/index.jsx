import React from 'react';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import MyPortfolio from '../MyPortfolio';
import Testimonials from '../Testimonials';
import Footer from '../Footer';

const Home = () => (
  <>
    <HeroSection />
    <MyPortfolio />
    <AboutMe />
    <Testimonials />
    <ContactMe />
    <Footer />
  </>
);

export default Home;
