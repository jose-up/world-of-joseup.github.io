import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomeBase from './pages/home-base/home-base.tsx';
import CompSci from './pages/comp-sci/comp-sci.tsx';
import SocialMedia from './pages/social-media/content.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeBase />} />
        <Route path="/comp-sci" element={<CompSci />} />
        <Route path="/social-media" element={<SocialMedia />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
