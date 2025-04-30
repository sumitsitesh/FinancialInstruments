import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // optional setup file
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    coverage: {
      provider: 'v8', // or 'c8' if you prefer
      reporter: ['text', 'lcov', 'html'], // lcov for IDE support, html for folder-wise UI
      reportsDirectory: './coverage',
      all: true, // include files not directly tested
      include: ['src/**/*.{ts,tsx}'], // your source files
      exclude: ['**/tests/**', '**/*.test.*'], // optional
    },

  },
})
