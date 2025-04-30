/// <reference types="vite/client" />
// global.d.ts
import '@testing-library/jest-dom';
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  