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
- **Hero con video embebido** (YouTube, autoplay, sin controles), con imagen de fondo y texto sobrepuesto ajustado.
- **Nueva sección de introducción tipo cita**: Cita testimonial de César Reyes.
- **Slide de testimonios**: Carrousel de testimonios antes de "Empieza a Tomar Decisiones con Estrategia".
- **Alerta PYME**: sección destacada con CTA y fondo anaranjado.
- **Cards de Problemas**: 4 cards visuales, ahora tipo carrousel slide en móvil con navegación por puntos (dots).
- **Banner motivacional**: con imagen y texto inspirador.
- **Video secundario**: presentación de la solución.
- **Cards de Solución**: 3 cards, carrousel en móvil.
- **Beneficios**: 6 cards, carrousel en móvil.
- **Cómo funciona**: pasos visuales y bloque de ayuda.
- **Slider de imágenes "Esto haremos con mi equipo por ti!"**: Con navegación por puntos, lightbox solo en escritorio, y ajuste de tamaño de imagen para móvil.
- **Planes de Inversión**: 4 cards, carrousel en móvil, con prioridad visual al plan de compra del sistema.
- **Preguntas Frecuentes (FAQ)**: acordeón SEO con íconos animados.
- **Sección de contacto "Agenda una Llamada"**: Reemplazada por una única imagen estática y un componente de chat fijo (`EmbeddedChat`).
- **Newsletter minimalista horizontal**: Integrado en el footer con espaciado ajustado.
- **Footer rediseñado**: Con enlaces a páginas, categorías del blog, contactos, redes sociales (íconos SVG con enlaces que abren en nueva pestaña) y copyright.
- **CTA final**: llamado a la acción destacado.

### 3. **Responsividad y UX**
- **Carrousel horizontal** en todas las secciones de cards para móvil (scroll-x + snap) con navegación por puntos (dots).
- **Grid** en desktop para máxima claridad visual.
- Experiencia touch-friendly y moderna.
- Ajustes de márgenes en la sección de citas para móvil.
- Foto del hero centrada en móvil (`object-center`).
- Altura del hero reducida en móvil (`min-h-[475px]`).
- Texto del hero posicionado más arriba (`bottom-32`).

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

### Mejoras Recientes (Manejo de Mensajes de Estado)

El componente ha sido actualizado para manejar de forma más eficiente los mensajes de estado del backend (ej. "Conectado y esperando respuesta..."). Ahora, en lugar de añadir mensajes repetitivos, el componente actualiza el mensaje de estado existente en la interfaz del chat, evitando la acumulación de mensajes duplicados y mejorando la experiencia del usuario.

### Historial de Cambios Recientes

Para un registro detallado de las actualizaciones y mejoras realizadas en el proyecto:

1.  **Ajustes al Slider de Imágenes "Esto haremos con mi equipo por ti!"**:
    *   Implementación de navegación por puntos en el slider.
    *   Lightbox funcional solo en escritorio; desactivado en móvil.
    *   Ajuste de tamaño de la imagen en móvil (`max-w-[80vw]`).
    *   Corrección de la ruta de la imagen estática `/images/cesar_trabajando.webp` a `/images/cesar_trabajando.png`.

2.  **Mejoras en el Slider de Cards Móviles**:
    *   Implementación de navegación por puntos (dots) para el componente `CardsMobileSlider` en `app/page.tsx`.

3.  **Sección "Agenda una Llamada" Modificada**:
    *   Reemplazo del `ContactPhotoSlider` por una única imagen estática (`cesar_reyes_bn.png`).
    *   El formulario de contacto fue sustituido por el componente de chat fijo `EmbeddedChat`.

4.  **Optimización de Diseño Responsivo**:
    *   **Sección de la Cita**: Se agregaron márgenes laterales en modo celular (`px-4 md:px-8` al `blockquote` y `pr-4 md:pr-8` al div del autor).
    *   **Hero Section**:
        *   Foto del hero centrada en modo celular (`object-center` y `objectPosition: 'center center'`).
        *   Altura de la pantalla del hero reducida en modo celular (`min-h-[475px]`).
        *   Texto del hero subido para mejor posicionamiento visual (`bottom-32`).

5.  **Rediseño Completo del Footer**:
    *   Integración del newsletter existente.
    *   Inclusión de enlaces a páginas clave (`Mensajería`, `Maspacientes`, `Blog`), categorías del blog, contactos y redes sociales.
    *   Sustitución de siglas de redes sociales por íconos SVG con enlaces que abren en una nueva pestaña.
    *   Diseño de varias columnas para escritorio y dos columnas para móvil.
    *   Aseguramiento del copyright al final.
    *   Apertura de enlaces de navegación (`Inicio`, `Blog`, `Maspacientes`, `Mensajería`) en una nueva pestaña (`target="_blank"` y `rel="noopener noreferrer"`).

6.  **Componente de Chat Embebido (`EmbeddedChat`)**:
    *   Reemplazó el formulario de contacto.
    *   Se corrigió el color de la letra del bot en `EmbeddedChat.css` (de `#fff` a `#000`).
    *   Se implementó una corrección para evitar mensajes de estado duplicados (ej. "Conectado y esperando respuesta...") utilizando `useRef` y una función `updateStatusMessage` en `EmbeddedChat.tsx`.

7.  **Ajuste del Espaciado del Newsletter**:
    *   Modificación del padding de la sección del newsletter en `app/page.tsx` de `pt-12 pb-8` a `py-10` para armonizar el espaciado vertical.

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

---

## Componente de Chat Embebido (`EmbeddedChat`)

Hemos integrado un nuevo componente de chat embebido para reemplazar el widget flotante antiguo.

- **Ubicación**: `components/embedded-chat/EmbeddedChat.tsx`
- **Descripción**: Este componente muestra la interfaz de chat directamente en la página, en lugar de como un elemento flotante.

### Implementación en la Página Principal (`app/page.tsx`)

El componente `EmbeddedChat` fue añadido en la sección de contacto de la página principal (`app/page.tsx`). Se importa al inicio del archivo y se renderiza en el JSX dentro de la estructura de la página.

```typescript
// ... otras importaciones ...
import EmbeddedChat from '@/components/embedded-chat/EmbeddedChat';
// ... existing code ...

export default function Home() {
  return (
    <>
      {/* ... otras secciones ... */}
      <section id="contact" className="py-12 md:py-24 lg:py-32 bg-gray-100">
        {/* ... otros elementos de la sección de contacto ... */}
        <EmbeddedChat />
        {/* ... otros elementos de la sección de contacto ... */}
      </section>
      {/* ... otras secciones ... */}
    </>
  );
}
```

### Reutilización del Componente

Puedes reutilizar el componente `EmbeddedChat` en cualquier otra página o componente de tu sitio web. Por ejemplo, para añadirlo a un artículo de blog:

1.  **Importa** el componente al inicio del archivo donde deseas usarlo:

    ```typescript
    import EmbeddedChat from '@/components/embedded-chat/EmbeddedChat';
    ```

2.  **Renderiza** el componente en el lugar deseado dentro del JSX:

    ```typescript
    export default function BlogPost() {
      return (
        <div>
          {/* ... contenido del artículo del blog ... */}
          <EmbeddedChat />
          {/* ... más contenido o final del artículo ... */}
        </div>
      );
    }
    ```

Asegúrate de ajustar los estilos según sea necesario para que se adapte al diseño de la página donde lo estás utilizando.

### Mejoras Recientes (Manejo de Mensajes de Estado)

El componente ha sido actualizado para manejar de forma más eficiente los mensajes de estado del backend (ej. "Conectado y esperando respuesta..."). Ahora, en lugar de añadir mensajes repetitivos, el componente actualiza el mensaje de estado existente en la interfaz del chat, evitando la acumulación de mensajes duplicados y mejorando la experiencia del usuario.

--- 