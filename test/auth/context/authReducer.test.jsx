import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
  
  test('debe de retornar el estado por defecto', () => {
    const initialState = { logged: false }
    const state = authReducer(initialState, {});

    expect( state ).toEqual(initialState);
  });
  
  test('debe de (login) llamar el login autenticar y establecer el user', () => {
    const initialState = { logged: false }

    const user = { id: 'ABC-132', name: 'Angel :D' };
    const action = {
      type: types.login,
      payload: user,
    }

    const state = authReducer(initialState, action);

    expect( state.logged ).toBeTruthy();
    expect( state.user ).toEqual(user);
  });
  
  test('debe de (logout) borrar el name del usuario y logged en false', () => {
    const initialState = { logged: true }
    
    const action = { type: types.logout }
    const newState = authReducer(initialState, action);

    expect( newState.logged ).toBeFalsy();
    expect( newState.user ).toBeUndefined();
  });
  
});