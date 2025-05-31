# Landing Mensajería Objetivo – César Reyes

## Descripción
Landing page profesional para la solución de Mensajería Objetivo con IA, diseñada para PYMES, profesionales independientes y artesanos. El sitio está construido con Next.js y Tailwind CSS, y cuenta con una estructura moderna, visual atractiva y experiencia 100% responsiva.

---

## Avances y Características

### 1. **Despliegue y Estructura**
- Proyecto Next.js 15.x listo para desarrollo y producción.
- Estructura modular y limpia.
- Instalación de dependencias y configuración inicial documentada.

### 2. **Secciones Principales**
- **Hero con video embebido** (YouTube, autoplay, sin controles).
- **Alerta PYME**: sección destacada con CTA y fondo anaranjado.
- **Cards de Problemas**: 4 cards visuales, ahora tipo carrousel slide en móvil.
- **Banner motivacional**: con imagen y texto inspirador.
- **Video secundario**: presentación de la solución.
- **Cards de Solución**: 3 cards, carrousel en móvil.
- **Beneficios**: 6 cards, carrousel en móvil.
- **Cómo funciona**: pasos visuales y bloque de ayuda.
- **Testimonios**: 3 cards, carrousel en móvil.
- **Planes de Inversión**: 4 cards, carrousel en móvil, con prioridad visual al plan de compra del sistema.
- **Preguntas Frecuentes (FAQ)**: acordeón SEO con íconos animados.
- **CTA final**: llamado a la acción destacado.

### 3. **Responsividad y UX**
- **Carrousel horizontal** en todas las secciones de cards para móvil (scroll-x + snap).
- **Grid** en desktop para máxima claridad visual.
- Experiencia touch-friendly y moderna.

### 4. **Personalizaciones Visuales**
- **Paleta de Colores**:
  - **Principal**: Blanco, Negro y Grises para una apariencia elegante y profesional
  - **Acentos**: Color primario (#e78c24) reservado exclusivamente para CTAs y elementos de acción
  - **Grises**:
    - Gris muy oscuro: #333333
    - Gris medio: #666666
    - Gris claro: #999999
    - Gris muy claro: #f5f5f5
- **Elementos Visuales**:
  - Botones y bullets visuales
  - Cards con sombra y bordes sutiles
  - Imágenes y textos adaptados a la marca y público objetivo

### 5. **SEO y Copywriting**
- Títulos y textos optimizados para captar leads y mejorar posicionamiento.
- FAQ orientado a resolver objeciones reales del cliente ideal.

---

## Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone <repo-url>
   cd <carpeta-del-proyecto>
   ```
2. **Instala dependencias:**
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Abre en tu navegador:**
   [http://localhost:3000](http://localhost:3000)

---

## Estructura de Archivos Relevantes
- `app/mensajeria/page.tsx`: Página principal y todas las secciones.
- `public/images/mensajeria/`: Imágenes de cards y banners.
- `tailwind.config.js`: Configuración de estilos.

---

## Notas y Siguientes Pasos
- Todas las cards son slide en móvil para evitar scroll vertical excesivo.
- Los textos, imágenes y estilos pueden seguir personalizándose según feedback.
- Si necesitas agregar nuevas secciones, solo sigue el patrón de carrousel para cards.

---

## Créditos
Desarrollado junto a IA y feedback de César Reyes.

## Componentes de Header

El sitio implementa dos tipos de headers para diferentes secciones:

### 1. Header Transparente (`TransparentHeader`)
- **Ubicación**: `components/transparent-header.tsx`
- **Características**:
  - Barra superior fija con mensaje "Te ayudo a crear tu plan de acción"
  - Header transparente con texto en blanco
  - Botón "Contáctame" en blanco con texto naranja
  - Menú móvil con fondo semi-transparente y efecto blur
  - Posicionamiento absoluto para no afectar el layout
- **Uso**: Implementado en el layout principal para páginas con hero sections

### 2. Header Estándar (`Header`)
- **Ubicación**: `components/header.tsx`
- **Características**:
  - Header fijo con fondo blanco
  - Sombra suave
  - Texto en color oscuro
  - Botón "Contáctame" en naranja
- **Uso**: Para páginas internas o secciones sin hero

## Implementación

Los headers se implementan en el layout principal (`app/layout.tsx`) y se pueden alternar según la necesidad de cada página. La decisión de tener dos componentes separados permite:

1. **Reutilización**: Diferentes variantes del header según la página
2. **Mantenibilidad**: Código modular y fácil de actualizar
3. **Consistencia**: Asegura que el header se vea igual en todas las páginas
4. **Flexibilidad**: Diferentes configuraciones según la ruta o estado de la página

## Estilos

Los headers utilizan Tailwind CSS para los estilos y son completamente responsivos:
- **Escritorio**: Navegación horizontal con botón de contacto
- **Móvil**: Menú hamburguesa con navegación vertical 