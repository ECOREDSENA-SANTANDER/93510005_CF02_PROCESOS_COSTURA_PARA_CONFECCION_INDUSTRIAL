<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 A continuación, se presenta el esquema titulado “Procesos de costura y terminados”, el cual organiza los principales contenidos relacionados con la confección industrial de prendas. El esquema integra las técnicas de costura industrial, las operaciones de ensamble, la ruta operacional y los parámetros de calidad que intervienen durante el proceso productivo.
    p.mb-5 Asimismo, aborda aspectos fundamentales como las costuras básicas y especializadas, la unión y control de piezas, los procesos de refuerzo y terminación, la secuencia de operaciones y el flujo de producción. Finalmente, incorpora criterios de calidad asociados con la simetría, funcionalidad, precisión de los acabados y cumplimiento de especificaciones técnicas, elementos esenciales para garantizar la calidad y el desempeño de la prenda terminada.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Organización de los procesos de costura y terminados mediante técnicas industriales, operaciones de ensamble, secuencias de producción y parámetros de calidad, considerando la unión de piezas, los tipos de costura, las terminaciones, los tiempos, la eficiencia operativa y el cumplimiento de las especificaciones técnicas.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
