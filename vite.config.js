import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(
    {
      theme: {
        extend: {
          colors: {
            primary: 'var(--primary-color)',
            accentRed: 'var(--accent-red)',
            accentGold: 'var(--accent-gold)',
            deepTeal: 'var(--deep-teal)',
            bgCream: 'var(--background-color)',
          },
        },
      }
    }
  )],
})
