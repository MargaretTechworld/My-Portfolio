import React from 'react';
import data from '../../data/index.json';

const MyPortfolio = () => (
  <section className="portfolio--section" id="MyPortfolio">
    <div className="portfolio--container-box">
      <div className="portfolio--container">
        <h2 className="section--heading">My Projects</h2>
      </div>
      <div>
        <a className="btn btn-github" href="https://github.com/MargaretTechworld" target="_blank" rel="noreferrer">
          <img className="github-icon" src="./img/github.png" alt="GitHub" />
          Visit My GitHub
        </a>
      </div>
    </div>
    <div className="portfolio--section--container">
      {data?.portfolio?.map((item) => (
        <div key={item.id} className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={item.src} alt="Project" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
            <p className="text-sm portfolio--link">
              <a className="live-link" href={item.link} target="_blank" >
                View Live
                {' '}
                <img className="right-arrow" src="./img/right-arrow.png" alt="Right Arrow" />
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MyPortfolio;
