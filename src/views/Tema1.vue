<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas de costura industrial
      
    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-7.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/1.png')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/2.svg')
            p.mb-4 En la confección industrial, las técnicas de costura constituyen el conjunto de procedimientos empleados para unir, asegurar, reforzar, decorar o terminar las piezas que conforman una prenda o producto textil. Su aplicación responde a criterios técnicos relacionados con el tipo de material, la función de la costura, la resistencia requerida, la apariencia del acabado, la maquinaria disponible y las especificaciones establecidas en la ficha técnica.
            p.mb-0 Cada técnica de costura cumple una función específica dentro del proceso productivo. Algunas operaciones permiten unir piezas principales; otras protegen bordes, refuerzan zonas sometidas a tensión, aseguran componentes funcionales o aportan terminaciones visibles que inciden en la calidad percibida del producto. La selección adecuada de la técnica influye directamente en la durabilidad, la comodidad, la estabilidad dimensional y la presentación final de la prenda.

    p.mb-5 La costura industrial se diferencia de la costura artesanal por su nivel de estandarización, repetibilidad y control operativo. En un entorno productivo, las operaciones se ejecutan siguiendo rutas previamente definidas, máquinas especializadas, parámetros de puntada, márgenes de costura, tiempos básicos y criterios de inspección. Esta organización permite mantener uniformidad entre unidades producidas y reducir variaciones que puedan generar reprocesos o no conformidades.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/tema1/3.png')
      .col-lg-4.pe-lg-0
        img.img-t(src='@/assets/curso/tema1/4.svg')
      .col-lg-4.ps-lg-0
        .bg2.p-4.mb-0
          h4.mb-0.mx-lg-3.my-lg-3 Función técnica de la costura industrial
        .bg3.p-4
          p.mb-0.mx-lg-3.my-lg-1 La técnica de costura no se limita a unir dos piezas textiles. También determina la resistencia del producto, la limpieza del acabado, la comodidad en el uso, la estabilidad del ensamble y la correspondencia con la ficha técnica. Por ello, cada operación de costura integra tres componentes: el tipo de puntada, el tipo de máquina y el propósito funcional dentro de la prenda.
        


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
