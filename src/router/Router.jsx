import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Episodes from '../pages/Episodes';
import MainLayout from '../layouts/MainLayout';
import Characters from '../pages/Characters';
import EpisodeDetails from '../pages/EpisodeDetails';
import CharacterDetailsPage from '../pages/CharacterDetails';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episode/:episodeId" element={<EpisodeDetails />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharacterDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
