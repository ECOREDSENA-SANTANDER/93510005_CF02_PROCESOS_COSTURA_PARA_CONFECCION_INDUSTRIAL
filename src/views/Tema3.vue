<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ruta operacional en confección industrial

    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-7.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/1.png')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/2.svg')
            p.mb-4 La ruta operacional organiza el recorrido técnico que sigue una prenda desde las primeras operaciones de preparación hasta las fases finales de ensamble, acabado e inspección. Su estructura permite ordenar las actividades de confección de acuerdo con la lógica constructiva del producto, la disponibilidad de maquinaria, la especialización del personal operativo y los criterios de calidad definidos para cada referencia. 
            p.mb-0 Este instrumento cumple una función central dentro de la planeación productiva, porque transforma la ficha técnica y el diseño de la prenda en una secuencia ejecutable. En ella se registran las operaciones necesarias, el orden de intervención, la máquina o equipo requerido, el tiempo estimado, los puntos de control y la relación entre una actividad y la siguiente. Una ruta bien estructurada reduce improvisaciones en planta y facilita el seguimiento del proceso.

    p.mb-5(data-aos="fade-right") La ruta operacional también permite identificar cuellos de botella, tiempos improductivos, operaciones repetidas o movimientos innecesarios. Su análisis favorece la organización del flujo de producción y aporta información para distribuir cargas de trabajo, definir capacidades por línea, programar entregas y mantener continuidad entre áreas como corte, preparación, ensamble, terminación, revisión y empaque.

    .cajon.color-acento-b.p-4.mb-5(data-aos="fade-left")
      h4.mb-3 Función de la ruta operacional
      p.mb-0 La ruta operacional traduce el diseño de la prenda en una secuencia productiva verificable. No solo indica qué operación se realiza, sino en qué orden se ejecuta, con qué recurso técnico, en qué tiempo aproximado y bajo qué criterio de control. Esta información permite coordinar producción, calidad y eficiencia dentro de la planta.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 8.
          | Elementos de la ruta operacional de confección
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-9
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Elemento de la ruta operacional
                th Función técnica
                th Aplicación en planta
            tbody
              tr
                td Código de operación
                td Identifica cada actividad dentro del proceso.
                td Facilita seguimiento, control y comunicación entre áreas.
              tr
                td Nombre de la operación
                td Describe la acción productiva que se ejecuta.
                td Permite reconocer tareas como cerrar costados, pegar cuello, filetear o dobladillar.
              tr
                td Máquina o equipo
                td Define el recurso técnico requerido para la operación.
                td Relaciona máquina plana, fileteadora, recubridora, presilladora, botonadora u ojaliadora.
              tr
                td Tiempo básico
                td Registra el tiempo estimado para ejecutar una unidad de operación.
                td Apoya balanceo de línea, cálculo de capacidad y programación de producción.
              tr
                td Punto de control
                td Señala el aspecto técnico que requiere verificación.
                td Revisa medidas, puntadas, simetría, resistencia, alineación o limpieza.
              tr
                td Dependencia operativa
                td Indica qué operación antecede o habilita la siguiente.
                td Evita desorden en el flujo y disminuye interrupciones durante el ensamble.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/3.png')

    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Secuencia de operaciones y orden de ensamble

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/4.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema3/5.svg')
          .col-lg-10
            p.mb-0 La secuencia de operaciones corresponde al orden técnico mediante el cual se desarrolla ese proceso, considerando la estructura de la prenda, el tipo de material, los componentes incorporados y los acabados previstos.
        p.mb-0 El orden de ensamble parte de operaciones preparatorias, como fusionado de entretelas, marcación, preparación de bolsillos, armado de cuellos, puños, pretinas o vistas, luego se integran las piezas principales, se incorporan componentes funcionales y se ejecutan operaciones de cierre, refuerzo o terminación. Esta progresión evita acumulación de volumen, pérdida de forma o dificultad de manipulación en etapas posteriores

    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-left")
      p.mb-0 En productos de confección seriada, la secuencia no se organiza por preferencia individual, sino por eficiencia técnica y control del resultado. Una alteración en el orden puede afectar medidas, generar reprocesos o impedir que determinadas piezas se unan correctamente. Por ejemplo, pegar una manga antes de cerrar ciertas uniones puede ser conveniente en algunos diseños; en otros, puede dificultar la manipulación o alterar el ajuste de la sisa.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Secuencia y operación en procesos de confección
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-9
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Momento de la secuencia
                th Operaciones frecuentes
                th Propósito dentro del ensamble
            tbody
              tr
                td Preparación de componentes
                td Fusionar, marcar, armar bolsillos, preparar cuellos, puños, pretinas, tapas o vistas.
                td Tener listas las piezas secundarias antes de integrarlas al cuerpo de la prenda.
              tr
                td Ensamble de piezas principales
                td Unir hombros, costados, cortes, mangas, tiros, entrepiernas o piezas delanteras y posteriores.
                td Construir la estructura base del producto.
              tr
                td Incorporación de elementos funcionales
                td Pegar cierres, colocar elásticos, instalar bolsillos, unir pretinas, fijar forros o montar cuellos.
                td Añadir componentes que permiten uso, ajuste, apertura, cierre o soporte.
              tr
                td Operaciones de refuerzo
                td Realizar presillas, remates, pespuntes, atraques o refuerzos internos.
                td Asegurar zonas sometidas a tensión o uso repetido.
              tr
                td Terminación y acabado
                td Dobladillar, limpiar hilos, revisar costuras, planchar, etiquetar y preparar empaque.
                td Entregar el producto con presentación final y condiciones de conformidad.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/6.png')

    .cajon.color-acento-b.p-4.mb-0(data-aos="fade-right")
      h4.mb-3 Función de la ruta operacional
      p.mb-0 El orden de ensamble varía según la tipología de prenda. Una camisa, un pantalón, una chaqueta o una prenda deportiva presentan secuencias diferentes, aunque puedan compartir operaciones como costura recta, fileteado, pegado de botón, ojal o dobladillo.

    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Tiempos básicos y flujo de producción

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/7.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El tiempo básico corresponde al periodo estimado para ejecutar una operación en condiciones normales de trabajo, con método definido, maquinaria disponible, material preparado y ritmo operativo controlado. Este dato permite calcular la capacidad productiva, distribuir tareas, proyectar entregas y establecer comparaciones entre el tiempo planeado y el tiempo real de ejecución.
            br
            br
            p.mb-0 Su determinación puede apoyarse en observación directa, cronometraje, registros históricos, estudio de métodos o estándares internos de la empresa. Para que el tiempo básico sea útil, requiere asociarse con una operación específica y con condiciones claras de ejecución: tipo de prenda, material, longitud de costura, complejidad del ensamble, nivel de acabado y equipo empleado.

    p.mb-5(data-aos="fade-right") El flujo de producción describe la forma en que las piezas, insumos y prendas avanzan entre puestos de trabajo. Un flujo ordenado reduce esperas, traslados innecesarios, acumulación de piezas en proceso y desbalance entre operaciones. En plantas industriales, este flujo puede organizarse por módulos, líneas, células de trabajo, lotes o sistemas mixtos, según el volumen de producción y la variedad de referencias.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/8.png')
      .col-lg-9
        .titulo-sexto.mb-4
          h5 Tabla 10.
          | Variables de análisis en la ruta operacional
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Variable de análisis
                th Descripción operativa
                th Incidencia en producción
            tbody
              tr
                td Tiempo por operación
                td Duración estimada de una actividad específica.
                td Permite calcular carga de trabajo y capacidad por puesto.
              tr
                td Tiempo por prenda
                td Suma de los tiempos básicos de todas las operaciones.
                td Ayuda a estimar productividad y costo operativo.
              tr
                td Balance de línea
                td Distribución equilibrada de operaciones entre puestos.
                td Reduce esperas y evita saturación en una estación de trabajo.
              tr
                td Flujo de materiales
                td Movimiento de piezas, insumos y prendas entre operaciones.
                td Disminuye recorridos innecesarios y pérdidas de tiempo.
              tr
                td Producto en proceso
                td Cantidad de piezas o prendas que permanecen entre operaciones.
                td Permite detectar acumulaciones, retrasos o falta de continuidad.
              tr
                td Ritmo de producción
                td Velocidad con la que avanza la línea según capacidad instalada.
                td Orienta programación diaria y cumplimiento de metas.

    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-right")
      h4.mb-3 Ejemplo aplicado
      p.mb-0 Interpretación de una ruta operacional para identificar las operaciones, la maquinaria, los tiempos básicos y los puntos de control del proceso de confección.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 11.
          | Ejemplo de una ruta operacional
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9
        .tabla-a.tab11.mb-0
          table
            thead
              tr
                th Operación
                th Máquina o recurso
                th Tiempo básico estimado
                th Punto de control
            tbody
              tr
                td Unir hombros
                td Máquina plana
                td 0,45 minutos
                td Margen uniforme y coincidencia entre piezas.
              tr
                td Filetear costados
                td Fileteadora
                td 0,60 minutos
                td Borde cubierto y tensión equilibrada.
              tr
                td Pegar manga
                td Máquina plana
                td 1,20 minutos
                td Alineación de piquetes y ausencia de fruncesno previstos.
              tr
                td Dobladillar ruedo
                td Recubridora o plana
                td 0,90 minutos
                td Ancho constante y costura regular.
              tr
                td Revisar prenda
                td Inspección manual
                td 1,00 minuto
                td Limpieza, medidas y conformidad general.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/9.png')

    p.mb-0(data-aos="fade-left") Los tiempos básicos y el flujo productivo aportan información para organizar recursos con mayor precisión. Al relacionar duración, orden y desplazamiento de piezas, la planta puede anticipar retrasos y ajustar la operación sin afectar la calidad del producto.

    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Relación entre ruta operacional, eficiencia y continuidad del proceso

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema3/10.png')
    
    p.mb-5(data-aos="fade-left") La eficiencia productiva no depende únicamente de la velocidad de cada operación. También se relaciona con la forma en que la ruta operacional articula personas, máquinas, materiales, tiempos, controles y secuencias. Una línea puede contar con personal calificado y maquinaria suficiente, pero presentar bajo rendimiento si las operaciones están mal distribuidas o si el flujo se interrumpe por falta de insumos, piezas incompletas o reprocesos. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/11.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema3/12.svg')
          .col-lg-10
            p.mb-0 La continuidad del proceso se logra cuando cada operación entrega condiciones adecuadas para la siguiente. Esto implica que las piezas lleguen completas, identificadas, revisadas y en el orden correspondiente. También requiere que las máquinas estén disponibles, los insumos preparados y los criterios de calidad definidos desde el inicio de la ruta.
        p.mb-0 La ruta operacional funciona como un instrumento de coordinación. Su correcta aplicación permite reducir tiempos muertos, controlar la acumulación de producto en proceso, equilibrar cargas de trabajo y mejorar la comunicación entre áreas. Además, facilita la detección de puntos críticos donde se generan demoras, defectos, repeticiones o interrupciones.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 12.
          | Relación operativa y riesgos en procesos de confección
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9
        .tabla-a.tab12.mb-0
          table
            thead
              tr
                th Relación operativa
                th Riesgo cuando no se controla
                th Acción técnica asociada
            tbody
              tr
                td Ruta y eficiencia
                td Aumento de tiempos muertos, desplazamientos innecesarios o baja productividad.
                td Revisar distribución de operaciones, tiempos básicos y balance de línea.
              tr
                td Ruta y calidad
                td Reprocesos por errores acumulados o inspecciones tardías.
                td Incorporar puntos de control durante el proceso, no solo al final.
              tr
                td Ruta y continuidad
                td Interrupciones por piezas faltantes, insumos no disponibles o secuencia incorrecta.
                td Verificar preparación previa, abastecimiento y orden de producción.
              tr
                td Ruta y maquinaria
                td Saturación de equipos específicos o paradas por falta de mantenimiento.
                td Programar capacidad instalada, equipos alternos y mantenimiento preventivo.
              tr
                td Ruta y personal operativo
                td Sobrecarga en algunos puestos y baja utilización en otros.
                td Redistribuir operaciones según habilidad, tiempo y complejidad.
              tr
                td Ruta y entrega
                td Incumplimiento de metas diarias o retraso en pedidos.
                td Ajustar programación, seguimiento de avances y control de cuellos de botella.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/13.png')

    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-left")
      h4.mb-3 Señales de una ruta con baja continuidad
      p.mb-0 Una ruta operacional presenta dificultades cuando las piezas se acumulan entre puestos, las personas operarias esperan insumos, una máquina concentra demasiadas operaciones, aparecen reprocesos frecuentes o la inspección final detecta fallas originadas en fases iniciales. Estas señales permiten intervenir el proceso antes de que el retraso afecte la entrega del lote completo.

    p.mb-0(data-aos="fade-right") La articulación entre ruta operacional, eficiencia y continuidad fortalece la organización de la planta, dado que una secuencia clara, tiempos definidos y puntos de control oportunos permiten que la producción avance con regularidad, mantenga trazabilidad y conserve las condiciones técnicas requeridas para la prenda.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
