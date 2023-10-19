<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Redes de datos 

    .row.mb-4(data-aos="fade-down")  
      .col-md-4.pe-md-0
        .h-100
          img(src="@/assets/curso/temas/t1/img.png", alt="")
      .col-md-8.ps-md-0
        .bg-2.h-100.p-4.align-items-center.d-flex
          .bg-white.p-4
            p.mb-0 Una red informática es una colección de dispositivos conectados entre sí utilizando un medio de transmisión, que comparten recursos e intercambian información. La comunicación en la red informática posee dos roles para los elementos conectados, que son el emisor y receptor, estos se asumen y alternan en diferentes instantes de tiempo.

    p(data-aos="fade") Las redes de datos son infraestructuras creadas para transmitir información a través del intercambio de datos. Según Moro (2013) son arquitecturas específicas para este fin, cuya base principal es la conmutación de paquetes y que atienden a una clasificación exclusiva, teniendo en cuenta la distancia que es capaz de cubrir su arquitectura física y por supuesto, el tamaño que presentan.


    Separador

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.1 Historia

    .row.align-items-center.mb-5(data-aos="fade")
      .col-lg-1.col-md-2.col-3.mb-3.mb-md-0
        img.px-lg-1(src="@/assets/curso/temas/t1/ico.svg", alt="")
      .col-lg-11.col-md-10
        p.mb-0 La evolución tecnológica ha transformado la manera en que la humanidad se comunica y transmite información. Desde las primeras innovaciones del siglo XIX hasta las actuales redes de computadoras que vemos en la actualidad, han sucedido una serie de avances que han dejado huella en la historia de las redes de datos. A continuación, se presenta un video que detalla esta trayectoria:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.    


    Separador

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.2 Conceptos básicos y componentes de una red

    p(data-aos="fade") Una red implica que en ella intervengan varios actores que básicamente se pueden enmarcar en cuatro bien definidos que son: los dispositivos, el medio, la información y los recursos que va a utilizar o compartir para mejorar la eficiencia de los mismos. 

    p.mb-4(data-aos="fade") Los dispositivos son aquellos elementos que se conectan a la red y están divididos en dos grandes grupos:  
    
    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 1.] Tipos de dispositivos.
        .row
          .col-lg-6.mb-3
            img(src="@/assets/curso/temas/t1/fig1-1.svg", alt="La imagen representa los grupos globales: como son módem, router, switch, access point, bridge. Y los dispositivos terminales o de usuario final como: el computador, tablet, teléfono celular, notebook, impresora, cámara, televisor inteligente, consola de videojuegos, entre otros.")
          .col-lg-6.mb-3
            img(src="@/assets/curso/temas/t1/fig1-2.svg", alt="La imagen representa los grupos globales: como son módem, router, switch, access point, bridge. Y los dispositivos terminales o de usuario final como: el computador, tablet, teléfono celular, notebook, impresora, cámara, televisor inteligente, consola de videojuegos, entre otros.")

    .row.align-items-center.mb-4(data-aos="fade")
      .col-lg-2.col-md-3.col-3.mb-3.mb-md-0
        img.px-lg-2(src="@/assets/curso/temas/t1/img2.svg", alt="")
      .col-lg-10.col-md-10
        p.mb-0 La red es el medio que permite a los dispositivos relacionarse entre sí. A su vez, la información se define como la unidad que se intercambia entre dispositivos de gestión, acceso, comunicación y de usuario final, como el texto, imágenes, música, hipertexto, video, entre otros. Por otra parte, los recursos hacen referencia a todo aquello que un dispositivo solicita a la red, se identifica y accede directamente. Estos recursos pueden ser archivos compartidos en otros dispositivos de la red, un documento a imprimir en una impresora compartida, un servicio a consumir, información, espacio en disco duro, tiempo de procesamiento, y más.
    
    p.mb-4(data-aos="fade") A continuación se definen los dispositivos y elementos más importantes en las redes de datos:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.
      
    .row.fondo-tema3.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") Con el propósito de profundizar lo invitamos a revisar la siguiente información:
          
          TabsB.color-acento-botones(data-aos="fade-down")
            .bg-white.py-4.py-md-5(titulo="Servidor" :icono="require('@/assets/curso/temas/t1/tab-ico1.svg')")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t-acento-contenido Servidor
                  p Es un computador que en la red tiene la función de proveer servicios a otros dispositivos llamados clientes. También se suele denominar con la palabra servidor a una aplicación informática o programa que realiza algunas tareas en beneficio de otras aplicaciones llamadas clientes.  Entre los servicios ofrecidos por un servidor, está el manejo de archivos y aplicaciones. Los primeros consisten en un proceso de lectura y escritura por parte de los usuarios sobre archivos almacenados en una estación de trabajo. Las aplicaciones permiten a los usuarios finales realizar tareas acordes a sus necesidades.
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/t1/tab-img1.png', alt='')
            .py-4.py-md-5(titulo="Estaciones de trabajo" :icono="require('@/assets/curso/temas/t1/tab-ico2.svg')")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t-acento-contenido Estaciones de trabajo
                  p Son los nodos finales de una red de computadoras. Normalmente, las estaciones de trabajo permiten a los usuarios ejecutar aplicaciones y almacenar diferentes tipos de información. Sin embargo, una impresora conectada a la red podría verse como un nodo final de ésta y verse como una estación de trabajo, pero con prestaciones diferentes y reducidas comparadas con la de un computador.              
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/t1/tab-img2.png', alt='')
            .bg-white.py-4.py-md-5(titulo="Tarjeta de conexión a la red" :icono="require('@/assets/curso/temas/t1/tab-ico3.svg')")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t-acento-contenido Tarjeta de acceso a la red
                  p Es un dispositivo que le permite a todo computador conectarse a la red informática ya sea para conexión cableada o inalámbrica. Cuando se trata de una conexión alámbrica, se habla de una tarjeta de red o NIC (Network Interface Card) por sus siglas en inglés, la cual puede ser insertada directamente en la placa madre por medio de un puerto PCI. Dicha tarjeta trae consigo un conector para cable de red. Por otro lado, las tarjetas de red inalámbricas también pueden ser conectadas a la tarjeta madre por medio del puerto PCI o de manera externa por medio de un puerto USB.              
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/t1/tab-img3.png', alt='')
            .py-4.py-md-5(titulo="Repetidores" :icono="require('@/assets/curso/temas/t1/tab-ico4.svg')")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t-acento-contenido Repetidor
                  p Se trata de un dispositivo electrónico capaz de transmitir una señal recibida de bajo nivel y re transmitirla a más alto nivel, permitiendo con esto cubrir distancias largas sin que haya degradación considerable de la señal. En los inicios de la telegrafía se utilizó para regenerar las señales telegráficas.               
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/t1/tab-img4.png', alt='')
            .bg-white.py-4.py-md-5(titulo="Routers" :icono="require('@/assets/curso/temas/t1/tab-ico5.svg')")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t-acento-contenido Router
                  p Es un dispositivo de red encargado de indicar la ruta más adecuada para transmitir el mensaje que ha enviado el transmisor hacia un destino determinado dentro o fuera de la red a la cual pertenecen, utilizando los protocolos adecuados.              
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/t1/tab-img5.png', alt='')
            .bg-white.py-4.py-md-5(titulo="Switch" :icono="require('@/assets/curso/temas/t1/tab-ico6.svg')")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t-acento-contenido Switch
                  p Es un dispositivo de red que se encarga de interconectar varios segmentos de red, por medio de la dirección MAC de los dispositivos destino de las tramas de red.              
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/t1/tab-img6.png', alt='')
            .bg-white.py-4.py-md-5(titulo="Cableado" :icono="require('@/assets/curso/temas/t1/tab-ico7.svg')")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t-acento-contenido Cableado
                  p Se trata del medio físico utilizado para la conexión de los dispositivos hacia la red en la cual solicitarán los servicios dependiendo de los requerimientos de longitud, velocidad entre otros.              
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/t1/tab-img7.png', alt='')
            .bg-white.py-4.py-md-5(titulo="Protocolo" :icono="require('@/assets/curso/temas/t1/tab-ico8.svg')")
              .row.justify-content-center
                .col-md-11
                  h4.t-acento-contenido Protocolo
                  p.mb-4 Es el elemento software de la red, encargado de establecer los parámetros de comunicación entre dispositivos, habilitar mecanismos de identificación de los equipos y usuarios en la red, definir el formato de la información que circula en la red.               
                .col-md-8
                  figure
                    img(src='@/assets/curso/temas/t1/tab-img8.svg', alt='')



          Separador

          #t_1_3
          .titulo-segundo.color-acento-contenido(data-aos="fade") 
            h2 1.3 Medios de transmisión

          p.mb-4(data-aos="fade") Son las vías a través de las cuales viaja la información o los datos. Estos medios se clasifican en dos tipos según cómo conduzcan las señales:
          
          .col-12 
            .b-r12.fondo-slider.row.justify-content-center.align-items-center.p-4.mb-4.bx-sh2(data-aos="fade-down") 
              .col-lg-7
                h4.t-acento-contenido Medios de transmisión guiados
                p Están formados por cables que se encargan de guiar las señales de un extremo a otro. Dentro de las características de estos medios están: el tipo de conductor, velocidad máxima de transmisión, distancia máxima ofrecida entre repetidores, inmunidad ante interferencias electromagnéticas, facilidad de instalación y la compatibilidad con varias tecnologías de capa de enlace. Los medios guiados más usados para interconexión en el campo de las telecomunicaciones son: cable de par trenzado, cable coaxial y la fibra óptica
              .col-lg-4
                SlyderE(indicadores="derecha")
                  .row 
                    img(src="@/assets/curso/temas/t1/slider1-1.png", alt="")
                  .row 
                    img(src="@/assets/curso/temas/t1/slider1-2.png", alt="")
                  .row 
                    img(src="@/assets/curso/temas/t1/slider1-3.png", alt="")

            .b-r12.fondo-slider.row.justify-content-center.align-items-center.p-4.bx-sh2(data-aos="fade-down") 
              .col-lg-7
                h4.t-acento-contenido Medios de transmisión no guiados
                p Son aquellos que permiten la comunicación sin el uso de cables o conductores físicos. Las señales electromagnéticas se irradian a través del espacio libre y están disponibles para cualquier usuario con un dispositivo inalámbrico. Para estos medios, es necesario el uso de antenas tanto para transmitir como para recibir las señales. Los medios no guiados más utilizados son: las ondas de radio, las microondas y el infrarrojo.
              .col-lg-4
                SlyderE(indicadores="derecha")
                  .row 
                    img(src="@/assets/curso/temas/t1/slider2-1.png", alt="")
                  .row 
                    img(src="@/assets/curso/temas/t1/slider2-2.png", alt="")
                  .row 
                    img(src="@/assets/curso/temas/t1/slider2-3.png", alt="")


    Separador

    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.4 Protocolos de comunicación

    .row.justify-content-center.align-items-center
      .col-md-7.mb-4.mb-md-0
        p Para que los ordenadores se comuniquen, primero es necesario conocer las normas que permiten esta comunicación; en otras palabras, qué protocolo de comunicación utilizan. Según Stallings, Tanenbaum y Stevens (2000), un protocolo de red es un conjunto de reglas que determina la forma de identificarse, transmitir información y procesar los datos en la red. Los protocolos pueden ser de tipo hardware (como las tarjetas de red), software (como los drivers) o una combinación de ambos.
        p Existen diversos protocolos, y cada uno está asociado a una capa específica del modelo OSI. Algunos de ellos son:
      .col-md-5
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Capa 1: CGI. MIME, IEEE
          p.mb-0 Capa 2: Ethernet
          p.mb-0 Capa 3: Protocolo de internet IP
          p.mb-0 Capa 4: Protocolo de control de Transmisión TCP, UDP
          p.mb-0 Capa 5: NetBIOS
          p.mb-0 Capa 6: ASN.1
          p.mb-0 Capa 7: TELNET, FTP, SNMP


    Separador

    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.5 Clasificación de redes

    P.mb-4(data-aos="fade") Las redes están clasificadas de diferentes maneras teniendo en cuenta el número de dispositivos conectados y la distancia entre los mismos, el tipo de conexión o la tecnología utilizada, esta clasificación se detalla a continuación:

    .row.fondo-tema2.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row

          TabsC.color-acento-botones(data-aos="fade-down")
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Por alcance ")
              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  ul.lista-ul--color.fa-ul.ps-3.ps-md-4.mb-0
                    li.pb-1.b-b-list
                      i.fas.fa-chevron-right
                      span.mb-0 Red PAN o de área personal (#[em Personal Area Network])
                    li.pb-1.b-b-list
                      i.fas.fa-chevron-right
                      span.mb-0 Red LAN o de área local (#[em Local Area Network])
                    li.pb-1.b-b-list
                      i.fas.fa-chevron-right
                      span.mb-0 Red CAN o de área de campus (#[em Campus Area Network])
                    li.pb-1.b-b-list
                      i.fas.fa-chevron-right
                      span.mb-0 Red MAN o de área metropolitana (#[em Metropolitan Área Network])
                    li.pb-1.b-b-list
                      i.fas.fa-chevron-right
                      span.mb-0 Red WAN o de área amplia (#[em Wide Area Network])
                    li.pb-1.b-b-list
                      i.fas.fa-chevron-right
                      span.mb-0 Red SAN o de área de almacenamiento (#[em Storage Area Network])
                    li.pb-1.b-b-list
                      i.fas.fa-chevron-right
                      span.mb-0 Red VLAN o de área local virtual (#[em Virtual LAN])
                .col-md-5
                  img(src='@/assets/curso/temas/t1/tab2-img1.svg', alt='')
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Por tipo de conexión")
              .row.justify-content-center
                .row.justify-content-around
                  .col-md-8.mb-4.mb-md-0
                    ul.lista-ul--color.fa-ul.ps-3.ps-md-4.mb-0
                      li.pb-1
                        i.fas.fa-chevron-right
                        span.mb-0 #[b Red cableada:] es una red en la que computadoras y otros periféricos se conectan mediante cables para intercambiar archivos y enviar datos a otros dispositivos. A continuación, se presenta una imagen que ilustra un ejemplo de red cableada:
                  .col-md-3
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 Red cableada
                    img(src='@/assets/curso/temas/t1/tab2-img2.svg', alt='')
                .col-md-11.b-b-list.pb-4
                .row.justify-content-around.pt-4
                  .col-md-8.mb-4.mb-md-0
                    ul.lista-ul--color.fa-ul.ps-3.ps-md-4.mb-0
                      li.pb-1
                        i.fas.fa-chevron-right
                        span.mb-0 #[b Red inalámbrica:] es una red donde dos o más dispositivos, como computadoras portátiles o agendas electrónicas, se comunican sin la necesidad de cables. Con esta red, los usuarios pueden mantenerse conectados mientras se desplazan dentro de un área geográfica específica. A continuación, se muestra una imagen representativa de una red inalámbrica:
                  .col-md-3
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 Red inalámbrica
                    img(src='@/assets/curso/temas/t1/tab2-img2-2.svg', alt='')
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Por relación funcional")
              .row.justify-content-around.align-items-center
                .col-md-7.mb-4.mb-md-0
                  ul.lista-ul--color.fa-ul.ps-3.ps-md-4.mb-0
                    li.pb-4.b-b-list.mb-4
                      i.fas.fa-chevron-right
                      span.mb-0 Se trata de una arquitectura o modelo en el que se realizan peticiones a un componente de la red informática denominado servidor, el cual puede estar ubicado en la misma red que quien realiza la petición. Este servidor puede responder o no a la solicitud; si la respuesta es afirmativa, se proporciona un servicio.
                    li
                      i.fas.fa-chevron-right
                      span.mb-0 El modelo #[em Peer-to-peer] se basa en la formación de una red de datos en la que no existen componentes dominantes o que lideren a los demás miembros de la red. Es decir, cada elemento de la red posee los mismos privilegios y restricciones que cualquier otro miembro.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/tab2-img3.svg', alt='')
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Por tecnología")
              .row.justify-content-around.align-items-center
                .col-md-7.mb-4.mb-md-0
                  ul.lista-ul--color.fa-ul.ps-3.ps-md-4.mb-0
                    li.pb-4.b-b-list.mb-4
                      i.fas.fa-chevron-right
                      span.mb-0 #[b Red Punto a Punto:] es aquella donde se conectan parejas individuales de dispositivos terminales y que necesitan #[em routers] intermedios que establezcan rutas apropiadas para el envío de la información.
                    li
                      i.fas.fa-chevron-right
                      span.mb-0 #[b Red #[em Broadcast]:] es una red que transmite los datos por un solo canal de comunicación compartido por todos los dispositivos de la red, este mensaje o paquete se envía a todos los terminales  máquinas de la red, pero únicamente la destinataria puede procesarlo. 
                .col-md-3
                  img(src='@/assets/curso/temas/t1/tab2-img4.svg', alt='')
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Por la direccionalidad")
              .row.justify-content-around
                .col-md-6.mb-4.mb-md-0
                  ul.lista-ul--color.fa-ul.ps-3.ps-md-4.mb-0
                    li.pb-4.b-b-list.mb-4
                      i.fas.fa-chevron-right
                      span.mb-0 #[b Unidireccional o #[em Simplex]:] este modo permite la transmisión de información en una sola dirección, sin que el emisor reciba retroalimentación del receptor. Un ejemplo de esta modalidad es la radiodifusión, en la que el oyente requiere de un receptor de radio, pero dicho dispositivo no envía señales de retorno.
                    li.pb-4.b-b-list.mb-4
                      i.fas.fa-chevron-right
                      span.mb-0 #[b #[em Half-Duplex] o #[em Semi-dúplex]:] esta comunicación permite que la información se transmita en ambos sentidos, pero no simultáneamente. Es decir, uno de los participantes (emisor o receptor) debe esperar mientras el otro transmite. Un ejemplo de este tipo de comunicación son los radios utilizados por la policía.
                    li
                      i.fas.fa-chevron-right
                      span.mb-0 #[b #[em Full-Duplex]:] en este modo, la información se transmite en ambos sentidos de manera simultánea. Un ejemplo de este tipo de transmisión son los teléfonos móviles.
                .col-md-4
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 Full-Dúplex
                  img(src='@/assets/curso/temas/t1/tab2-img5.svg', alt='')
            .bg-white.bx-sh1.py-4.py-md-5(titulo="Por grado de difusión")
              .row.justify-content-around.align-items-center
                .col-md-8.mb-4.mb-md-0
                  ul.lista-ul--color.fa-ul.ps-3.ps-md-4.mb-0
                    li.pb-4.b-b-list.mb-4
                      i.fas.fa-chevron-right
                      span.mb-0 #[b Intranet:] es una red privada destinada a compartir recursos e información exclusivamente con usuarios internos. Se utiliza con fines educativos, comerciales, entre otros.
                    li
                      i.fas.fa-chevron-right
                      span.mb-0 #[b Internet:] es una red de área amplia que interconecta una vasta cantidad de redes heterogéneas, funcionando como una única red de alcance global basada en el protocolo TCP/IP.
                .col-md-2
                  img(src='@/assets/curso/temas/t1/tab2-img6.svg', alt='')


    Separador

    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.6 Topologías de redes

    p.mb-4(data-aos="fade") Para la topología física, se consideran tres formas básicas para el montaje de una red: 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.col-10.col-md-7.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/t1/img3.png", alt="")
      .col-lg-8.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-1")
          .row(titulo="BUS")
            .col-md-7.mb-4.mb-md-0
              p Esta configuración conecta todos los nodos de la red a un único canal de comunicación, lo cual presenta varias desventajas, como la degradación de la señal y el sobre escalamiento, entre otras.
            .col-md-5
              img(src='@/assets/curso/temas/t1/acord-img1.svg', alt='')
          .row(titulo="ANILLO")
            .col-md-7.mb-4.mb-md-0
              p Cada terminal está conectada con la siguiente, y la primera se une a la última, formando así una estructura cerrada. Esta configuración es la razón por la que se denomina anillo.
            .col-md-5
              img(src='@/assets/curso/temas/t1/acord-img2.svg', alt='')
          .row(titulo="ESTRELLA")
            .col-md-7.mb-4.mb-md-0
              p Todos los dispositivos de la red se conectan a un dispositivo central, conocido como nodo, que se encarga de gestionar las comunicaciones entre los terminales o usuarios
            .col-md-5
              img(src='@/assets/curso/temas/t1/acord-img3.svg', alt='')

    p.mb-4(data-aos="fade") La topología lógica se refiere a la forma en que se accede a los datos y recursos de la red. Para el caso de la topología estrella, consideramos:

    .row.justify-content-center
      .col-lg-5.col-md-6.mb-3
        .bg-9.tarjeta.h-100.text-white.text-center.p-4
          img.m-auto.mb-4(src='@/assets/curso/temas/t1/tarj-ico1.svg', alt='' style="max-width: 95px;")
          h5.mb-4 Transmisión de #[em tokens]
          p.mb-0 La comunicación se basa en la transmisión secuencial de #[em tokens] electrónicos a cada terminal. Las redes que emplean esta topología incluyen #[em Token Ring] y FDDI.
      .col-lg-5.col-md-6.mb-3
        .bg-2.tarjeta.h-100.text-white.text-center.p-4
          img.m-auto.mb-4(src='@/assets/curso/temas/t1/tarj-ico2.svg', alt='' style="max-width: 95px;")
          h5.mb-4 #[em Broadcast]
          p.mb-0 En esta configuración, cada dispositivo envía un mensaje a todos los demás miembros de la red. Las operaciones se procesan según el orden de llegada, similar al funcionamiento de #[em Ethernet].


    Separador

    #t_1_7
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.7 Modelo TCP/IP y OSI 

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-10
        .bloque-texto-d.color-acento-contenido.p-4.px-0
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Los protocolos IP (Protocolo de Internet) y TCP (Protocolo de Control de Transmisión) se originaron a principios de 1980 y fueron adoptados por la red ARPANET en 1983, integrada por cientos de computadoras de centros de investigación militar, universidades, y algunas empresas. El #[em e-mail] (#[em electronic mail]) se destacó como el servicio más utilizado, mientras que el sistema operativo más usado fue UNIX, en su versión BSD UNIX, desarrollada por la Universidad de California. A mediados de los ochenta se crea el protocolo TCP/IP con el propósito de tener un lenguaje común a todos los computadores conectados a Internet, con la unión de las redes ARPANET, CSNET y MILNET. El protocolo TCP/IP hace posible entonces, la conexión de dispositivos con marcas y tecnología diferentes por medio del establecimiento de normas y estándares. (p.4)
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Corona (2004)
    
    .row.fondo2-tema1.align-items-center.pb-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-10.fondo3-tema1.p-4.p-lg-5
            .row 
              .col-lg-4.d-none.d-lg-flex
                img.px-lg-3(src="@/assets/curso/temas/t1/img4.svg", alt="")
              .col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  p.mb-0 #[b Figura 2.] Modelo TCP/IP y OSI
                figure
                  img(src='@/assets/curso/temas/t1/fig2.svg', alt='La figura representa estructura de comunicaciones de red se segmenta en niveles que abordan desde la encapsulación de paquetes IP hasta la entrega de mensajes en formatos específicos, como HTML.')

    
    p(data-aos="fade") Iniciando los años ochenta, la Organización Internacional para la Estandarización (ISO, International Standards Organization) desarrolla el modelo de referencia para interconectar sistemas abiertos (OSI, Open Systems Interconnect) para normalizar la manera de comunicarse entre dispositivos de la red. El modelo es importante por el gran paso hacia la interoperabilidad entre dispositivos de red.
    
    p.mb-4(data-aos="fade") El modelo OSI enmarca las comunicaciones de red en siete diferentes capas así: 

    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 3.] CComunicación en red.
        figure
          img(src='@/assets/curso/temas/t1/fig3.svg', alt='La figura representa las comunicaciones de red estas se dividen en niveles: Física, enlace de datos, red, transporte, sesión presentación y aplicación.')

    p(data-aos="fade") El modelo OSI y el TCP/IP sirven como referencia para describir el proceso de comunicación de datos. El TCP/IP es usado para la suite de protocolos TCP/IP, y el OSI se utiliza para la comunicación estándar entre equipos y aplicaciones de diferentes proveedores. Ambos modelos realizan el mismo proceso, pero el modelo TCP/IP utiliza cuatro capas en lugar de siete.

    p.mb-4(data-aos="fade") En la figura siguiente se muestra una comparación entre las capas de los dos modelos.

    .row.fondo2-tema1.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-8.fondo3-tema1.p-4.p-lg-5
            .row 
              .col-12
                .titulo-sexto.color-acento-contenido.mb-3
                  p.mb-0 #[b Figura 4.] Comparación entre las capas de los dos modelos
                figure
                  img(src='@/assets/curso/temas/t1/fig4.svg', alt=' La figura muestra un diagrama que compara los modelos OSI y TCP/IP. El diagrama tiene dos columnas, una para cada modelo. El modelo OSI está a la izquierda y el modelo TCP/IP a la derecha. Cada modelo está dividido en capas, representadas por cilindros. · El modelo OSI tiene 7 capas, de abajo hacia arriba: 1. Física, 2. Acceso al Medio, 3. Red, 4. Transporte, 5. Sesión, 6. Presentación y 7. Aplicación. · El modelo TCP/IP tiene 4 capas, de abajo hacia arriba: 1. Física, 2. Internet, 3. Transporte y 4. Aplicación.')


    Separador

    #t_1_8
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.8 Tecnología #[em Ethernet]

    p Es una serie de estándares establecidos para la implementación de redes de área local o LAN. Para Forouzan (2002), se caracteriza por ser más estable, confiable y rápida en la transmisión de datos, ya que la interferencia con otros dispositivos de la misma red es mínima. Otra ventaja que presenta esta serie de estándares es la velocidad de transmisión pues puede ser del orden de los 100 Gbit/s. Para poder implementar una red tipo #[em Ethernet] es necesario contar con una serie de dispositivos que cumplen diferentes funciones. Algunos de ellos son: enrutadores, #[em switches], cables UTP, #[em bridges], entre otros.

    .row.fondo-tema2.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row

          .bg-5.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
            h3.text-white.mb-0 Objetivos 

          p.mb-4 Los principales objetivos de #[em Ethernet] son consistentes con los que se han convertido en los requerimientos básicos para el desarrollo y uso de redes LAN: 

          .row.justify-content-center.mb-3
            .col-lg-5.col-9.col-md-8.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/temas/t1/img5.png", alt="")
            .col-lg-7.mb-4(data-aos="fade-left")
              ul.lista-ul--color.fa-ul.mb-0
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Simplicidad.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Bajo costo.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Compatibilidad.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Direccionamiento flexible.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Equidad.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Progreso.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Bajo retardo.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Estabilidad.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Mantenimiento.
                li.mb-0
                  i.fas.fa-chevron-right
                  span.mb-0 Arquitectura en capas.

    .bg-5.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 La trama de #[em Ethernet]

    .row.justify-content-center.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        p Los dispositivos de una red #[em Ethernet] intercambian información o datos llamados paquetes #[em Ethernet], cuyo contenido incluye la trama #[em Ethernet] o trama de datos, y a la vez se divide en otros conjuntos de datos. Los registros de datos contienen un código binario con información importante, como direcciones, datos de uso, información de control, y sumas de comprobación.
        p #[em Ethernet] tiene los siguientes tipos:
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 #[em Ethernet:] 10 Base-T, velocidad 10 Mbps
          p.mb-0 #[em Fast Ethernet:] 100 Base-T, velocidad 100 Mbps
          p.mb-0 #[em Gigabit Ethernet]: 1000 Base-X velocidad 1000 Mbps ó 1 Gbps
      .col-lg-5.col-9.col-md-8.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t1/img6.png", alt="")

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
