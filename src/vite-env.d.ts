/// <reference types="vite/client" />
export default {
    preset: 'ts-jest', // Usa Jest con TypeScript
    testEnvironment: 'jsdom', // Simula un navegador
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Configuraciones adicionales
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Permite TypeScript y JSX
    },
    moduleNameMapper: {
      '\\.(css|scss|sass)$': 'identity-obj-proxy', // Ignora estilos en las pruebas
    },
  };
  