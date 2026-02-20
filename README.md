# Beats 3 - Landing Page

Una landing page moderna y elegante para **Beats 3** headphones, construida con **React**, **Vite**, **Tailwind CSS** y **GSAP**. 

![Beats 3 Landing](https://alejandro-gr01.github.io/beats-3-landing/)

## 🎧 Descripción

Landing page de producto showcasing para los auriculares Beats 3 con animaciones fluidas, diseño responsivo y una experiencia de usuario premium. Incluye información del producto, casos de uso, especificaciones técnicas y opciones de compra.

## 🚀 Características

- **Diseño Premium**: Interfaz moderna y elegante optimizada para producto de alto valor
- **Animaciones Smooth**: Efectos profesionales con GSAP para scroll triggers y transiciones
- **Totalmente Responsivo**: Diseño adaptativo para todos los dispositivos
- **Componentes Escalables**: Arquitectura modular y reutilizable
- **Performance Optimizado**: Vite para build rápido y desarrollo ágil
- **Deploy Automático**: Configurado con GitHub Pages

## 📋 Secciones

- **NavBar**: Navegación responsiva con branding
- **Hero**: Sección principal con presentación del producto
- **Sponsors**: Empresas y partners destacados
- **Specs**: Especificaciones técnicas detalladas
- **Case**: Casos de uso y aplicaciones
- **CTA**: Llamada a la acción prominente
- **Shop**: Opciones de compra y colores disponibles
- **Footer**: Información legal y enlaces

## 🛠️ Tecnologías

- **React 19** - Librería de interfaz
- **Vite 7** - Build tool ultrarrápida
- **Tailwind CSS 4** - Framework de estilos utility-first
- **GSAP 3** - Animaciones profesionales y ScrollTrigger
- **GitHub Pages** - Hosting estático
- **Vite React Plugin** - Fast Refresh con Babel

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview

# Deploy a GitHub Pages
pnpm run deploy
```

## 🎨 Estructura

```
src/
├── components/       # Componentes de secciones
│   ├── NavBar.jsx
│   ├── Hero.jsx
│   ├── Sponsors.jsx
│   ├── Specs.jsx
│   ├── Case.jsx
│   ├── CTA.jsx
│   ├── Shop.jsx
│   └── Footer.jsx
├── constants/       # Configuración y datos
├── assets/         # Imágenes en formato AVIF
├── App.jsx        # Componente principal
└── main.jsx       # Entry point
```

## 🖼️ Assets

Todas las imágenes están optimizadas en formato AVIF para mejor performance:
- Hero image
- Product colors (black, blue, red, yellow, gray)
- Case study
- Specifications
- CTA banner
- NBA sponsorship

## 📱 Responsive Design

Breakpoints implementados con Tailwind CSS para óptima visualización en:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🌐 Deploy

El proyecto está configurado para deploy automático en GitHub Pages:

```bash
pnpm run deploy
```

Ver en: [https://alejandro-gr01.github.io/beats-3-landing/](https://alejandro-gr01.github.io/beats-3-landing/)

## ✨ Mejoras Futuras

- [ ] Carrito de compras interactivo
- [ ] Selector de colores en tiempo real
- [ ] Integración de payment gateway
- [ ] Chatbot de soporte
- [ ] Video demostrativo del producto
