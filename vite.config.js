import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configurar el fallback para el enrutamiento del lado del cliente
    historyApiFallback: true,
    rewrite: {
      // Si la solicitud no es para un archivo estático, redirigir a index.html
      // Esto permitirá que React Router maneje la ruta y muestre el componente correcto
      // basado en la URL.
      "^/([^/]*|)(?.*)?$": "/index.html",
    },
  },
});
