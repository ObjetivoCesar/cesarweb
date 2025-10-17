const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'transparent-header.tsx');

// Leer el archivo
let content = fs.readFileSync(filePath, 'utf-8');

// Reemplazar la línea problemática
content = content.replace(
  /setIsMenuOpen\(false\)\s*\n\s*setIsMobileServicesOpen\(false\)/g,
  'setIsMenuOpen(false)'
);

// Escribir el archivo corregido
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Menú móvil corregido exitosamente');
