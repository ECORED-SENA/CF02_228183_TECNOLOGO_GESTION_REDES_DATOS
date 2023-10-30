<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.pb-0.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diseño e implementación de la red LAN

    .row(data-aos="fade-down")   
      .col-md-4.pe-md-0
        .bg-8.h-100.p-lg-4.p-4.p-md-2.align-items-center.d-flex
          img(src="@/assets/curso/temas/t3/img.svg", alt="")
      .col-md-8.ps-md-0
        .bg-2.h-100.p-4.p-lg-5
          .bg-white.p-4
            p Para implementar una red LAN es indispensable definir un buen diseño acompañado de una excelente arquitectura de red de área local para, entre otros aspectos necesarios, poder garantizar la disponibilidad, fiabilidad e integridad de la información y por supuesto la seguridad ante posibles ataques.
            p.mb-0 Esta temática debe incluir el análisis de requerimientos de la red, las características que debe incorporar la arquitectura propuesta para este caso de cableado estructurado, el montaje y funcionamiento que comprende configuración y pruebas a los diversos componentes #[em hardware] y #[em software] de la red.
    
    
    Separador

    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.1 Análisis de requerimientos de redes

    .row.fondo-tema3.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") Al analizar las redes se debe enfocar en los requerimientos de los usuarios, las aplicaciones y dispositivos, también se debe entender el comportamiento de la red bajo diferentes escenarios, es importante definir, determinar y describir las relaciones entre el grupo de usuarios de la red, las aplicaciones y dispositivos de red. En el proceso de análisis se debe tomar las decisiones para las etapas de arquitectura, diseño e implementación de la red.
          
          .col-lg-10
            .fondo2-tema3.p-3.p-lg-5(data-aos="fade-down")
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 6.] Análisis de requerimiento de redes
              figure
                img(src='@/assets/curso/temas/t3/fig6.svg', alt='La figura representa un diagrama el cual muestra los pasos que se deben seguir para realizar un análisis de requerimiento de redes.')


    Separador

    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.2 Cableado estructurado
      
    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-4.px-0
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Un sistema de Cableado estructurado o #[em Structured Cabling System] (SCS) está formado por elementos de cableado, conectores, y dispositivos de comunicación que integran los servicios de voz, datos y video, junto con el sistema de administración al interior de un edificio, o un campus, como los sistemas de seguridad de acceso, alarmas, y sistemas de energía entre otros.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 González R (2015) 
      .col-lg-4.col-md-6.col-9.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t3/img2.svg", alt="")

    p.mb-4(data-aos="fade") Para el desarrollo de un sistema de cableado estructurado es importante abordar los siguientes aspectos: 

    .row.justify-content-center(data-aos="fade-down") 
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row(numero="a" titulo="Estándares vigentes")
            .col-12
              p Estos deben facilitar la administración, detección y resolución de fallas en la comunicación. Se pueden agrupar en tres grandes grupos que serían; estándares comunes, normas locales y estándares de componentes. Entre los más útiles tenemos TIA/EIA 568, IEEE 802.11, entre otros.
          .row(numero="b" titulo="Diseño y documentación básicos de redes")
            .col-12
              p Para todo proceso de planificación y diseño de una red es necesario tener un respaldo y ello se centraría en cuatro documentos básicos y el más importante sería el diagrama de la red que describe de forma gráfica cómo estará estructurada, las direcciones  y los componentes. Estos documentos base serían:
              ul.lista-ul--color.fa-ul.ps-3.ps-md-4.mb-0
                li.mb-1
                  i.fas.fa-chevron-right
                  | Planificación de los requisitos de hardware y la topología de red.
                li.mb-1 
                  i.fas.fa-chevron-right
                  | Determinación de las direcciones IP, nombres de Host y servicios de nombres a utilizar en la red.
                li.mb-1 
                  i.fas.fa-chevron-right
                  | Establecimiento de subdivisiones administrativas y estrategia de subredes.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Determinación del lugar de los enrutadores en el diseño de la red.
          .row(numero="c" titulo="Seguridad física")
            .col-12
              p Aquí debemos referirnos a los mecanismos y controles de seguridad dentro y alrededor del centro de cableado como también los medios de acceso remoto del mismo; que se deben implementar para proteger el #[em hardware] y medios de almacenamiento de datos. Algunos de los problemas de seguridad física que se pueden tener serían: desastres naturales, incendios, inundaciones, picos, ruidos electromagnéticos, entre otros. 
          .row.justify-content-center(numero="d" titulo="Planificación del cableado estructurado")
            .col-12
              p Para esta planificación se debe tener en cuenta, dos componentes muy importantes: el Backbone y el cableado horizontal. El Backbone es la principal conexión troncal de Internet o columna vertebral en la red de área local que cumple la norma de cableado estructurado y se construye en fibra óptica. El cableado horizontal es la parte del sistema de telecomunicaciones que va desde el área de trabajo al cuarto de telecomunicaciones. Contiene las salidas de telecomunicaciones en el área de trabajo, cables y conectores de transición entre las salidas y el cuarto de telecomunicaciones, los patch panels y cables de empalme para configurar las conexiones de cableado horizontal en el cuarto de telecomunicaciones.
            .col-lg-8 
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 7.] Sistemas de Cableado Estructurado
              figure
                img(src='@/assets/curso/temas/t3/fig7.svg', alt='El diagrama muestra un sistema de cableado estructurado para telecomunicaciones. Este sistema establece normas para organizar el cableado. Sus componentes clave incluyen la sala de telecomunicaciones con equipos como paneles de parcheo y switches, puntos de red para conectar dispositivos, como computadoras, y dos tipos de cables: vertical (fibra óptica) que conecta con el proveedor de Internet y horizontal (UTP) que llega a los puntos de red. El sistema permite una transmisión eficiente de datos entre estaciones de trabajo y la red. La fibra óptica ofrece alta velocidad y seguridad, mientras que el UTP es económico pero susceptible a interferencias.')
          .row(numero="e" titulo="Especificación del centro de cableado (SITE)")
            .col-12
              p En este caso se debe determinar los equipos que servirán de conexión para los terminales o elementos componentes de la red y en especial de la red LAN, considerando la tecnología y protocolo de la misma a que en la mayoría de casos es Ethernet. Aquí se define la velocidad de los switches que pueden ser 100 o 1000 Mbps y así determinar su modo de funcionamiento. Este dispositivo estaría conectado a un #[em router] o un servidor de red, el cual permite que los paquetes que salgan de la red LAN y tengan destino la red WAN, viajen a través de él y con su dirección IP, podrán acceder a los servicios y aplicaciones ofrecidas por la red WAN, como Internet, páginas específicas, bases de datos, y en general todos los servicios que se ofrecen  a la red.
          .row(numero="f" titulo="Organismos certificadores")
            .col-12
              p Entre los principales organismos están ISO e IEEE, quienes proporcionan a los fabricantes un conjunto de estándares que aseguran mayor compatibilidad e interoperabilidad entre los diferentes tipos de tecnología de red producidos por las empresas a nivel mundial.


    Separador

    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.3 Configuración y pruebas de la red

    p.mb-4(data-aos="fade") Así como las computadoras no pueden trabajar sin un sistema operativo lo mismo pasa con un #[em router] o un #[em switch]. El sistema operativo #[em internetwork] (IOS) de cisco es el software en dispositivos Cisco IOS (#[em Internetwork Operating System]). El Cisco IOS proporciona los siguientes servicios:

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-9
        .fondo3-tema3
          .row.align-items-center.justify-content-center
            .col-lg-4.col-md-5.mb-3.mb-md-0
              img(src="@/assets/curso/temas/t3/img3.svg", alt="")
            .col-md-6.py-4.py-md-3.px-4
              ul.lista-ul--color.fa-ul.mb-0
                li.mb-md-1.mb-lg-3
                  i.fas.fa-chevron-right
                  | Funciones básicas de enrutamiento y conmutación.
                li.mb-md-1.mb-lg-3
                  i.fas.fa-chevron-right
                  | Acceso confiable y seguro a recursos en red.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Escalabilidad de la red #[em Command line interface] (CLI)

    p.mb-4(data-aos="fade") El archivo en IOS tiene un tamaño en varios #[em megabytes] y se encuentra en una memoria semipermanente llamada #[em flash]. Esta memoria provee almacenamiento no volátil, también permite que se actualice IOS a versiones más nuevas o que se incorporen nuevas funciones, entre las que se pueden destacar:  

    .row.justify-content-center.mb-3
      .col-lg-4.col-9.col-md-6.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/img4.png", alt="")
      .col-lg-8.mb-4(data-aos="fade-left")
        ul.lista-ul--color.fa-ul.mb-0
          li.mb-4
            i.fas.fa-chevron-right
            span.mb-0 Métodos de acceso.
          li.mb-4
            i.fas.fa-chevron-right
            span.mb-0 Consola.
          li.mb-4
            i.fas.fa-chevron-right
            span.mb-0 #[em Telnet]/ SSH.
          li.mb-4
            i.fas.fa-chevron-right
            span.mb-0 #[b Puerto auxiliar:] los dispositivos de red dependen de 2 tipos de #[em software] para su funcionamiento.
          li.mb-4
            i.fas.fa-chevron-right
            span.mb-0 #[b El sistema operativo:] facilita la operación básica de los componentes de #[em hardware] del dispositivo.
          li.mb-0
            i.fas.fa-chevron-right
            span.mb-0 #[b La configuración:] contienen los comandos del #[em software] IOS de cisco utilizados para personalizar la funcionalidad de un dispositivo Cisco. (los comandos son analizados el #[em software] IOS de Cisco) Archivos de Configuración:
            li.ps-3
              | Archivo de configuración en ejecución. #[br]
              | Archivo de configuración de inicio MODOS CISCO IOS.
          li.mb-0
            i.fas.fa-chevron-right
            span.mb-0 Los modos de operación tienen cada uno su propio dominio, los comandos presentes en la CLI es de forma jerárquica teniendo en ella los siguientes modos de acceso:
            li.ps-3
              | Modo de usuario. #[br]
              | Modo de ejecución privilegiado. #[br]
              | Modo de configuración global (Informática Redes de Computadoras Unidad 5. s.f).


    .row.fondo4-tema3.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          p.mb-4(data-aos="fade") La siguiente gráfica describe la configuración y pruebas que se pueden realizar en la red y en especial para dispositivos correspondientes al fabricante Cisco.

          .col-lg-8(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 8.] Configuración y prueba de la Red
            figure
              img(src='@/assets/curso/temas/t3/fig8.svg', alt='Esta figura es un diagrama de proceso que muestra los pasos que se deben seguir para realizar un análisis de requerimiento de redes, consiste en identificar las necesidades y expectativas de los usuarios y clientes de una red, así como los recursos y restricciones que afectan al diseño e implementación de la red. El diagrama tiene nueve etapas o actividades que se deben realizar para el análisis de requerimiento de redes, desde el análisis de la red actual hasta la documentación de la red diseñada.')




</template>

<script>
export default {
  name: 'Tema3',
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
