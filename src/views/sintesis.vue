<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //p.mb-4

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La implementación de infraestructura tecnológica es un proceso multifacético que va desde el diseño hasta el mantenimiento de redes. Estas redes usan varios medios de transmisión y protocolos, como TCP/IP, y se clasifican según factores como alcance, tipo de conexión y tecnología. Las redes también tienen distintas topologías, como estrella o malla, y se guían por modelos como OSI y TCP/IP. Ethernet es especialmente popular para la transmisión eficiente de datos. En términos de networking, la conexión a Internet, ancho de banda y direccionamiento son críticos. La creación de una red LAN implica un análisis detallado, cableado según estándares, y planificación exhaustiva que abarca desde la seguridad hasta la documentación. Finalmente, la configuración y pruebas son a menudo certificadas por entidades especializadas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
