/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve(__dirname, 'src', 'app'),
      entities: resolve(__dirname, 'src', 'entities'),
      pages: resolve(__dirname, 'src', 'pages'),
      'shared/constants': resolve(__dirname, 'src', 'shared', 'constants'),
      'shared/ui': resolve(__dirname, 'src', 'shared', 'ui'),
      'shared/lib': resolve(__dirname, 'src', 'shared', 'lib'),
    },
  },
  server: {
    port: 4200,
    open: true,
  },
})
