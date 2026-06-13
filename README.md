# Zynera

> Transformamos espacios vacíos en hogares que venden.

**Zynera** es una plataforma premium de marketing visual inmobiliario, diseñada para acelerar la venta de propiedades mediante fotografía profesional y *staging* digital impulsado por IA. Optimizada para el mercado de Paraguay y diseñada para una escalabilidad SaaS global.

---

## 🚀 Valor Propuesto
*   **Resultados medibles:** 3x más consultas, entrega en 48 horas.
*   **Staging Inteligente:** Decoración virtual fotorrealista adaptada a perfiles de comprador (Mediterráneo, Manhattan, Minimalista).
*   **Enfoque en el Agente:** Material listo para portales y redes sociales, diseñado para reducir el tiempo de rotación en inventario.

---

## 🛠 Arquitectura Técnica
Zynera está construida como una solución SaaS *serverless* moderna, optimizada para rendimiento en el Edge.

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build/) |
| **Hosting** | Cloudflare Pages |
| **Base de Datos** | Cloudflare D1 (SQL) |
| **Storage** | Cloudflare R2 |
| **Autenticación** | Lucia Auth |
| **API/Backend** | Cloudflare Workers |

---

## 📦 Estructura del Proyecto
```text
/src
  /components  # UI (Slider, Modal, Pricing)
  /layouts     # Layout base y estilos globales
  /pages       # Rutas de navegación
  /scripts     # Lógica cliente y API bridges
/public        # Assets estáticos
```

---

## 🚀 Desarrollo
Para correr el proyecto localmente:

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🏗 Roadmap
- [x] Landing Page (Static MVP).
- [ ] Implementación de Auth & Multi-tenancy (Supabase/Lucia + D1).
- [ ] Integración de motor de IA para Staging automático.

---
*A LuxBase project.*
