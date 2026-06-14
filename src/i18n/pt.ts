export default {
  lang: 'pt',
  label: 'Português',
  meta: {
    title: 'Zynera | Staging Digital e Marketing Imobiliário Premium',
    description: 'Transformamos propriedades em anúncios profissionais que geram mais interesse usando staging digital e fotografia profissional no Paraguai.',
  },
  layout: {
    skipToContent: 'Ir para o conteúdo principal',
  },
  header: {
    servicios: 'Serviços',
    proceso: 'Processo',
    resultados: 'Resultados',
    faq: 'FAQ',
    cta: 'Melhorar meu anúncio →',
    whatsapp: 'WhatsApp',
  },
  hero: {
    h1: 'Aumente o valor percebido de cada propriedade.',
    p: 'Fotos melhoradas, texto sem erros e ambientes decorados digitalmente em 24 horas — para que sua propriedade venda sozinha.',
    cta: 'Melhorar meu anúncio →',
  },
  comparison: {
    heading: 'Veja o impacto',
    original: 'Original',
    staging: 'Staging',
    styles: ['Mediterrâneo', 'Manhattan', 'Minimalista'],
  },
  features: {
    heading: 'Por que o marketing visual importa',
    p: 'Em um mercado saturado, a primeira impressão é digital. Não deixe que uma foto ruim pare sua venda.',
    cards: [
      {
        icon: '👁️',
        title: 'A primeira impressão é digital',
        text: 'A maioria dos compradores começa nos portais. Se a foto não impacta hoje, provavelmente não haverá visita amanhã.',
      },
      {
        icon: '⏱️',
        title: 'Mais consultas, menos tempo no mercado',
        text: 'Vimos que propriedades com staging digital recebem mais consultas e tendem a vender mais rápido que aquelas com fotos comuns.',
      },
      {
        icon: '⭐',
        title: 'Captações com exclusividade',
        text: 'Oferecer marketing visual premium posiciona você como um agente de elite, facilitando a assinatura de novas exclusividades.',
      },
    ],
  },
  pricing: {
    heading: 'Escolha seu modo',
    p: 'Duas formas de melhorar seu anúncio. Sem visitas, sem fotógrafo.',
    cards: [
      {
        name: 'BÁSICO',
        price: '$49',
        per: '/ propriedade',
        features: [
          'Nos envie as fotos ou baixamos do portal',
          'Corrigimos cor, luz e nitidez',
          'Mobiliamos virtualmente a propriedade',
          'Reescrevemos a descrição',
          'Recebe o ZIP pronto para publicar',
        ],
      },
      {
        name: 'EMPRESARIAL',
        price: '$79',
        per: '/ propriedade',
        popular: true,
        features: [
          'Nos dê acesso ao portal',
          'Corrigimos cor, luz e nitidez',
          'Mobiliamos virtualmente a propriedade',
          'Reescrevemos a descrição',
          'Editamos o anúncio completo',
        ],
      },
    ],
    popularBadge: 'RECOMENDADO',
    paymentNote: 'Pague em guarani ou transferência · Consulte sobre combos de 3+ propriedades',
    cta: 'Melhorar meu anúncio →',
    coldStart: {
      title: '★ Primeira vez? Seu primeiro anúncio é grátis.',
      desc: 'Vaga limitada às primeiras 10 agências. Consulte pelo WhatsApp sem compromisso.',
      cta: 'Solicitar →',
      referral: '💰 Tem colegas? Para cada agência indicada, ganhe 10% de desconto no seu próximo serviço.',
    },
  },
  process: {
    heading: 'Sua propriedade pronta em 3 passos',
    p: 'Sem visitas, sem fotógrafo. Tudo pelo WhatsApp ou portal.',
    steps: [
      {
        title: 'Envie seu anúncio',
        text: 'Nos envie as fotos que você já tem ou o link do portal. Também pode compartilhar o acesso.',
      },
      {
        title: 'Melhoramos',
        text: 'Corrigimos cor, luz e nitidez. Reescrevemos o texto. Decoramos ambientes digitalmente.',
      },
      {
        title: 'Recebe',
        text: 'Devolvemos o ZIP pronto para publicar ou editamos o portal diretamente para você.',
      },
    ],
  },
  faq: {
    heading: 'Perguntas Frequentes',
    items: [
      {
        q: 'Preciso mover móveis ou decorar a propriedade?',
        a: 'Não é necessário. Nós capturamos o espaço como está e depois realizamos a decoração virtual sobre a imagem real na pós-produção.',
      },
      {
        q: 'Em quanto tempo recebo o material final?',
        a: 'Nosso compromisso de entrega é de 48 horas úteis após a sessão de fotos na propriedade.',
      },
      {
        q: 'Atendem todo o país?',
        a: 'Atualmente cobrimos Grande Assunção, em breve Ciudad del Este e Encarnación. Consulte sobre disponibilidade para outras áreas do Paraguai.',
      },
      {
        q: 'Quais estilos de decoração vocês usam?',
        a: 'Temos catálogos modernos, industriais e clássicos. Selecionamos o estilo que melhor se adapta ao perfil do comprador ideal para aquela área.',
      },
      {
        q: 'As fotos servem para portais e redes sociais?',
        a: 'Sim. Todo o material é entregue em alta resolução para portais e otimizado para Instagram, TikTok e Facebook.',
      },
    ],
    cta: 'Melhorar meu anúncio →',
  },
  modal: {
    title: 'Melhorar meu anúncio',
    closeLabel: 'Fechar',
    stepIndicator: 'Passo {n} de 4',
    steps: [
      {
        nameLabel: 'Qual é seu nome?',
        namePlaceholder: 'Seu nome',
        nameError: 'Mínimo 2 caracteres',
        modeLabel: 'Qual modo prefere?',
        modes: [
          { value: 'Handoff', label: 'Handoff — $49', desc: 'Você envia fotos, devolvemos o ZIP' },
          { value: 'Done-for-you', label: 'Done-for-you — $79', desc: 'Nos dê acesso ao portal e editamos para você · Não armazenamos credenciais' },
        ],
      },
      {
        emailLabel: 'Qual é seu email?',
        emailPlaceholder: 'seu@email.com',
        emailError: 'Email inválido',
        phoneLabel: 'WhatsApp ou telefone (opcional)',
        phonePlaceholder: '+595 981 123 456',
      },
      {
        photoLabel: 'Foto de teste',
        dropText: 'Clique ou arraste uma foto',
        dropFormat: 'PNG ou JPG · Máx 5 MB',
        photoErrorFormat: 'Apenas PNG ou JPG',
        photoErrorSize: 'Máximo 5 MB',
      },
      {
        styleLabel: 'Estilo desejado',
        styles: ['Mediterrâneo', 'Manhattan', 'Minimalista'],
        credConsent: 'Entendo que a Zynera usará minhas credenciais apenas para editar este anúncio e as excluirá ao finalizar.',
        privacyConsent: 'Aceito a política de privacidade',
        privacyLink: '(aceito a política de privacidade)',
      },
    ],
    back: 'Voltar',
    next: 'Próximo',
    submit: 'Enviar solicitação',
    loading: 'Enviando solicitação...',
    success: {
      title: 'Solicitação enviada!',
      text: 'Recebemos sua solicitação. Enviaremos uma mensagem no WhatsApp em até 2 horas. Se não receber resposta, fale conosco diretamente.',
      waCta: 'Fale conosco no WhatsApp →',
      waMessage: 'Olá Zynera! Sou {name}. Quero contratar o plano {mode} para melhorar meu anúncio.',
      newRequest: 'Nova solicitação',
    },
    error: {
      title: 'Algo deu errado',
      text: 'Tente novamente mais tarde.',
      retry: 'Tentar novamente',
    },
  },
  footer: {
    tagline: 'Serviço 100% remoto · Todo o Paraguai',
    resultados: 'Resultados',
    faq: 'FAQ',
    whatsapp: 'WhatsApp',
    privacidad: 'Privacidade',
    copyright: 'Zynera — Assunção, Paraguai',
  },
  languageSelector: 'Selecionar idioma',
};
