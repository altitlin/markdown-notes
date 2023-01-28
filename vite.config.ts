/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			app: resolve(__dirname, 'src', 'app'),
			pages: resolve(__dirname, 'src', 'pages'),
		},
	},
	server: {
		port: 4200,
		open: true,
	},
})
