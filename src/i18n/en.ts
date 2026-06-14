export default {
  lang: 'en',
  label: 'English',
  meta: {
    title: 'Zynera | Digital Staging & Premium Real Estate Marketing',
    description: 'We turn properties into professional listings that generate more interest using digital staging and professional photography in Paraguay.',
  },
  layout: {
    skipToContent: 'Skip to main content',
  },
  header: {
    homeLabel: 'Zynera Home',
    whatsappUrl: 'https://wa.me/595981123456?text=Hi%20Zynera!%20I%27d%20like%20information%20about%20your%20digital%20staging%20services.',
    servicios: 'Services',
    proceso: 'Process',
    resultados: 'Results',
    faq: 'FAQ',
    cta: 'Improve my listing →',
    whatsapp: 'WhatsApp',
  },
  hero: {
    h1: 'Increase the perceived value of every property.',
    p: 'Enhanced photos, error-free text, and virtually staged rooms in 24 hours — so your property sells itself.',
    cta: 'Improve my listing →',
  },
  comparison: {
    heading: 'See the impact',
    original: 'Original',
    staging: 'Staging',
    styles: ['Mediterranean', 'Manhattan', 'Minimalist'],
  },
  features: {
    heading: 'Why visual marketing matters',
    p: 'In a crowded market, the first impression is digital. Do not let a bad photo stop your sale.',
    cards: [
      {
        icon: '👁️',
        title: 'First impressions are digital',
        text: 'Most buyers start on portals. If the photo does not impress today, there likely will not be a visit tomorrow.',
      },
      {
        icon: '⏱️',
        title: 'More inquiries, less time on market',
        text: 'We have seen that properties with digital staging receive more inquiries and tend to sell faster than those with ordinary photos.',
      },
      {
        icon: '⭐',
        title: 'Win exclusive listings',
        text: 'Offering premium visual marketing positions you as an elite agent, making it easier to sign new exclusivity agreements.',
      },
    ],
  },
  pricing: {
    heading: 'Choose your mode',
    p: 'Two ways to improve your listing. No visits, no photographer.',
    cards: [
      {
        name: 'BASIC',
        price: '$49',
        per: '/ property',
        features: [
          'Send us your photos or we download them from the portal',
          'We correct color, light and sharpness',
          'We virtually furnish the property',
          'We rewrite the description',
          'You get the ZIP ready to publish',
        ],
      },
      {
        name: 'BUSINESS',
        price: '$79',
        per: '/ property',
        popular: true,
        features: [
          'Give us portal access',
          'We correct color, light and sharpness',
          'We virtually furnish the property',
          'We rewrite the description',
          'We edit the complete listing',
        ],
      },
    ],
    popularBadge: 'RECOMMENDED',
    paymentNote: 'Pay in guaraníes or bank transfer · Ask about bundles for 3+ properties',
    cta: 'Improve my listing →',
    coldStart: {
      title: '★ First time? Your first listing is free.',
      desc: 'Limited to the first 10 agencies. Ask on WhatsApp with no commitment.',
      cta: 'Claim now →',
      waUrl: 'https://wa.me/595981123456?text=Hi%20Zynera!%20I%20want%20to%20claim%20my%20free%20first%20listing.',
      referral: '💰 Know colleagues? For each agency you refer, get 10% off your next service.',
    },
  },
  process: {
    heading: 'Your property ready in 3 steps',
    p: 'No visits, no photographer. Everything via WhatsApp or portal.',
    steps: [
      {
        title: 'Send your listing',
        text: 'Send us the photos you already have or the portal link. You can also share access.',
      },
      {
        title: 'We improve it',
        text: 'We correct color, light and sharpness. We rewrite the text. We digitally decorate rooms.',
      },
      {
        title: 'You receive it',
        text: 'We return the ZIP ready to publish or edit the portal directly for you.',
      },
    ],
  },
  faq: {
    heading: 'Frequently Asked Questions',
    items: [
      {
        q: 'Do I need to move furniture or decorate the property?',
        a: 'No. We capture the space as it is and then do virtual decoration on the actual image in post-production.',
      },
      {
        q: 'How long does it take to get the final material?',
        a: 'Our delivery commitment is 48 business hours after the photo session at the property.',
      },
      {
        q: 'Do you cover the whole country?',
        a: 'We currently cover Greater Asunción, soon Ciudad del Este and Encarnación. Ask about availability for other areas of Paraguay.',
      },
      {
        q: 'What decoration styles do you use?',
        a: 'We have modern, industrial and classic catalogs. We select the style that best fits the ideal buyer profile for that area.',
      },
      {
        q: 'Are the photos suitable for portals and social media?',
        a: 'Yes. All material is delivered in high resolution for portals and optimized for Instagram, TikTok and Facebook.',
      },
    ],
    cta: 'Improve my listing →',
  },
  modal: {
    title: 'Get a Free Virtual Staging Sample',
    description: 'Send us your property photos and we\'ll create one professionally staged image at no cost. We\'ll review your request and contact you personally to discuss the best options for your listing.',
    closeLabel: 'Close',
    stepIndicator: 'Step {n} of 4',
    steps: [
      {
        nameLabel: 'What is your name?',
        namePlaceholder: 'Your name',
        nameError: 'Minimum 2 characters',
        modeLabel: 'Which mode do you prefer?',
        modes: [
          { value: 'Handoff', label: 'Basic', desc: 'You send photos, we return the staging' },
          { value: 'Done-for-you', label: 'Business', desc: 'Give us portal access and we edit it for you · We do not store credentials' },
        ],
      },
      {
        emailLabel: 'What is your email?',
        emailPlaceholder: 'you@email.com',
        emailError: 'Invalid email',
        phoneLabel: 'WhatsApp or phone (optional)',
        phonePlaceholder: '+595 981 123 456',
      },
      {
        photoLabel: 'Sample photo',
        dropText: 'Click or drag a photo',
        dropFormat: 'PNG or JPG · Max 5 MB',
        photoErrorFormat: 'PNG or JPG only',
        photoErrorSize: 'Maximum 5 MB',
      },
      {
        styleLabel: 'Sample style',
        styles: ['Mediterranean', 'Manhattan', 'Minimalist'],
        credConsent: 'I understand that Zynera will use my credentials only to edit this listing and will delete them upon completion.',
        privacyConsent: 'I accept the privacy policy',
        privacyLink: '(read the privacy policy)',
      },
    ],
    back: 'Back',
    next: 'Next',
    submit: 'Request Free Sample',
    loading: 'Sending request...',
    success: {
      title: 'Request received!',
      text: 'We received your request. We\'ll contact you soon to coordinate your free sample. If you don\'t hear back within 24 hours, message us directly.',
      waCta: 'Message us on WhatsApp →',
      waMessage: 'Hi Zynera! I\'m {name}. I sent my free staging sample request.',
      newRequest: 'New request',
    },
    error: {
      title: 'Something went wrong',
      text: 'Please try again later.',
      retry: 'Try again',
    },
  },
  footer: {
    tagline: '100% remote service · All Paraguay',
    resultados: 'Results',
    faq: 'FAQ',
    whatsapp: 'WhatsApp',
    privacidad: 'Privacy',
    copyright: 'Zynera — Asunción, Paraguay',
  },
  languageSelector: 'Select language',
};
