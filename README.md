# Heroes SPA

- Se agrego animaciones con: 
```
https://animate.style/
```

Este es mi repositorio del proyecto de HeroesApp (SPA) de React + Vite

## Instalaciones para testing con npm en vite + react

- npm install jest babel-jest @babel/preset-env @babel/preset-react --save-dev
- npm install @testing-library/react @types/jest jest-environment-jsdom --save-dev
- npm install whatwg-fetch --save-dev

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
}
```

3.1 Eliminar en __package.json__ 
```
"type": "module"
```

4. Crear la configuración de babel __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```