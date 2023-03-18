import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { PrivateRoute } from '../../src/router/PrivateRoute';
import { AuthContext } from '../../src/auth';

describe('Pruebas en <PrivateRoute />', () => {
  
  test('debe de mostrar el children si esta autenticado', () => {
    
    // Se sobrescribe la funcionalidad del localstorage
    Storage.prototype.setItem = jest.fn();
    
    const contextValue = {
      logged: true,
      user: {
        id: 'CDE654',
        name: 'Steve'
      }
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ [ '/marvel?q=batman' ] }>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect( screen.getByText('Ruta privada') ).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel?q=batman');
  });

  
});