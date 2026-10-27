import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import HomeBase from './pages/home-base/home-base.tsx';
import CompSci from './pages/comp-sci/comp-sci.tsx';
import SocialMedia from './pages/social-media/content.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <nav className="global-nav">
        <div className="icon-bars-row">
          <div className="icon-bar btn">
            <a href='https://x.com/joseup_bmp' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/coding/twitter.svg" alt="Twitter" className='nav-icon' /></a>
            <a href='https://github.com/jose-up' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/coding/github.svg" alt="GitHub" className='nav-icon'/></a>
            <a href='https://www.kaggle.com/josephzeru' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/coding/kaggle.svg" alt="Kaggle" className='nav-icon'/></a>
          </div>
          <div className="icon-bar btn">
            <a href='https://www.linkedin.com/in/joseph-zeru/' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/linkedin.svg" alt="LinkedIn" className='nav-icon'/></a>
            <a href='https://open.spotify.com/user/3wu8qv0nazznc8hj6bbp942n0?si=2353b3fbc54b49c0' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/spotify.svg" alt="Spotify" className='nav-icon'/></a>
            <a href='https://www.pinterest.com/joseupdesignsstuff/' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/pinterest.svg" alt="Pinterest" className='nav-icon' /></a>
            <a href='https://www.youtube.com/@joseup.mp4' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/youtube.svg" alt="YouTube" className='nav-icon' /></a>
          </div>
          <div className="icon-bar btn">
            <a href='https://www.pinterest.com/joseupdesignsstuff/' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/social-media/threads.svg" alt="Threads" className='nav-icon' /></a>
            <a href='https://www.linkedin.com/in/joseph-zeru/' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/social-media/instagram.svg" alt="Instagram" className='nav-icon'/></a>
            <a href='https://open.spotify.com/user/3wu8qv0nazznc8hj6bbp942n0?si=2353b3fbc54b49c0' target="_blank" rel="noreferrer">
              <img src="src/assets/icon-links/social-media/letterboxd.svg" alt="Letterboxd" className='nav-icon'/></a>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/comp-sci" className="btn">ML/AI Experience</Link>
          <Link to="/home-base" className="btn">Main Page</Link>
          <Link to="/social-media" className="btn">Social Media and Content Creation</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomeBase />} />
        <Route path="/comp-sci" element={<CompSci />} />
        <Route path="/social-media" element={<SocialMedia />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
