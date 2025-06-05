 /** @type {import('tailwindcss').Config} */
  import react from '@vitejs/plugin-react'

export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [react()],
 }

