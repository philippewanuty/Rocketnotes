import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	server: {
		host: 'localhost', // Define o host como 'localhost'
		port: 3000 // Define a porta como 5173
	}
});
