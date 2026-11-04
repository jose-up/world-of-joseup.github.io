import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import {
  HomeBase, CompSci, SocialMedia
} from './pages';
import {
  HomeRow
} from './components';

import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <HomeRow/>
      <Routes>
        <Route path="/" element={<HomeBase />} />
        <Route path="/comp-sci" element={<CompSci />} />
        <Route path="/social-media" element={<SocialMedia />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
