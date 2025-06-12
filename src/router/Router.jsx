import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';
import Events from '../pages/Events';
import EventDetail from '../pages/EventDetails';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/eventos/:id" element={<EventDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
