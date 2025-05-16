# Buscador de Comercios Edenred

**Demo** de un buscador de comercios con React + Vite + TypeScript y Google Maps API.

## ⚙️ Descripción Técnica y Capacidades

- **Stack principal**

  - **Frontend**: React 18 con **TypeScript 5** para tipado estricto y escalabilidad.
  - **Bundler & DevServer**: Vite 4 para arranque instantáneo, recarga en caliente y optimizaciones de producción.
  - **Estilos**: TailwindCSS 3 agiliza la implementación de diseños responsivos y personalizados.

- **Gestión de estado**

  - **Zustand**: almacena la geolocalización del usuario y el estado global de filtros de forma minimalista y eficiente.
  - **Hooks personalizados**:
    - `useFilteredRestaurants` para memoizar resultados y evitar cálculos innecesarios.
    - `useToast`, `useMediaQuery` y controles de accesibilidad en `shared/hooks`.

- **Mapa y geolocalización**

  - **Google Maps JavaScript API** (v3) cargada con `@googlemaps/js-api-loader`.
  - **MarkerClusterer** agrupa marcadores en zonas concurridas, mejorando la usabilidad.
  - **Mini-cards** propias renderizadas sobre el mapa al hacer zoom, con interacción directa (hover & click).
  - **Selector de ubicación** que permite introducir direcciones con Autocomplete o usar la posición actual.

- **Responsive & UX**
  - Diseño mobile-first: el panel de filtros se despliega como overlay lateral en pantallas pequeñas y como sidebar fijo en desktop.
  - Indicadores de carga y feedback visual durante llamadas a la API y renderizado de mapas.
  - Transiciones suaves y animaciones ligeras (opcionalmente potencias con Framer Motion).
  - **Design System**: definición de un conjunto de componentes reutilizables, tokens de color y tipografía, y pautas de espaciado para garantizar coherencia visual, accesibilidad y facilidad de escalado en futuras iteraciones.

Con esta arquitectura, **Buscador de Comercios Edenred** ofrece una base sólida y fácilmente extensible para cualquier proyecto que requiera mostrar ubicaciones georreferenciadas, con un enfoque claro en **rendimiento**, **accesibilidad** y **calidad de experiencia de usuario**.```

---

Visita la aplicación en línea sin necesidad de instalarla localmente:
[https://buscadoredenred.vercel.app/](https://restaurantfinder-liart.vercel.app/)
nombre de usuario: usuarioDemo
Contraseña: claveDemo

Si aun necesita instalar localmente siga las siguientes instrucciones:

## 🚀 Instalación y arranque

1. Clona el repositorio:
   ```bash
   git clone <repo-url>
   cd restaurant-finder
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura tu API Key de Google Maps:
   ```bash
   cp .env.example .env
   # Abre .env y asigna tu clave:
   # VITE_GOOGLE_MAPS_KEY=TU_API_KEY_AQUI
   ```
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en tu navegador:
   ```
   http://localhost:5173
   ```

---

## 🗂 Estructura del proyecto

```
project-root/
├─ public/                     # Archivos estáticos
├─ src/
│  ├─ app/
│  │  └─ layout/        # Componentes de layout global
│  ├─ features/
│  │  ├─ map/
│  │  │  └─ components/        # MapView, clustering y markers
│  │  └─ restaurants/
│  │     └─ components/        # Lista virtualizada, filtros, modal
│  ├─ pages/
│  │  ├─ Home.tsx              # Página principal
│  │  └─ Not-found.tsx         # 404
│  ├─ shared/
│  │  ├─ ui/                   # Botones, inputs, dialogs, toasts…
│  │  ├─ store/                # Zustand stores
│  │  └─ hooks/                # Hooks genéricos (useToast, useMediaQuery…)
│  ├─ hooks/
│  │  └─ useFilteredRestaurants.ts
│  └─ main.tsx                  # Punto de entrada
├─ .env.example                 # Ejemplo de variables de entorno
├─ README.md                    # ← este archivo
├─ package.json
├─ vite.config.ts
└─ tsconfig.json
```

---

## 🎬 Uso de la aplicación

1. **Agregar Ubicación**
   - Escribe la direccion de busqueda o utiliza tu ubicación actual
   - Se recomienda utilizar como ubicacion "La Moneda, Santiago" por que es donde se encuentran los comercios de ejemplo.
2. **Búsqueda**
   - Escribe el nombre del comercios en el campo de búsqueda.
3. **Filtros**
   - Activa “Abierto ahora” o “Mejor evaluados” para refinar resultados.
   - Activa filtros vanzandos como rango de kilometros para visualizar mas comercios al tu alrededor
4. **Mapa**
   - Observa clusters de marcadores.
   - Haz zoom para desagruparlos en mini-cards y ver detalles de comercios.
5. **Detalle**
   - Haz clic en un marcador o mini-card para abrir el modal con información detallada y acciones como mapas o RRSS.
6. **Cambiar ubicación**
   - En el Header puedes reingresar una dirección o usar “Mi ubicación” para centrar el mapa si es que quieres en otro punto.
7. **Centro de Accebilidad**
   - En el Header presionar botones para aumentar o disminuir el tomaño de la fuente y boton para alto contraste.

---


## 🔧 Mejoras a futuro

- **Lazy-load del mapa**  
  Carga dinámica de `MapView` con `React.lazy` + `Suspense` para reducir el bundle inicial.
- **Virtualización de la lista**  
  Uso de `react-window` para renderizar solo los ítems visibles y mejorar el rendimiento.
- **Accesibilidad (a11y)**
  - Roles ARIA en modales (`role="dialog"`, `aria-modal="true"`).
  - Trap-focus en modales y cierre con la tecla Esc.
- **Chunking manual en Vite**  
  Separar el bundle de Google Maps en un chunk propio (`manualChunks`).

---

## 📄 Licencia

© Martech S.A.
