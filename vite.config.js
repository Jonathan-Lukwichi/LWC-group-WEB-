import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// LWC Group — dark + gold cinematic site (React + R3F).
// Pre-bundle the heavy 3D libs so the dev server doesn't re-optimize mid-session
// (that caused intermittent blank loads).
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
})
