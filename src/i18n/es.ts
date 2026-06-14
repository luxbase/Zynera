export default {
  lang: 'es',
  label: 'Español',
  meta: {
    title: 'Zynera | Staging Digital y Marketing Inmobiliario Premium',
    description: 'Transformamos propiedades en anuncios profesionales que generan más interés usando staging digital y fotografía profesional en Paraguay.',
  },
  layout: {
    skipToContent: 'Ir al contenido principal',
  },
  header: {
    homeLabel: 'Inicio de Zynera',
    whatsappUrl: 'https://wa.me/595981123456?text=Hola%20Zynera!%20Quisiera%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20staging%20digital.',
    servicios: 'Servicios',
    proceso: 'Proceso',
    resultados: 'Resultados',
    faq: 'FAQ',
    cta: 'Mejorar mi publicación →',
    whatsapp: 'WhatsApp',
  },
  hero: {
    h1: 'Aumenta el valor percibido de cada propiedad.',
    p: 'Fotos mejoradas, texto sin errores y ambientes decorados digitalmente en 24 horas — para que tu propiedad venda sola.',
    cta: 'Mejorar mi publicación →',
  },
  comparison: {
    heading: 'Visualizá el impacto',
    original: 'Original',
    staging: 'Staging',
    styles: ['Mediterráneo', 'Manhattan', 'Minimalista'],
  },
  features: {
    heading: 'Por qué el marketing visual importa',
    p: 'En un mercado saturado, la primera impresión es digital. No dejes que una mala foto detenga tu venta.',
    cards: [
      {
        icon: '👁️',
        title: 'La primera impresión es digital',
        text: 'La mayoría de los compradores empieza en portales. Si la foto no impacta hoy, probablemente no haya visita mañana.',
      },
      {
        icon: '⏱️',
        title: 'Más consultas, menos tiempo en venta',
        text: 'Vimos que las propiedades con staging digital reciben más consultas y tienden a venderse más rápido que aquellas con fotos comunes.',
      },
      {
        icon: '⭐',
        title: 'Captaciones con exclusividad',
        text: 'Ofrecer marketing visual premium te posiciona como un agente de élite, facilitando la firma de nuevas exclusividades.',
      },
    ],
  },
  pricing: {
    heading: 'Elegí tu modo',
    p: 'Dos formas de mejorar tu listing. Sin visitas, sin fotógrafo.',
    cards: [
      {
        name: 'BÁSICO',
        price: '$49',
        per: '/ propiedad',
        features: [
          'Nos enviás las fotos o las bajamos del portal',
          'Corregimos color, luz y nitidez',
          'Amoblamos virtualmente la propiedad',
          'Reescribimos la descripción',
          'Recibís el ZIP listo para publicar',
        ],
      },
      {
        name: 'EMPRESARIAL',
        price: '$79',
        per: '/ propiedad',
        popular: true,
        features: [
          'Nos das acceso al portal',
          'Corregimos color, luz y nitidez',
          'Amoblamos virtualmente la propiedad',
          'Reescribimos la descripción',
          'Editamos la publicación completa',
        ],
      },
    ],
    popularBadge: 'RECOMENDADO',
    paymentNote: 'Pagás en guaraníes o transferencia · Consultanos por combos de 3+ propiedades',
    cta: 'Mejorar mi publicación →',
    coldStart: {
      title: '★ ¿Primera vez? Tu primer listing va gratis.',
      desc: 'Cupo limitado a las primeras 10 agencias. Consultanos por WhatsApp sin compromiso.',
      cta: 'Reclamar →',
      waUrl: 'https://wa.me/595981123456?text=Hola%20Zynera!%20Quiero%20reclamar%20mi%20primer%20listing%20gratis.',
      referral: '💰 ¿Tenés colegas? Por cada agencia referida, recibís 10% de descuento en tu próximo servicio.',
    },
  },
  process: {
    heading: 'Tu propiedad lista en 3 pasos',
    p: 'Sin visitas, sin fotógrafo. Todo por WhatsApp o portal.',
    steps: [
      {
        title: 'Mandás tu listing',
        text: 'Nos enviás las fotos que ya tenés o el link del portal. También podés compartir acceso.',
      },
      {
        title: 'Mejoramos',
        text: 'Corregimos color, luz y nitidez. Reescribimos el texto. Decoramos ambientes digitalmente.',
      },
      {
        title: 'Recibís',
        text: 'Te devolvemos el ZIP listo para publicar o editamos el portal directamente por vos.',
      },
    ],
  },
  faq: {
    heading: 'Preguntas Frecuentes',
    items: [
      {
        q: '¿Tengo que mover muebles o decorar la propiedad?',
        a: 'No es necesario. Nosotros capturamos el espacio tal cual está y luego realizamos la decoración virtual sobre la imagen real en post-producción.',
      },
      {
        q: '¿En cuánto tiempo recibo el material final?',
        a: 'Nuestro compromiso de entrega es de 48 horas hábiles después de realizada la sesión de fotos en la propiedad.',
      },
      {
        q: '¿Llegan a todo el país?',
        a: 'Actualmente cubrimos Gran Asunción, proximamente Ciudad del Este y Encarnación. Consultanos por disponibilidad y viáticos para otras zonas de Paraguay.',
      },
      {
        q: '¿Qué estilos de decoración utilizan?',
        a: 'Contamos con catálogos modernos, industriales y clásicos. Seleccionamos el estilo que mejor se adapte al perfil del comprador ideal para esa zona.',
      },
      {
        q: '¿Las fotos sirven para portales y redes sociales?',
        a: 'Sí. Todo el material se entrega en alta resolución para portales y optimizado para Instagram, TikTok y Facebook.',
      },
    ],
    cta: 'Mejorar mi publicación →',
  },
  modal: {
    title: 'Solicitá tu muestra gratis de staging',
    description: 'Enviános las fotos de tu propiedad y crearemos una imagen con staging profesional sin costo. Revisaremos tu solicitud y te contactaremos personalmente para analizar las mejores opciones para tu publicación.',
    closeLabel: 'Cerrar',
    stepIndicator: 'Paso {n} de 4',
    steps: [
      {
        nameLabel: '¿Cuál es tu nombre?',
        namePlaceholder: 'Tu nombre',
        nameError: 'Mínimo 2 caracteres',
        modeLabel: '¿Qué modo preferís?',
        modes: [
          { value: 'Handoff', label: 'Handoff', desc: 'Nos enviás las fotos, te devolvemos el staging' },
          { value: 'Done-for-you', label: 'Done-for-you', desc: 'Nos das acceso al portal y lo editamos por vos · No guardamos credenciales' },
        ],
      },
      {
        emailLabel: '¿Cuál es tu email?',
        emailPlaceholder: 'tu@email.com',
        emailError: 'Email inválido',
        phoneLabel: 'WhatsApp o teléfono (opcional)',
        phonePlaceholder: '+595 981 123 456',
      },
      {
        photoLabel: 'Foto de prueba',
        dropText: 'Haz clic o arrastra una foto',
        dropFormat: 'PNG o JPG · Máx 5 MB',
        photoErrorFormat: 'Solo PNG o JPG',
        photoErrorSize: 'Máximo 5 MB',
      },
      {
        styleLabel: 'Estilo de muestra',
        styles: ['Mediterráneo', 'Manhattan', 'Minimalista'],
        credConsent: 'Entiendo que Zynera usará mis credenciales solo para editar esta publicación y las eliminará al finalizar.',
        privacyConsent: 'Acepto la política de privacidad',
        privacyLink: '(acepto la política de privacidad)',
      },
    ],
    back: 'Atrás',
    next: 'Siguiente',
    submit: 'Solicitar muestra gratis',
    loading: 'Enviando solicitud...',
    success: {
      title: '¡Solicitud recibida!',
      text: 'Recibimos tu solicitud. Te contactaremos pronto para coordinar tu muestra gratis. Si no recibís respuesta en 24 horas, escribinos directo.',
      waCta: 'Escribinos por WhatsApp →',
      waMessage: 'Hola Zynera! Soy {name}. Envié mi solicitud de muestra gratis de staging.',
      newRequest: 'Nueva solicitud',
    },
    error: {
      title: 'Algo salió mal',
      text: 'Intenta de nuevo más tarde.',
      retry: 'Intentar de nuevo',
    },
  },
  footer: {
    tagline: 'Servicio 100% remoto · Todo Paraguay',
    resultados: 'Resultados',
    faq: 'FAQ',
    whatsapp: 'WhatsApp',
    privacidad: 'Privacidad',
    copyright: 'Zynera — Asunción, Paraguay',
  },
  languageSelector: 'Seleccionar idioma',
};
