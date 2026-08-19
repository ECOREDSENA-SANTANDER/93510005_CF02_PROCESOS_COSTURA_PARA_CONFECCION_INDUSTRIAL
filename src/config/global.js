export default {
  global: {
    Name: 'Procesos de costura y terminados',
    Description:
      'El componente formativo procesos de costura y terminados aborda los fundamentos técnicos necesarios para ejecutar y controlar operaciones de ensamble, costura industrial, ruta operacional y revisión de calidad en prendas de vestir. Sus contenidos integran la unión de piezas, costuras rectas y curvas, cierres, dobladillos, pespuntes, refuerzos, operaciones especializadas, tiempos básicos, flujo de producción y parámetros de acabado, con el propósito de fortalecer la comprensión del proceso productivo en confección industrial.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.svg',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-5.svg',
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
        titulo: 'Técnicas de costura industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Costuras industriales básicas y de seguridad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Operaciones especializadas: presillado, pegado de botón, ojal y bordado básico',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Operaciones de ensamble en confección industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Unión de piezas y control del ensamble',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Costuras rectas, curvas, cierres y dobladillos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Pespuntes, refuerzos y terminaciones funcionales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ruta operacional en confección industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Secuencia de operaciones y orden de ensamble',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tiempos básicos y flujo de producción',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Relación entre ruta operacional, eficiencia y continuidad del proceso',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Parámetros de calidad en confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Simetría, limpieza y funcionalidad de la prenda',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Precisión del acabado y cumplimiento de especificaciones técnicas',
            hash: 't_4_2',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Acabado',
      significado:
        'conjunto de operaciones finales aplicadas a la prenda para mejorar su presentación, estabilidad, limpieza y correspondencia con las especificaciones técnicas.',
    },
    {
      termino: 'Bordado básico',
      significado:
        'operación especializada que aplica formas, textos, logotipos o detalles ornamentales sobre una superficie textil mediante puntadas controladas.',
    },
    {
      termino: 'Costura de seguridad',
      significado:
        'unión reforzada que permite ensamblar piezas y proteger bordes, especialmente en zonas sometidas a tensión, fricción o uso frecuente.',
    },
    {
      termino: 'Costura recta',
      significado:
        'puntada lineal continúa utilizada para unir piezas, fijar componentes, elaborar pinzas, realizar pespuntes o desarrollar dobladillos.',
    },
    {
      termino: 'Dobladillo',
      significado:
        'terminación de borde realizada mediante uno o varios dobleces del material, fijados con costura para aportar presentación, resistencia y estabilidad.',
    },
    {
      termino: 'Ensamble',
      significado:
        'proceso mediante el cual las piezas cortadas de una prenda se integran de forma ordenada hasta conformar el producto confeccionado.',
    },
    {
      termino: 'Especificaciones técnicas',
      significado:
        'conjunto de datos definidos en la ficha técnica sobre medidas, materiales, puntadas, costuras, acabados, insumos y presentación final del producto.',
    },
    {
      termino: 'Fileteado',
      significado:
        'técnica de costura utilizada para recubrir o asegurar bordes textiles, con el fin de reducir el deshilachado y mejorar la terminación interna.',
    },
    {
      termino: 'Flujo de producción',
      significado:
        'recorrido organizado de piezas, insumos y prendas entre los puestos de trabajo, de acuerdo con la secuencia operacional definida.',
    },
    {
      termino: 'Ojal',
      significado:
        'abertura terminada que permite el paso del botón y forma parte del sistema de cierre de una prenda.',
    },
    {
      termino: 'Pegado de botón',
      significado:
        'operación especializada que fija botones a la prenda mediante puntadas controladas, garantizando alineación, firmeza y funcionalidad.',
    },
    {
      termino: 'Pespunte',
      significado:
        'costura visible o controlada que puede cumplir funciones de fijación, refuerzo, asentamiento o acabado decorativo.',
    },
    {
      termino: 'Presillado',
      significado:
        'operación de refuerzo concentrado aplicada en puntos de tensión, como bolsillos, pasadores, aberturas, cierres o cargaderas.',
    },
    {
      termino: 'Ruta operacional',
      significado:
        'secuencia técnica que organiza las operaciones necesarias para confeccionar una prenda, indicando orden, maquinaria, tiempos y puntos de control.',
    },
    {
      termino: 'Simetría',
      significado:
        'correspondencia entre partes relacionadas de una prenda, como mangas, bolsillos, delanteros, costados, ruedos, puños o pretinas.',
    },
  ],
  referencias: [
    {
      referencia: 'Gilewska, T. (2009). Patronaje: Las bases. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: an introduction to fashion studies. Berg.',
      link: '',
    },
    {
      referencia:
        'Lorenzo, M. R. (2017). Patronaje industrial en textil y piel. Videocinco.',
      link: '',
    },
    {
      referencia:
        'Nakamichi, T. (2012). Pattern magic, vol. 1: la magia del patronaje. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2011). Manual de patronaje básico e interpretación de diseños. Regional Distrito Capital, Centro de Manufactura en Textiles y Cuero.',
      link: '',
    },
    {
      referencia:
        'Smith, A. (2014). El gran libro de la costura (Nueva ed.). Blume.',
      link: '',
    },
    {
      referencia:
        'Smith, A. (2023). Corte y confección: Prendas de vestir a medida. DK.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta Temática',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
