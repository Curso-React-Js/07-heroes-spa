import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

// mocks de librerias completas
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // solo se sobrescribira lo que se esta llamando
  useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <SearchPage />', () => {

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrarse correctamente con valores por defecto', () => {
    
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar a Batman y el input con el valor del queryString', () => {
    
    render(
      <MemoryRouter initialEntries={ ['/search?q=batman'] }>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');
    // screen.debug();
    
    const img = screen.getByRole('img');
    expect(img.src).toContain('/heroes/dc-batman.jpg');

    // screen.debug();
    const alert = screen.getByLabelText('alert-danger');
    // expect( alert.style ).
    expect( alert.style.display ).toBe('none');
  });

  test('debe de mostrar un error si no se encuentra el hero (/search?q=batman123)', () => {

    render(
      <MemoryRouter initialEntries={ ['/search?q=batman123'] }>
        <SearchPage />
      </MemoryRouter>
    );
    
    const alert = screen.getByLabelText('alert-search');
    expect( alert.style.display ).toBe('none');
    
    const alertDanger = screen.getByLabelText('alert-danger');
    expect( alertDanger.style.display ).toBe('');
  });
  
  test('debe de llamar el navigate a la pantalla nueva', () => {

    const inputValue = 'superman';

    render(
      <MemoryRouter initialEntries={ ['/search'] }>
        <SearchPage />
      </MemoryRouter>
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { name: 'searchText', value: inputValue }});
    
    const form = screen.getByRole('form');
    fireEvent.submit(form); // ejecutando submit

    expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`);
  });
  
});