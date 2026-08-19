<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Operaciones de ensamble en confección industrial

    .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        p.mb-0 El ensamble en confección industrial comprende las operaciones mediante las cuales las piezas cortadas de una prenda se integran de forma ordenada hasta conformar un producto terminado. Este proceso articula criterios de precisión, secuencia, manejo del material, control de márgenes, estabilidad de las costuras y correspondencia con las especificaciones técnicas definidas para cada referencia.
        br
        br
        p.mb-0 La eficiencia del ensamble depende de la correcta relación entre diseño, patronaje, corte, maquinaria, tipo de puntada, habilidad operativa y ruta de producción. Una pieza bien cortada puede perder calidad si el ensamble no conserva simetría, tensión adecuada, alineación y limpieza en la unión. Por esta razón, el proceso requiere control permanente desde las primeras operaciones hasta las terminaciones finales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(src='@/assets/curso/tema2/2.png')
      .col-lg-4.pe-lg-0.d-none.d-lg-block
        img.img-t(src='@/assets/curso/tema2/3.svg')
      .col-lg-4.ps-lg-0
        .bg2.p-4.mb-0
          h4.mb-0.mx-lg-3.my-lg-3 Función del ensamble en la prenda
        .bg3.p-4
          p.mb-0.mx-lg-3.my-lg-2 El ensamble convierte piezas independientes en una estructura textil funcional. Su calidad no depende únicamente de unir partes, sino de mantener proporciones, respetar marcas de confección, conservar medidas, proteger zonas de tensión y asegurar que la prenda responda al diseño aprobado en la ficha técnica.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Aspectos principales de ensamble
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .tabla-a.tab4.mb-0
          table
            thead
              tr
                th Aspecto del ensamble
                th Función en producción
                th Incidencia en la prenda
            tbody
              tr
                td Orden de unión
                td Organiza la secuencia en que se integran las piezas.
                td Evita reprocesos y facilita la continuidad de la confección.
              tr
                td Control de margen
                td Mantiene la distancia establecida entre el borde y la línea de costura.
                td Conserva medidas, ajuste y simetría del producto.
              tr
                td Manejo del material
                td Regula tensión, desplazamiento y manipulación del textil durante la operación.
                td Previene elongaciones, fruncidos, torcidos o deformaciones.
              tr
                td Correspondencia entre piezas
                td Relaciona marcas, piquetes, centros y puntos de referencia.
                td Garantiza alineación entre delanteros, espaldas, mangas, cuellos y demás partes.
              tr
                td Revisión durante proceso
                td Identifica fallas antes de avanzar a operaciones posteriores.
                td Reduce acumulación de defectos y disminuye reprocesos.
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(src='@/assets/curso/tema2/4.png')

    p.mb-0(data-aos="fade-left") El ensamble constituye una fase determinante para la calidad final, porque conecta la información técnica del diseño con la ejecución real en planta. Una operación inicial mal ejecutada puede afectar operaciones posteriores, alterar medidas o comprometer la apariencia y funcionalidad del producto terminado.

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Unión de piezas y control del ensamble

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/5.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La unión de piezas es la operación que permite integrar los componentes textiles de una prenda siguiendo marcas, piquetes, márgenes, sentido del hilo, referencias de patrón y orden definido en la ruta operacional. Esta fase exige precisión porque cada pieza cumple una función específica dentro de la estructura general del producto.
            br
            br
            p.mb-0 El control del ensamble inicia con la verificación de piezas completas, correspondencia entre tallas, identificación de derecho y revés del material, coincidencia de marcas y revisión de posibles defectos del corte. Posteriormente, durante la unión, se regulan la tensión del hilo, la longitud de puntada, el margen de costura y la alineación de las piezas. Estas variables permiten conservar uniformidad entre unidades producidas.
    
    p.mb-5(data-aos="fade-right") En productos industriales, el ensamble no se ejecuta de forma aislada. Cada operación depende de la anterior y prepara la siguiente. La unión de hombros, costados, mangas, cuellos, pretinas, bolsillos o piezas internas requiere una secuencia coherente para evitar acumulación de volumen, dificultad de manipulación o pérdida de forma.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/6.png')
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Elementos de control en el proceso de ensamble
        .tabla-a.tab5.mb-0
          table
            thead
              tr
                th Elemento de control
                th Descripción técnica
                th Resultado esperado
            tbody
              tr
                td Identificación de piezas
                td Verificación de talla, referencia, orientación y cantidad de partes cortadas.
                td Piezas completas y correctamente organizadas antes de iniciar la confección.
              tr
                td Coincidencia de marcas
                td Alineación de piquetes, centros, aplomos, costuras y puntos de ensamble.
                td Unión precisa entre piezas relacionadas.
              tr
                td Margen de costura
                td Distancia técnica entre el borde del material y la línea de puntada.
                td Medidas finales acordes con la ficha técnica.
              tr
                td Sentido del material
                td Control de dirección del tejido, elasticidad, pelo, estampado o textura.
                td Apariencia uniforme y comportamiento correcto de la prenda.
              tr
                td Tensión de arrastre
                td Manejo equilibrado del material al pasar por la máquina.
                td Ausencia de ondulaciones, estiramientos o fruncidos no previstos.
              tr
                td Revisión intermedia
                td Inspección de la operación antes de continuar el flujo productivo.
                td Detección temprana de fallas y reducción de reprocesos.

    .cajon.color-acento-b.p-4.mb-0(data-aos="fade-right")
      h4.mb-3 Nota
      p.mb-0 La unión de piezas requiere especial atención en materiales elásticos, telas livianas, tejidos con dirección, cuadros, rayas o estampados continuos. En estos casos, el control de alineación y arrastre adquiere mayor importancia para evitar diferencias perceptibles entre las partes de la prenda.

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Costuras rectas, curvas, cierres y dobladillos

    .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/7.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        p.mb-0 Las costuras rectas, curvas, la instalación de cierres y la elaboración de dobladillos corresponden a operaciones frecuentes dentro del ensamble de prendas. Cada una presenta requerimientos diferentes en cuanto a manejo del material, recorrido de costura, precisión, control de tensión y acabado.
        br
        br
        p.mb-0 La costura recta se utiliza en uniones lineales, fijación de piezas, pespuntes, pinzas y dobladillos. Su ejecución requiere mantener una trayectoria constante y un margen uniforme. La costura curva, en cambio, aparece en sisas, escotes, tiros, copas de manga, ruedos circulares y piezas anatómicas; su control exige desplazamiento gradual del material para evitar quiebres, frunces o deformaciones en la línea de unión.

    p.mb-5(data-aos="fade-right") La instalación de cierres incorpora un componente funcional al producto. Esta operación requiere correspondencia entre la longitud del cierre, la abertura de la prenda, la ubicación de topes, la simetría entre lados y la limpieza del pespunte. Los dobladillos, por su parte, permiten finalizar bordes inferiores o laterales mediante dobleces controlados que aportan presentación, resistencia y protección del material.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | Operaciones de costura y su aplicación
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Operación
                th Aplicación principal
                th Control técnico requerido
                th Defecto frecuente por controlar
            tbody
              tr
                td Costura recta
                td Uniones lineales, pinzas, pespuntes, fijación de piezas y dobladillos.
                td Margen constante, puntada regular y trayectoria alineada.
                td Desviación de línea, puntada saltada o margen irregular.
              tr
                td Costura curva
                td Sisas, escotes, tiros, copas de manga, ruedos circulares y cortes anatómicos.
                td Giro progresivo del material, control de arrastre y conservación de la forma.
                td Fruncidos, picos, deformaciones o tensión excesiva.
              tr
                td Instalación de cierre
                td Aberturas en pantalones, faldas, vestidos, chaquetas, bolsos o prendas funcionales.
                td Simetría, fijación estable, largo correcto y pespunte limpio.
                td Cierre torcido, ondas, desalineación o dificultad de funcionamiento.
              tr
                td Dobladillo
                td Terminación de ruedos, mangas, bajos, aberturas o bordes externos.
                td Ancho uniforme, doblez estable y costura paralela al borde.
                td Ondulación, torcido, medida variable o arrastre del material.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-4.pe-lg-0
        .bg2.p-4.mb-0
          h4.mb-0.mx-lg-3.my-lg-0 Relación entre operación y tipo de prenda
        .bg3.p-4
          p.mb-0.mx-lg-2.my-lg-2.mt-lg-4 En una camisa, las costuras rectas participan en costados, hombros y pespuntes; las curvas aparecen en cuello y sisa; los cierres pueden estar representados por botones y ojales; los dobladillos finalizan ruedos y mangas. En un pantalón, las costuras rectas estructuran laterales y entrepierna; las curvas se presentan en tiro y bolsillos; el cierre define funcionalidad de acceso; el dobladillo ajusta el largo final.
      .col-lg-4.ps-lg-0.d-none.d-lg-block
        img.img-t(src='@/assets/curso/tema2/9.svg')
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(src='@/assets/curso/tema2/8.png')

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Pespuntes, refuerzos y terminaciones funcionales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/10.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema2/11.svg')
          .col-lg-10
            p.mb-0 Al finalizar o asegurar determinadas zonas de la prenda, intervienen operaciones que aportan estabilidad, definición y resistencia. Entre ellas se encuentran los pespuntes, los refuerzos y las terminaciones funcionales, elementos que complementan el ensamble principal y elevan la calidad técnica del producto.
        p.mb-4 El pespunte corresponde a una costura visible o controlada que puede cumplir función de fijación, asentamiento, refuerzo o acabado decorativo. Se emplea en cuellos, puños, pretinas, bolsillos, tapas, vistas, cierres, cortes y bordes. Su regularidad influye en la apariencia final, debido a que suele quedar expuesto en la superficie del producto.
        p.mb-0 Los refuerzos se aplican en puntos sometidos a tensión, fricción o uso repetido. Pueden realizarse mediante presillas, doble costura, entretelas, remates, parches internos, costuras adicionales o materiales de soporte. Su propósito consiste en evitar rupturas, deformaciones o desprendimientos durante el uso de la prenda.

    .cajon.color-acento-b.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Las terminaciones funcionales protegen bordes, estabilizan aberturas, mejoran el contacto con el cuerpo y facilitan el uso del producto. En esta categoría se incluyen remates, vistas, sesgos, vivos, ruedos, atraques, acabados internos y soluciones constructivas que aseguran limpieza, comodidad y durabilidad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 7.
          | Recursos técnicos y su función en las prendas
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Recurso técnico
                th Función dentro de la prenda
                th Aplicación habitual
                th Criterio de revisión
            tbody
              tr
                td Pespunte
                td Fijar, asentar, decorar o reforzar una línea de costura.
                td Cuellos, puños, bolsillos, tapas, pretinas, cierres y bordes.
                td Distancia uniforme, hilo limpio, línea continua y tensión equilibrada.
              tr
                td Refuerzo
                td Aumentar resistencia en zonas sometidas a esfuerzo.
                td Pasadores, bolsillos, entrepierna, aberturas, cierres y cargaderas.
                td Ubicación precisa, firmeza, densidad adecuada y ausencia de hilos sueltos.
              tr
                td Terminación con vista
                td Cubrir internamente bordes o aberturas con una pieza adicional.
                td Escotes, sisas, delanteros, chaquetas y prendas formales.
                td Asentamiento correcto, simetría y limpieza interna.
              tr
                td Terminación con sesgo
                td Proteger bordes mediante una tira textil aplicada sobre el contorno.
                td Escotes, sisas, ruedos, lencería, prendas livianas y acabados decorativos.
                td Cobertura regular, curvas limpias y fijación estable.
              tr
                td Ruedo o bajo
                td Finalizar el borde inferior de la prenda.
                td Pantalones, faldas, vestidos, mangas, camisas y chaquetas.
                td Ancho constante, caída uniforme y ausencia de torsión.
              tr
                td Remate de costura
                td Asegurar el inicio o final de una costura para evitar desprendimiento.
                td Costados, pinzas, pespuntes, bolsillos y uniones estructurales.
                td Puntada firme, remate discreto y conservación de la apariencia.
        
    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-left")
      h4.mb-3 Nota
      p.mb-0 Los pespuntes y terminaciones visibles requieren revisión más estricta porque forman parte de la presentación externa del producto. Los refuerzos, aunque en algunos casos permanecen en zonas internas, inciden directamente en la resistencia y vida útil de la prenda.
    
    p.mb-5(data-aos="fade-right") A continuación, se invita a seguir el proceso completo de confección de una camisa, pantalón sudadera y #[b montaje de cremallera, en los que podrá observar el paso a paso:]

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Blusa camisera

    .row.fondo1.p-5.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/nDQqLI5_VPo?si=ak_w4Du8_E6KAoxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 1 Alistamiento para la confección de la blusa camisera
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/jwt4avwp6y0?si=rbhzry7RV4iMT4XB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 2 Preparar cuello
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/vxmsXHHBXWc?si=hTst272ahT-qEAeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 3 Preparar manga coser portañuela preparar puños
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/8zurivBBOsE?si=-OV-UL3harT4CLEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 4 Preparar delantero coser pinzas pespuntar pechera
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/Vde63W5SJVA?si=LxLB8H_77xZPO9ia" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 5 Preparar posterior coser pinzas
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/gHQJfaPkahw?si=aiRIqkxRFl6-8hVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 6 Unir por hombros
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/0aF-nOKG1tA?si=KU_OPcbDPQA9dXWC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 7 Pespuntar hombros
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/-r-B9BBPN4k?si=ynsAyWeS4Od1x4zp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 8 Pegar cuello
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/-fYx-VI0_tE?si=6t-uZyRx6Jvqu1pZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 9 Pespuntar cuello
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/qOpxd29hxko?si=dVsX9mpCEiQcAMhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 10 Pegar mangas
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/L2Tv-blhRnM?si=lM8Nnnff3ZyI6Xlx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 11 Pespuntar mangas
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/gOtAib9rMwQ?si=lsrahldkcjNPB-M9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 12 Cerrar costados
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/budtB_UPjtU?si=aHhSNdQFpbQ0XoWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 13 Pegar puño
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/xnaxcqqKfTw?si=2O7FSLi8Epwl4cM7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 14 Pespuntar puño
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/pTroSaIBKDs?si=F1XsiqnawcMtg0dA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 15 Dobladillar ruedo
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/LemTAGq3BwI?si=sxVMwkPyZimMY2iX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 16 Marcar ojales y ojalar
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/Zwx_QULWajg?si=hG0cGoiv6leLn6Gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 17 Marcar botones y botonar
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/azhymYdHJBw?si=GgCMc8AO5cfdHXNm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección blusa camisera Paso 18 Limpiar, revisar y planchar

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Pantalón sudadera

    .row.fondo1.p-5.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/G-cwBVckDq4?si=vYYAE3wRqaaCC0yb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 1 Alistamiento para confección de pantalón de sudadera 
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/uuWDflzDFGA?si=7u98FfGBiFVj7Vta" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 2 Medir, cortar, coser elástico y marcar cuartas partes de e
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/Zwfp0oWJftk?si=EpAvbWEXPYApQ_5X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 3 Coser bolsillos laterales
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/Mie5EoCZVMw?si=gU8f6OwUTA701Oux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 4 Filetear bolsillos
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/9A3TteZcgno?si=W3l1MQ1RJpNUC8Q_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 5 Unir costados incluyendo sesgo de embone 
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/9ph3Sel-9Bs?si=HWuTVFTUPh2l8jlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 6 Filetear costado
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/79XxGyuhmQg?si=UMvYaej9C_oYTRQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 7 Unir por entrepierna
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/MriPZnacsDI?si=1C3wwpTak5-hy43o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 8 Unir tiros
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/Eg9HQYZVyKA?si=q5vWgLr2mKQVfilj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 9 Fijar elástico
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/0qf5jZGpnZo?si=UbgZ_7VKV2Zz5Wrr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 10 Dobladillar botas
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/qVoGjoahb7g?si=BWIwrqiX-6fGOGwZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 11 Sentar elástico
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/_ubzS_tkjNE?si=Zgpmjjvi5Uq3y_UD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Video. Confección pantalón de sudadera Paso 12 Limpiar y revisar prenda

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Proceso de montaje de cremallera

    .row.justify-content-center.align-items-center(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/4pMSfzpnmYg?si=DRsjgeYmmm7H-3FI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 13 2 a Montaje de Cremallera Aletilla y Aletillón


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
