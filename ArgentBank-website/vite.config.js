import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Liste d'autorisation pour les chemins d'accès du serveur de développement
    // Inclut les chemins relatifs au répertoire de travail actuel et au répertoire public
    fs: {
      // Ajoute le répertoire "designs" à la liste d'autorisation
      allow: ['.', './public', './../designs']
    }
  }
})
