import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Navbar } from '../../../src/ui/components/Navbar';
import { AuthContext } from '../../../src/auth';

const mockedUseNavigate = jest.fn();

// mocks de librerias completas
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // solo se sobrescribira lo que se esta llamando
  useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar />', () => {
  
  const contextValue = {
    logged: true,
    user: {
      name: 'Marcus'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks());
  
  test('debe de mostrar el nombre del usuario', () => {

    render(
      <MemoryRouter initialEntries={ ['/']  }>
        <AuthContext.Provider value={ contextValue }>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();
    expect( screen.getByText('Marcus') ).toBeTruthy();
  });
  
  test('debe de llamar el logout y navigate cuando se hace click en el boton logout', () => {

    render(
      <MemoryRouter initialEntries={ ['/']  }>
        <AuthContext.Provider value={ contextValue }>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click( logoutBtn );

    expect( contextValue.logout ).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', { 'replace': true });    
  });
  
});