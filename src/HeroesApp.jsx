import { Route, Routes } from 'react-router-dom';

import { AuthProvider, LoginPage } from './auth';
import { HeroesRoutes } from './heroes';
import { PrivateRoute, PublicRoute } from './router';

export const HeroesApp = () => {
  
  return (
    <AuthProvider>
      <Routes>

        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path="login" element={ <LoginPage /> } /> */}
        {/* <Route path="*" element={ <HeroesRoutes /> } /> */}
      </Routes>
    </AuthProvider>
  );
}
