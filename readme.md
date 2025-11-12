Proyecto Gutenberg + TailwindCSS + wp-scripts

Este proyecto combina WordPress Gutenberg Blocks con TailwindCSS, utilizando @wordpress/scripts para compilar React y Tailwind CLI para los estilos.


my-block/

   build/                # Archivos compilados listos para producción
        style.css

   src/                  # Código fuente (React + Tailwind)
        index.js
        style.css
        components/

package.json
tailwind.config.js
README.md


"scripts": {
  "tw:build": "pnpm tailwindcss -i ./src/style.css -o ./build/style.css --minify --content \"./src/**/*.{js,jsx,ts,tsx,php}\"",
  "tw:watch": "npx @tailwindcss/cli -i ./src/style.css -o ./build/style.css --watch",
  "dev": "wp-scripts start",
  "build": "wp-scripts build"
}

pnpm run tw:build

Compila los estilos de Tailwind una sola vez, minificados y escaneando todo el contenido en src. Ideal para producción.


pnpm run tw:watch
Modo de desarrollo. Observa los cambios y recompila automáticamente los estilos.

pnpm run dev
Inicia el entorno de desarrollo de Gutenberg (wp-scripts start). Recarga el bloque al guardar.

pnpm run build
Compila el bloque para producción, optimizando el bundle final.

Instalación
Usando pnpm (recomendada)
pnpm install

Usando npm
npm install

Deberás reemplazar los scripts que comienzan con pnpm por npx.

"scripts": {
  "tw:build": "npx tailwindcss -i ./src/style.css -o ./build/style.css --minify --content \"./src/**/*.{js,jsx,ts,tsx,php}\""
}


Guía de desarrollo paso a paso
| comando| descricion |
| --- | --- | 
| `pnpm install` | Instalá dependencias |  
| `pnpm run tw:build` | Compilá los estilos iniciales |  
| `pnpm run tw:watch` | Modo observador (recompila al guardar) |  
| `pnpm run dev` | Iniciá el entorno de desarrollo|  
| `pnpm run build` | Compilá para producción|  
