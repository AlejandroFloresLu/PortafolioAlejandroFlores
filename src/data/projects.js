export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Laboral',
    status: 'Producción',
    description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos integrada y panel de administración.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://ecommerce.ejemplo.com',
    caseStudy: {
      whatItDoes: 'Permite a los usuarios explorar productos, agregarlos al carrito y realizar pagos seguros de forma electrónica, mientras que los administradores pueden gestionar el inventario a través de un panel privado.',
      whatItSolves: 'Centraliza las ventas físicas en un entorno digital automatizado, reduciendo la fricción en el proceso de compra y mejorando el seguimiento de métricas de ventas.',
      context: 'Desarrollado como proyecto freelance para "Boutique XYZ", una tienda local que necesitaba expandir sus ventas a nivel nacional durante la temporada alta de fin de año.'
    }
  },
  {
    id: 2,
    title: 'Dashboard Analítico',
    category: 'Académico',
    status: 'En Desarrollo',
    description: 'Sistema de visualización de datos en tiempo real para análisis de métricas de usuario y ventas, utilizando gráficos interactivos.',
    tags: ['Vue.js', 'Python', 'FastAPI', 'MongoDB'],
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    liveUrl: null,
    caseStudy: {
      whatItDoes: 'Se conecta a bases de datos en tiempo real y procesa altos volúmenes de información para generar reportes, alertas y visualizaciones en gráficos interactivos.',
      whatItSolves: 'Evita la creación manual de reportes en Excel, automatizando la ingesta de datos y proporcionando insights inmediatos sobre el rendimiento del negocio.',
      context: 'Proyecto de tesis universitaria (desarrollo activo). La idea surgió al notar la falta de herramientas analíticas accesibles de código abierto para PYMES en mi región.'
    }
  },
  {
    id: 3,
    title: 'Generador de Paletas',
    category: 'Personal',
    status: 'Hobby',
    description: 'Herramienta para diseñadores que genera combinaciones de colores accesibles y permite exportarlas en diferentes formatos.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://palettes.ejemplo.com',
    caseStudy: {
      whatItDoes: 'Genera algoritmicamente esquemas de color (análogos, complementarios, triádicos) y valida el contraste de los colores bajo estándares WCAG.',
      whatItSolves: 'Agiliza el proceso de diseño al crear combinaciones visualmente armónicas sin tener que probar colores manualmente, garantizando además la accesibilidad web.',
      context: 'Creado por pura curiosidad y pasión por el diseño UI/UX. Lo utilizo personalmente para iniciar rápidamente el diseño visual de mis proyectos de frontend.'
    }
  }
];
