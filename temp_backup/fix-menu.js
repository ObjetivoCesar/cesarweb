const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'transparent-header.tsx');

// Leer el archivo
let content = fs.readFileSync(filePath, 'utf-8');

// Reemplazar las ocurrencias de isMobileServicesOpen con expandedMenus['servicios']
content = content.replace(
  /onClick=\{\(\) => setIsMobileServicesOpen\(!isMobileServicesOpen\)\}/g,
  'onClick={() => toggleMenu(\'servicios\')}'
);
content = content.replace(
  /\$\{isMobileServicesOpen \? 'rotate-180' : ''\}/g,
  '${expandedMenus[\'servicios\'] ? \'rotate-180\' : \'\'}' 
);
content = content.replace(
  /\{isMobileServicesOpen && \(/g,
  '{expandedMenus[\'servicios\'] && ('
);

// Escribir el archivo corregido
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Menú móvil corregido exitosamente');
