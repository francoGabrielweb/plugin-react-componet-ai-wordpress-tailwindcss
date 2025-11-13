Proyecto Gutenberg + TailwindCSS + wp-scripts

Este proyecto combina WordPress Gutenberg Blocks con TailwindCSS, utilizando @wordpress/scripts para compilar React y Tailwind CLI para los estilos.

Instalación
Usando pnpm (recomendada)
pnpm install

Usando npm
npm install

Deberás reemplazar los scripts que comienzan con pnpm por npx.




<table>
  <tr>
    <th colspan="2">Guía de desarrollo paso a paso</th>
  </tr>
  <tr>
    <td><strong>Comando</strong></td>
    <td><strong>Descripción</strong></td>
  </tr>
  <tr>
    <td>`pnpm install`</td>
    <td>Instalá dependencias</td>
  </tr>
  <tr>
    <td>`pnpm run tw:build`</td>
    <td>Compilá los estilos iniciales</td>
  </tr>
  <tr>
    <td>`pnpm run tw:watch`</td>
    <td>Modo observador (recompila al guardar)</td>
  </tr>
  <tr>
    <td>`pnpm run dev`</td>
    <td>Iniciá el entorno de desarrollo</td>
  </tr>
  <tr>
    <td>`pnpm run build`</td>
    <td>Compilá para producción</td>
  </tr>
</table>
