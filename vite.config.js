import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  jsxRuntime: 'classic', 
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        include: "**/*.jsx"
      },
    },
  },
  assetsInclude: ["**/*.JPG","**/*.JSX"],
});