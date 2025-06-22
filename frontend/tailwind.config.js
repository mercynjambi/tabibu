import { renderToPipeableStream } from 'react-dom/server';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tells Tailwind to scan your React files
  ],
  theme: {
    extend: {
        colors:{
            'primary':"#5f6FFF"
         },
         gridTemplateColumns:{
          'auto': 'repeat(auto-fill, minmax(200px , 1fr))'
         }
    },
  },
  plugins: [],
}
