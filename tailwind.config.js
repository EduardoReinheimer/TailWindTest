/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.css', // Adicione o padrão para arquivos CSS em qualquer subdiretório de 'src'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

