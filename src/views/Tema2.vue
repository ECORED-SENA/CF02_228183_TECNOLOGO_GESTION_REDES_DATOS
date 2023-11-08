<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tecnologías y conceptos básicos de #[em Networking]

    .row.align-items-center.mb-5(data-aos="fade")
      .col-lg-1.col-md-2.col-3.mb-3.mb-md-0
        img.px-lg-2(src="@/assets/curso/temas/t2/ico.svg", alt="")
      .col-lg-11.col-md-10
        p.mb-0 La revolución digital ha transformado de manera profunda la forma en que nos conectamos y compartimos información. Nos encontramos en un momento decisivo respecto del uso de la tecnología para extender y potenciar nuestra capacidad de comunicarnos. El siguiente video explica este concepto:

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0mbw-CgmkEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Tecnologías y conceptos básicos de #[em Networking]

    .bg-5.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Conceptos básicos #[em Networking]

    p.mb-4(data-aos="fade") Se puede definir como un sistema de apoyo para compartir información y servicios entre usuarios, dispositivos, terminales y grupos de trabajo que pertenecen a redes comunes o independientes. A continuación, se abordan los conceptos básicos de #[em Networking].

    .row.fondo-tema2.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row

          TabsC.color-acento-botones(data-aos="fade-down")
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Conexión a Internet")
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4.t-acento-contenido Conexión a Internet
                  p Dentro de los requisitos necesarios para la conexión a internet se tienen, conexión física utilizando una tarjeta adaptadora, tal como un módem o una NIC, desde un PC a una red, una conexión lógica que aplica estándares denominados protocolos, unas aplicaciones encargadas de interpretar datos y mostrar la información en un formato comprensible como los navegadores Web Google Chrome, Microsoft Edge, Firefox, entre otros.
                .col-md-5
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 5.] Conexión a internet
                  figure
                    img(src='@/assets/curso/temas/t2/fig5.svg', alt='El diagrama muestra una red informática con PCs, portátiles, impresora, punto de acceso inalámbrico, conmutador/hub y router ADSL. Los dispositivos se conectan por cable o señales inalámbricas. Los PCs y portátiles se conectan al conmutador/hub o al punto de acceso inalámbrico. La impresora se enlaza al conmutador/hub por cable. El punto de acceso inalámbrico crea una red inalámbrica local. El conmutador/hub conecta los dispositivos y distribuye datos, vinculado al router ADSL por cable. El router ADSL brinda acceso a Internet.')
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Ancho de banda")
              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4.t-acento-contenido Ancho de banda
                  p Los datos enviados por una red de computadoras, son divididos en bloques pequeños llamados paquetes, cada cual contiene información de la dirección de origen y destino, este paquete, junto con la información de dirección física, se denomina trama, también posee información que describe cómo volver a unir los paquetes en el destino. El ancho de banda determina la cantidad de paquetes que pueden transmitirse en un lapso de tiempo fijo. La unidad de medida del ancho de banda es el bit por segundo y generalmente, se indica con las siguientes unidades:
                .col-md-5
                  .cajon.color-acento-contenido.p-4.mb-4
                    p.mb-0 #[em Bits] por segundo: b/s.
                    p.mb-0 #[em Kilobits] por segundo: Kb/s.
                    p.mb-0 #[em Megabits] por segundo: Mb/s.
                    p.mb-0 #[em Gigabits] por segundo: Gb/s.
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Direccionamiento de equipos de red")
              .row.justify-content-center
                .col-md-6.mb-3
                  h4.t-acento-contenido Direccionamiento de equipos de red
                  p Las direcciones binarias de 32 bits usadas para acceder a Internet se llaman direcciones de Protocolo Internet (IP) La dirección IP de un dispositivo se forma por una parte de red y una de host que representa a un dispositivo específico de una red en particular. Para que el dispositivo sepa cómo está dividida la dirección IP, se utiliza un segundo número de 32 bits llamado máscara de subred, que se conforma de números unos identifican la porción de red y por números ceros que indican el host en la red. Con la ayuda de la matemática de red al realizar una operación AND booleana entre la dirección IP 10.10.23.134 y la máscara de subred 255.0.0.0 se obtiene como resultado la dirección de red de este host.
                  h5 Solución:
                  .cajon.color-acento-contenido.p-4.mb-4
                    p.mb-0 IP      10.10.23.134    	00001010. 
                    p.mb-0 00001010.00010111.10000110
                    p.mb-0 Máscara  255.0.0.0.	11111111. 00000000.00000000.00000000
                    p.mb-0 Red  	   10.0.0.0 	00001010. 00000000.00000000.00000000
                .col-md-5.mb-3
                  img(src="@/assets/curso/temas/t2/img.png", alt="")
                .col-md-11
                  p Dentro de los direccionamientos se tiene dos tipos básicos de direcciones IP que son IPv4 e IPv6, estos direccionamientos se pueden realizar también de dos formas básicas que son el direccionamiento estático y el direccionamiento DHCP o dinámico. Igualmente, se encuentra el ICMP o Protocolo de mensajes de Control de Internet, que sirve de apoyo en el conjunto de protocolos de Internet, se utiliza por los routers, para enviar mensajes de error e información operativa que indica el éxito o el fracaso en la comunicación con otra dirección IP.





</template>

<script>
export default {
  name: 'Tema2',
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
