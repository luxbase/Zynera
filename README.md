# Zynera

> Transformamos espacios vacíos en hogares que venden.

**Zynera** es una plataforma de staging digital inmobiliario que transforma propiedades vacías en espacios decorados profesionalmente mediante fotografía y post-producción. Optimizada para el mercado paraguayo.

---

## Estado actual

Landing page estática construida con Astro, desplegada en **GitHub Pages**. El formulario envía datos mediante Web3Forms y la coordinación se maneja manualmente por email/WhatsApp.

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build/) |
| **Hosting** | GitHub Pages |
| **Formulario** | Web3Forms |

---

## Roadmap SaaS

La arquitectura prevista para la plataforma multi-tenant incluye:

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | Astro SSR |
| **Hosting** | Cloudflare Pages |
| **API** | Hono en Cloudflare Workers |
| **Auth** | Better Auth + Google OAuth |
| **Base de Datos** | Cloudflare D1 + Drizzle |
| **Storage** | Cloudflare R2 |
| **Fotos** | Subida directa navegador → R2 |

---

## 📦 Estructura del Proyecto

```text
/src
  /components  # UI (Hero, Comparison, FAQ, ContactModal, etc.)
  /layouts     # Layout base y estilos globales
  /pages       # Rutas (index, privacidad)
  constants.ts # Configuración central (WhatsApp, etc.)
/public
  /images      # Assets estáticos (antes.webp, despues.webp)
```

---

## 🚀 Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build producción → dist/
npm run preview  # preview del build
```

---

## 🏗 Roadmap

- [x] Landing page estática + wizard de staging (MVP)
- [ ] Plataforma SaaS multi-tenant con panel de administración
- [ ] Integración de motor de IA para staging automático

---

*A LuxBase project.*