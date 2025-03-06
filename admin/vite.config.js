import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server:{
    port:5174
  }
})

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     port:5174
//   }
// })
