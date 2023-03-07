import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../ui';

import { LoginPage } from '../auth';
import { MarvelPage, DCPage } from '../heroes';

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="login" element={ <LoginPage /> } />

        <Route path="marvel" element={ <MarvelPage /> } />
        <Route path="dc" element={ <DCPage /> } />

        <Route path="/" element={ <Navigate to="/marvel"/> } />
      </Routes>
    </>
  )
}
