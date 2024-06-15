import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import React from 'react';
import App from '../App';
import { Login, Home } from '../pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};
