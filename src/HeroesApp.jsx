import { Route, Routes } from 'react-router-dom';

import { AuthProvider, LoginPage } from './auth';
import { HeroesRoutes } from './heroes';

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={ <LoginPage /> } />

        <Route path="*" element={ <HeroesRoutes /> } />
      </Routes>
    </AuthProvider>
  );
}
