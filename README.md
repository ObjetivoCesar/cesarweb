# César Reyes Jaramillo - Sitio Web Profesional

## 📋 Descripción General
Sitio web profesional desarrollado con Next.js 15.3.1, que incluye blog, newsletter, panel de administración y funcionalidades SEO optimizadas.

## 🚀 Tecnologías Principales
- **Framework**: Next.js 15.3.1
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: Sistema de archivos JSON
- **Autenticación**: NextAuth.js
- **Envío de Emails**: Nodemailer

## 📁 Estructura del Proyecto

```
├── app/
│   ├── api/                    # Endpoints de la API
│   │   ├── admin-articles/     # Gestión de artículos
│   │   ├── newsletter/         # Suscripciones al newsletter
│   │   ├── send-newsletter/    # Envío de newsletters
│   │   └── sitemap/           # Generación de sitemap
│   ├── admin/                 # Panel de administración
│   ├── blog/                  # Sección del blog
│   ├── contacto/              # Página de contacto
│   └── layout.tsx             # Layout principal
├── components/                # Componentes reutilizables
├── data/                      # Datos del sitio
│   └── subscribers.json       # Lista de suscriptores
├── lib/                       # Utilidades y configuraciones
├── public/                    # Archivos estáticos
│   ├── images/               # Imágenes del sitio
│   └── uploads/              # Imágenes subidas
└── styles/                    # Estilos globales
```

## 🔑 Funcionalidades Principales

### 1. Blog
- Sistema de artículos con categorías
- Soporte para imágenes destacadas
- URLs amigables para SEO
- Sistema de metadatos por artículo

### 2. Newsletter
- Formulario de suscripción
- Almacenamiento de suscriptores en JSON
- Sistema de envío de newsletters
- Panel de administración para gestionar envíos

### 3. Panel de Administración
- Gestión de artículos (crear, editar, eliminar)
- Envío de newsletters
- Vista de suscriptores
- Protección con autenticación

### 4. SEO y Optimización
- Meta etiquetas dinámicas
- Open Graph para redes sociales
- Sitemap.xml automático
- Robots.txt configurado
- URLs amigables
- Imágenes optimizadas

## ⚙️ Configuración

### Variables de Entorno (.env)
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EMAIL_SERVER_USER=tu_email@gmail.com
EMAIL_SERVER_PASSWORD=tu_contraseña
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
NEXTAUTH_SECRET=tu_secreto
NEXTAUTH_URL=http://localhost:3000
```

### Configuración de Imágenes
- Soporte para formatos WebP
- Optimización automática
- Lazy loading
- Tamaños responsivos

## 📊 Estructura de Datos

### Artículos (data/articles.json)
```json
{
  "slug": "titulo-del-articulo",
  "title": "Título del Artículo",
  "content": "Contenido en Markdown",
  "category": "categoria",
  "date": "2024-03-20",
  "image": "/images/articulo.webp"
}
```

### Suscriptores (data/subscribers.json)
```json
[
  "email@ejemplo.com"
]
```

## 🔒 Seguridad
- Autenticación con NextAuth.js
- Protección de rutas administrativas
- Validación de formularios
- Sanitización de datos

## 🚀 Despliegue
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno
4. Ejecutar en desarrollo: `npm run dev`
5. Construir para producción: `npm run build`
6. Iniciar en producción: `npm start`

## 📝 Notas de Mantenimiento
- Los artículos se almacenan en formato Markdown
- Las imágenes se optimizan automáticamente
- El sitemap se genera dinámicamente
- Los suscriptores se guardan en JSON

## 🔄 Actualizaciones Pendientes
- [ ] Migrar a Metadata API de Next.js
- [ ] Implementar sistema de caché
- [ ] Agregar estadísticas de visitas
- [ ] Mejorar sistema de búsqueda

## 📞 Soporte
Para reportar problemas o sugerir mejoras, por favor crear un issue en el repositorio.

## 📄 Licencia
Todos los derechos reservados © César Reyes Jaramillo 