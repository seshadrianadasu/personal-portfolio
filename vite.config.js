import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig(() => {
  const  active = process.env.VITE_ACTIVE_ENV || 'local'
  const base = active === 'gh-pages' ? '/personal-portfolio/' : '/'
    return {  
          plugins: [tailwindcss(),react()],
          base,
      }
})
