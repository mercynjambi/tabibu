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
         }
    },
  },
  plugins: [],
}
