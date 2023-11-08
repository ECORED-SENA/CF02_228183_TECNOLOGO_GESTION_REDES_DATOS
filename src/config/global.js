export default {
  global: {
    componenteFormativo: 'Implementación de infraestructura tecnológica',
    descripcionCurso:
      'El aprendiz se apropia de los elementos y conceptos de entrada requeridos para la elaboración de la infraestructura tecnológica como componente fundamental en el funcionamiento de cualquier organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Redes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Historia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos básicos y componentes de una red',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Medios de transmisión',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Protocolos de comunicación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Clasificación de redes',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Topologías de redes',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Modelo TCP/IP y OSI',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Tecnología <em>Ethernet</em>',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tecnologías y conceptos básicos de <em>Networking</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño e implementación de la red LAN',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de requerimientos de redes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Cableado estructurado',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Configuración y pruebas de la red',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228183_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3.2 Cableado estructurado',
      referencia:
        'Joskowicz, J. (2013). Cableado Estructurado. Universidad de la República Montevideo, URUGUAY.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo1.pdf',
    },
    {
      tema: '3.3 Configuración y pruebas de la red',
      referencia:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa.',
      tipo: 'E-libro',
      link:
        'https://books.google.es/books?id=RmYvfnMKrsgC&printsec=frontcover#v=onepage&q&f=false',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado: 'dispositivo que añade funcionalidad de red a su equipo.',
    },
    {
      termino: 'Ancho de banda',
      significado:
        'capacidad de transmisión de un dispositivo o red determinado.',
    },
    {
      termino: '<em>Bit</em> (dígito binario)',
      significado: 'la unidad más pequeña de información de una máquina.',
    },
    {
      termino: 'Conmutador',
      significado:
        'dispositivo que es el punto central de conexión de equipos y otros dispositivos de una red, de forma que los datos puedan transmitirse a velocidad de transmisión completa.',
    },
    {
      termino: 'DHCP (Protocolo de configuración dinámica de <em>host</em>)',
      significado:
        'protocolo que permite a un dispositivo de una red, conocido como servidor DHCP, asignar direcciones IP temporales a otros dispositivos de red y normalmente equipos.',
    },
    {
      termino: 'Dirección IP',
      significado:
        'dirección que se utiliza para identificar un equipo o dispositivo en una red.',
    },
    {
      termino: 'Enrutador',
      significado:
        'dispositivo de red que conecta redes múltiples, tales como una red local e Internet.',
    },
    {
      termino: 'Red',
      significado:
        'serie de equipos o dispositivos conectados con el fin de compartir datos, almacenamiento y la transmisión entre usuarios.',
    },
    {
      termino: 'TCP (<em>Transport Control Protocol</em>)',
      significado:
        'un protocolo de red para la transmisión de datos que requiere la confirmación del destinatario de los datos enviados.',
    },
    {
      termino: 'Topología',
      significado: 'distribución física de una red.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cisco Networking Academy. (2016) <em>Introducción a las redes IntroNet6</em>.',
      link: 'https://cisco.cisconexion.com/course/m1-intronet6_es/',
    },
    {
      referencia:
        'Corona, A. E. (2004). <em>Protocolos tcp/ip de internet</em>.',
    },
    {
      referencia:
        'Forouzan, B. A. (2002). <em>Transmisión de datos y redes de comunicaciones</em>.',
    },
    {
      referencia:
        'Moro Vallina, M. (2013). <em>Infraestructuras de redes de datos y sistemas de telefonía</em>. Editorial Paraninfo.',
    },
    {
      referencia:
        'Pérez, E. H. (2003). <em>Tecnologías y redes de transmisión de datos</em>. Editorial Limusa.',
    },
    {
      referencia:
        'Stallings, W., Stallings, W., Tanenbaum, A., Fall, K. R., y Stevens, W. R. (2000). <em>Comunicaciones y Redes de Computadores</em>, 7ª Edición. Pearson Prentice-Hall.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Experto Temático',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Experto Temático',
          centro:
            'Centro de Diseño e innovación tecnológica industrial - Regional Antioquia',
        },
        {
          nombre: 'Claudia López Arboleda',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
