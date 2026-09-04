<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-right") La confección industrial requiere procesos organizados que permitan transformar piezas textiles en prendas terminadas con condiciones de calidad, funcionalidad y presentación acordes con las especificaciones técnicas. En este contexto, las operaciones de costura y terminado ocupan un lugar central dentro de la producción, ya que articulan el ensamble de piezas, la aplicación de puntadas, el uso de maquinaria especializada, el control de acabados y la verificación del producto antes de su entrega.

    .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        p.mb-0 El presente componente formativo desarrolla los principales procesos de costura y terminados aplicados a la confección industrial. Sus contenidos abordan las operaciones de ensamble, la unión de piezas, el control de márgenes, las costuras rectas y curvas, la instalación de cierres, la elaboración de dobladillos, los pespuntes, los refuerzos y las terminaciones funcionales. También se incluyen técnicas especializadas como presillado, pegado de botón, elaboración de ojal y bordado básico, por su incidencia en la resistencia, funcionalidad e identificación del producto.
        br
        br
        p.mb-0 La ruta operacional se integra como herramienta para organizar la secuencia de trabajo, definir el orden de ensamble, establecer tiempos básicos y comprender el flujo de producción en planta. Esta estructura permite relacionar cada operación con la maquinaria, los insumos, el personal operativo y los puntos de control requeridos para mantener continuidad durante el proceso productivo.

    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Finalmente, el componente incorpora parámetros de calidad orientados a la revisión de simetría, limpieza, funcionalidad, precisión del acabado y cumplimiento de especificaciones técnicas. Estos criterios permiten valorar la conformidad de la prenda frente a la ficha técnica, la muestra aprobada y los estándares definidos para la producción, fortaleciendo una lectura integral del proceso de confección desde la operación hasta el producto terminado.

    .row.justify-content-center.align-items-center(data-aos="fade-left")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
