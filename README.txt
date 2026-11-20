MALDITOS HÁMSTERS — corrección de la portada

Abre index.html en un navegador. Mantén la carpeta assets junto a index.html, styles.css y script.js.

Ajustes realizados sobre la portada:
- La Pipa se ha reducido y desplazado para que su tarjeta completa quede dentro del bloque y tenga la inclinación de la referencia.
- Se ha corregido el centrado del collage en escritorio: las reglas responsive ya no sustituyen el desplazamiento horizontal de centrado.
- Al quedar centrado el collage, el panel de introducción vuelve a quedar completo y el texto no se corta por el borde derecho.
- Se mantiene el tamaño del panel de texto y el solapamiento del logotipo.

No se han modificado las secciones siguientes de la página.


OPTIMIZACIÓN DE IMÁGENES
- Todas las imágenes JPG/PNG se han convertido a WebP (carpeta assets), redimensionadas al tamaño real de uso (con margen para pantallas retina).
- Las láminas que estaban en CMYK se han convertido a sRGB con su perfil ICC (FOGRA39) para que el color sea consistente en todos los navegadores.
- Se han añadido width/height a cada <img> (evita saltos de maquetación), loading="lazy" a todo lo que queda bajo la portada y fetchpriority="high" a la imagen de fondo de la portada.
- Corregido #carta-real: la regla "border" estaba mal escrita (con comas) y el navegador la ignoraba. Ahora es: border: 10px solid #151c51.
- Los originales de alta resolución NO están en el proyecto; consérvalos aparte para impresión.
