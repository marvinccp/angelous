import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configurar el fallback para el enrutamiento del lado del cliente
    historyApiFallback: true,
  }
})
