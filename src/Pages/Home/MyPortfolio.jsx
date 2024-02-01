import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft, FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import data from '../../data/index.json';

function MyPortfolio() {
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0} aria-label="Next">
      <FaArrowRight />
    </div>
  );

  NextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  const PrevArrow = ({ onClick }) => (
    <div
      className="arrow prev"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="Previous"
    >
      <FaArrowLeft />
    </div>
  );

  PrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [imageIndex, setImageIndex] = useState(0);
  const updateSlidesToShow = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="p-section" id="MyPortfolio">
      <h1 className="project-heading">My Projects</h1>
      <p className="project-paragraph">Explore a collection of my innovative and captivating projects that showcase my skills and expertise.</p>

      <Slider
        infinite={settings.infinite}
        lazyLoad={settings.lazyLoad}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        centerMode={settings.centerMode}
        centerPadding={settings.centerPadding}
        nextArrow={settings.nextArrow}
        prevArrow={settings.prevArrow}
        beforeChange={settings.beforeChange}
      >
        {data?.portfolio?.map((item, idx) => (
          <div
            className={`slide-card ${idx === imageIndex ? 'slide activeSlide' : 'slide'}`}
            key={item.id}
          >
            <div className="slide-image">
              <img src={item.src} alt="Project" />
            </div>
            <div className="slide-content">
              <h3>{item.title}</h3>
              <div className="slide-info">
                <h4>
                  {item.type}
                  {' '}
                  ●
                  {' '}
                  {item.date}
                </h4>
              </div>
              <p>{item.description}</p>

              <div className="slide-link">
                <a href={item.github} target="_blank" rel="noreferrer" className="github-link">
                  View in GitHub
                  {' '}
                  <FaAngleRight />
                </a>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="live-link">
                    View Live
                    {' '}
                    <FaAngleRight />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MyPortfolio;
