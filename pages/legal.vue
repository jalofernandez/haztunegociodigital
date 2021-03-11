<template>
  <main class="legal">
    <TheNavbar />
    <section class="hero is-small">
      <div class="hero-body pb-0">
        <div class="container has-text-centered">
          <h1 class="title text-shadow is-size-1 is-size-3-mobile">
            Términos <span class="has-text-success">legales</span>
          </h1>
          <h4 class="subtitle is-size-5 is-size-6-mobile mb-0">
            El siguiente aviso legal se aplica tanto <span class="has-text-weight-medium">a los usuarios que crean o solicitan el servicio como a aquellos que lo consumen</span>. Léelos detenidamente, por favor. Intentaremos ser breves y usar un lenguaje claro.
          </h4>
          <div class="card-bg-img is-agreement"></div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body pt-0">
        <div class="container is-max-desktop">
          <!-- 00 :: navigation sticky bar -->
          <div class="tabs is-centered is-sticky">
            <ul>
              <li
                :class="{ 'is-active': showLink(index) }"
                v-for="(section, index) in sections"
                :key="index"
                @click="toggleClick(index)"
              >
                <a
                  href=""
                  class="navbar-item"
                  v-scroll-to="{ el: '#section-'+section.link, offset: -120 }"
                >
                  <span :class="$mq == 'mobile' ? 'tag is-light is-medium' : null">
                    {{ section.name }}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <!-- 01 :: PRESTADOR Y RESPONSABILIDAD -->
          <article id="section-responsability" class="media responsability mb-6">
            <figure class="media-left is-hidden-mobile">
              <p class="image is-64x64 circle neomorph">
                <img
                  src="/icons/htnd-icon--one.svg"
                  :title="`Creatividad de #${owner.name}: número uno`"
                  :alt="`Creatividad de #${owner.name}: número uno`"
                  width="64"
                  height="64"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <h2 class="subtitle text-shadow is-size-5-mobile">
                  Prestador y <b class="has-text-success">responsable</b>
                </h2>
                <p class="block">
                  <span>#HazTuNegocioDigital</span> se ciñe estrictamente a
                  las leyes que regulan las relaciones entre el <em class="has-text-weight-medium">Prestador</em> (nosotros) y los <em class="has-text-weight-medium">Usuarios</em> (tú) vigentes en España y en Europa que son:
                </p>
                <nav class="level">
                  <a
                    class="level-item has-text-centered"
                    href="https://www.boe.es/doue/2016/119/L00001-00088.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Reglamento 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas con esta plantilla de política de privacidad"
                  >
                    <div>
                      <b>RGPD</b>
                      <p><small>www.boe.es</small></p>
                    </div>
                  </a>
                  <a
                    class="level-item has-text-centered"
                    href="https://boe.es/boe/dias/2018/12/06/pdfs/BOE-A-2018-16673.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales"
                  >
                    <div>
                      <b>LOPDGDD</b>
                      <p><small>www.boe.es</small></p>
                    </div>
                  </a>
                  <a
                    class="level-item has-text-centered"
                    href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico en el blog"
                  >
                    <div>
                      <b>LSSI</b>
                      <p><small>www.boe.es</small></p>
                    </div>
                  </a>
                </nav>
                <p class="block">
                  El <em class="has-text-weight-medium">Prestador</em> del presente sitio
                  web, <em>haztunegociodigital.com</em>, y su servicio asociado es: <span class="has-text-weight-medium">@jalofernandez</span> (<a
                    class="has-text-link"
                    href="https://jalofernandez.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Página personal y portfolio de: @jalofernandez designer + coder"
                  >
                    jalofernandez.com
                  </a>), que manifesta explicitamente sus datos identificativos para que el <em class="has-text-weight-medium">Usuario</em> pueda comprobar
                  la veracidad y valided de los mismos:
                </p>
                <blockquote class="quote neomorph">
                  <p><b class="pr-1">Prestador:</b> Javier Lorenzo Fernández (@jalofernandez)</p>
                  <p><b class="pr-1">DNI:</b> 53385793X</p>
                  <!-- <p>
                    <b>Registro mercantil:</b> ¿?
                  </p>-->
                  <p>
                    <b class="pr-1">Domicilio:</b> Calle Hierro, nº6, escalera 3 2º2, 28343,
                    Valdemoro, Madrid.
                  </p>
                  <p>
                    <b class="pr-1">Correo electrónico:</b>
                    <a
                      class="has-text-weight-medium"
                      href="mailto:jalofernandez@gmail.com"
                      title="Contactar vía correo electrónico con #HazTuNegocioDigital en: jalofernandez@gmail.com"
                      >jalofernandez@gmail.com</a
                    >
                  </p>
                </blockquote>
                <p class="block"></p>
                  Accediendo y navegando por este sitio web ya adquieres la condición de
                  <em class="has-text-weight-medium">"Usuario"</em> que así lo dice la ley.
                </p>
                <p class="block">
                  Además nosotros, osea el <em class="has-text-weight-medium">Prestador</em> (<em>haztunegociodigital.com</em>), somos proveedores de
                  <span class="has-text-weight-medium">servicios y productos digitales</span> y ofrecemos soluciones
                  del ámbito de internet como: sitios web, landing pages, ecommerces, webapps, blogs, social media,
                  diseño e impresión digital...
                </p>
              </div>
            </div>
          </article>

          <!-- 02 :: POLÍTICA DE PRIVACIDAD -->
          <article id="section-privacy" class="media privacy mb-6">
            <figure class="media-left is-hidden-mobile">
              <p class="image is-64x64 circle neomorph">
                <img
                  src="/icons/htnd-icon--two.svg"
                  :title="`Creatividad de #${owner.name}: número uno`"
                  :alt="`Creatividad de #${owner.name}: número uno`"
                  width="64"
                  height="64"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <h2 class="subtitle text-shadow is-size-5-mobile">
                  Política de <b class="has-text-success">privacidad</b>
                </h2>
                <p class="block">
                  Todos los datos que tú como <em class="has-text-weight-medium">Usuario</em> nos facilites a través de las vías de contacto actualmente existentes:
                  Whatsapp, teléfono, correo electrónico o redes sociales, serán
                  <!-- incorporados a un fichero automatizado convenientemente registrado ante la
                  <em>Agencia Española de Protección de Datos (AGPD)</em> y sobre el que podrá ejercer sus derechos
                  reconocidos legalmente como son el acceso a estos datos, su rectificación, su cancelación y la oposición a los
                  mismos escribiendo un correo electrónico a:-->
                  tratados anónimamente y sobre los cuales podrás ejercer tus derechos legales de: acceso a estos datos, su rectificación, su cancelación y la oposición a los
                  mismos tal y como te explicaremos un poco más adelante.
                </p>
                <p class="block">Los <span class="has-text-weight-medium">datos recabados tienen las siguientes finalidades</span>: </p>
                <blockquote class="quote neomorph">
                  <p class="block">
                    Asegurar una gestión óptima de los <span class="has-text-weight-medium">servicios y productos</span> aquí ofertados y/o solicitados por el
                    <em class="has-text-weight-medium">Usuario</em>.
                  </p>
                  <p class="block"> Comunicación y resolución de <span class="has-text-weight-medium">consultas</span>. </p>
                  <p class="block">
                    Envío de <span class="has-text-weight-medium">publicidad</span> e información comercial por medios electrónicos, acerca de los productos y servicios de
                    <em>haztunegociodigital.com</em> y/o <em>jalofernandez.com</em> así como documentación relativa a ambos.
                  </p>
                  <p class="block">
                    Mejorar la <span class="has-text-weight-medium">experiencia de Usuario / UX</span> analizando cómo navegas por este sitio web mediante herramientas como 
                    <a
                      href="https://analytics.google.com/analytics/web/provision/#/provision"
                      class="has-text-weight-medium"
                      title="Ir al website de Google Analytics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Google Analytics</span>
                    </a>. Todo ello a través de <em>cookies</em> descritas en la
                    <a
                      href="#"
                      class="has-text-weight-medium"
                      title="Ir a la sección de Política de Cookies en #HazTuNegocioDigital"
                      v-scroll-to="{ el: '#section-cookies', offset: -120 }"
                    >
                      <span>política de cookies</span>
                    </a>.
                  </p>
                </blockquote>
                <!-- <p class="block">
                  En la <b>recogida y el tratamiento de los datos de carácter personal</b> se han adoptado las
                  <b>medidas de seguridad</b> adecuadas para evitar la pérdida, el acceso no autorizado o la manipulación de los
                  mismos, de acuerdo con lo establecido en el <em>Real Decreto 1720/2007, de 21 de diciembre</em>.
                </p> -->
                <p class="block">
                  Como <em class="has-text-weight-medium">Prestador</em> nos comprometemos a <span class="has-text-weight-medium">proteger la información confidencial</span>
                  facilitada por el <em class="has-text-weight-medium">Usuario</em> haciendo el uso extrictamente necesario de ellos según lo expuesto en el párrafo anterior.
                  Los datos de carácter personal que nos facilites nunca serán utilizados para prestar servicios a terceros que NO estén especificados en este <em>Aviso Legal</em>.
                </p>
                <p class="block">
                  Como <em class="has-text-weight-medium">Usuario</em> certificas que eres <b class="has-text-success">mayor de 14 años</b>
                  y que por lo tanto posees la capacidad legal necesaria para la prestación del consentimiento al tratamiento de tus datos de carácter personal y todo ello,
                  de conformidad con lo establecido en la presente <em>Política de Privacidad</em>. De no ser así contacta con tu tutor o un
                  adulto mayor de edad para que te valide o cierra esta pestaña del navegador y abre Netflix...
                </p>
                <p class="block">
                  Como <em class="has-text-weight-medium">Usuario</em> puedes ejercitar los <span class="has-text-weight-medium">derechos de acceso</span>,
                  <span class="has-text-weight-medium">rectificación</span>, <span class="has-text-weight-medium">cancelación</span> y 
                  <span class="has-text-weight-medium">oposición</span> sobre <span class="has-text-weight-medium">tus datos personales</span> así como el de
                  <span class="has-text-weight-medium">revocación del consentimiento</span> para cualquier de las finalidades anteriormente descritas, enviando un
                  correo electrónico a
                  <a
                    href="mailto:legal@haztunegociodigital.com?subject=Sobre%20el%20tratamiento%20de%20mis%20datos"
                    title="Tratamiento de datos personales en #HazTuNegocioDigital"
                  >
                    <span>legal@haztunegociodigital.com</span>
                  </a>
                  indentificándote e indicando el derecho que deseas ejercitar.
                </p>
                <p class="block">
                  Como <em class="has-text-weight-medium">Prestador</em> cumplimos la
                  <em>Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico</em>
                  así que en caso de querer remitirte infomación comercial vía correo electrónico solicitaremos previamente tu aprobación
                  para el tratamiento de tu correo electrónico con fines comerciales. Siempre podrás <em>"darte de baja"</em> de manera automática en los distintos
                  correos electrónicos que recibas como suscriptor de nuestra lista de correo o enviándonos un email a:
                  <a
                    href="mailto:legal@haztunegociodigital.com?subject=Solicitud%20de%20baja%20en%20listade%20%20correo"
                    title="Solicitud de baja de correos publicitarios de #HazTuNegocioDigital"
                  >
                    <span>legal@haztunegociodigital.com</span>
                  </a>
                </p>
                <p class="block">
                  Como <em class="has-text-weight-medium">Usuario</em> <b>responderás de la veracidad de los datos que nos facilites</b> y nosotros, como responsables
                  de <em>haztunegociodigital.com</em>, nos reservamos el derecho a excluir de los
                  servicios prestados en este sitio web a todo <em class="has-text-weight-medium">Usuario</em> que haya facilitado datos falsos o suplantaciones indebidas.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Finalidades, tratamiento y conservación
                </h3>
                <p class="block">
                  El presente sitio web, <em>haztunegociodigital.com</em>, no recaba datos de caracter personal a parte de los
                  proporcionados por el propio <em class="has-text-weight-medium">Usuario</em>. Los datos de carácter personal proporcionados por el
                  <em class="has-text-weight-medium">Usuario</em> a través de Whatsapp, teléfono, correo electrónico o redes sociales
                  serán tratados por el <em class="has-text-weight-medium">Prestador</em>, que ostentamos la condición de Responsables del tratamiento, para las
                  finalidades que se indican a continuación.
                </p>
                <p class="block">
                  En esta tabla desglosamos el motivo por el que tratamos tus datos y durante cuánto tiempo los
                  conservaremos :
                </p>
                <div class="table-container">
                  <table class="table is-bordered is-narrow is-fullwidth is-size-6">
                    <thead>
                      <tr>
                        <th>Finalidad</th>
                        <th>Base jurídica</th>
                        <th>Plazos de conservación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Comprobar la identidad y garantizar la seguridad de los Usuarios así como facilitar la gestión de
                          nuestro servicio.
                        </td>
                        <td>Interés legítimo del responsable del tratamiento.</td>
                        <td>
                          Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                          Puedes darte de baja por teléfono: +34 696 68 27 91
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Gestionar y responder las solicitudes de información realizadas telefónicamente, a través de email o
                          de cualquiera de nuestras redes sociales o Whatsapp.
                        </td>
                        <td>Interés legítimo del responsable del tratamiento.</td>
                        <td>
                          Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                          Puedes darte de baja por teléfono: +34 696 68 27 91
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Para la gestión de la seguridad de la información y del ejercicio de los derechos en materia de
                          privacidad en cumplimiento del RGPD.
                        </td>
                        <td>Cumplimiento del RGPD.</td>
                        <td>
                          Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                          Puedes darte de baja por teléfono: +34 696 68 27 91
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Transferencias internacionales
                </h3>
                <p class="block">
                  Te informamos que, por tu seguridad, tus datos son tratados en España y las aplicaciones son realizadas por
                  proveedores de desarrollo de software certificados y con seguridad garantizada.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Derechos de los usuarios
                </h3>
                <p class="block">
                  Como <em class="has-text-weight-medium">Usuario</em> puedes ejercitar los derechos que se detallan
                  a continuación ante el <em class="has-text-weight-medium">Prestador</em> a través de la
                  <nuxt-link to="/contacto" class="has-text-weight-medium pr-1" :title="`Ir a la página de contacto de #${owner.name}`">
                    <span>página de contacto</span> </nuxt-link>
                  o bien a la dirección de correo electrónico:
                  <a
                    href="mailto:legal@haztunegociodigital.com?subject=Solicitud%20de%20baja%20en%20listade%20%20correo"
                    title="Solicitud de baja de correos publicitarios de #HazTuNegocioDigital"
                  >
                    <span>legal@haztunegociodigital.com</span>
                  </a>
                  a la atención de
                  <span class="has-text-weight-medium">jalofernandez</span>. La solicitud deberá contener copia de tu DNI u otro documento identificativo
                  legalmente equivalente, así como el contenido mínimo previsto en la normativa aplicable. Si la solicitud no reúne los
                  requisitos especificados, <em>#HazTuNegocioDigital</em> podrá requerir su subsanación. No se exigirá
                  contraprestación alguna por el ejercicio de los derechos.
                </p>
                <div class="table-container">
                  <table class="table is-bordered is-narrow is-fullwidth is-size-6">
                    <thead>
                      <tr>
                        <th>Derecho</th>
                        <th>¿En qué consiste?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Derecho de acceso</td>
                        <td>Consultar qué datos personales tenemos sobre Usted.</td>
                      </tr>
                      <tr>
                        <td>Derecho de rectificación</td>
                        <td>Modificar los datos personales que tenemos sobre Usted cuando sean inexactos.</td>
                      </tr>
                      <tr>
                        <td>Derecho de oposición</td>
                        <td>Solicitar que no tratemos tus datos personales para algunas finalidades concretas.</td>
                      </tr>
                      <tr>
                        <td>Derecho de supresión</td>
                        <td>Solicitar que eliminemos sus datos personales.</td>
                      </tr>
                      <tr>
                        <td>Derecho de limitación</td>
                        <td>Solicitar que limitemos el tratamiento de sus datos personales.</td>
                      </tr>
                      <tr>
                        <td>Derecho de portabilidad</td>
                        <td>
                          Obtener en un formato electrónico los datos personales que nos haya suministrado y los que se hayan
                          generado en el contexto del servicio.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  En caso de no quedar conforme en el ejercicio de sus derechos, podrá presentar una reclamación ante la
                  autoridad de control en materia de protección de datos,
                  <em>la Agencia Española de Protección de Datos</em>, cuya página web es:
                  <a
                    class="has-text-weight-medium"
                    href="https://www.aepd.es/es"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ir al website de la Agencia Española de Protección de Datos"
                  >
                    <span>www.agpd.es</span>
                  </a>
                </p>
              </div>
            </div>
          </article>

          <!-- 03 :: CONDICIONES DE USO -->
          <article id="section-terms" class="media terms mb-6">
            <figure class="media-left is-hidden-mobile">
              <p class="image is-64x64 circle neomorph">
                <img
                  src="/icons/htnd-icon--three.svg"
                  :title="`Creatividad de #${owner.name}: número uno`"
                  :alt="`Creatividad de #${owner.name}: número uno`"
                  width="64"
                  height="64"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <h2 class="subtitle text-shadow is-size-5-mobile">
                  Condiciones de <b class="has-text-success">uso</b>
                </h2>
                <p class="block">
                  La utilización de este sitio web,
                  <em>haztunegociodigital.com</em>, te otorga la condición de
                  <em class="has-text-weight-medium">Usuario</em>
                  implicando la
                  <span class="has-text-weight-medium has-text-success">aceptación completa de todas las cláusulas y condiciones de uso</span> incluidas en la presente página
                  de <em>aviso legal</em> así como las condiciones particulares que pudieran establecerse entre las dos partes, <em class="has-text-weight-medium">Prestador</em> (<em>nosotros</em>) y Usuario (<em>tú</em>), en relación con la prestación de los
                  servicios previamente acordados.
                </p>
                <p class="block">
                  Si no estuvieras de acuerdo con todas y cada una de estas cláusulas y condiciones abstente de utilizar este
                  sitio web.
                </p>
                <p class="block">
                  El acceso y navegación por este sitio web es libre y gratuito y no supone, en modo alguno, el inicio de una relación comercial con el
                  <em class="has-text-weight-medium">Prestador</em>.
                </p>
                <p class="block">
                  Como <em class="has-text-weight-medium">Usuario</em>, estás obligado y comprometido a NO utilizar cualquiera de los contenidos del
                  sitio web con fines o efectos ilícitos, prohibidos en este
                  <em>aviso legal</em> o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de
                  cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los
                  contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en
                  cualquier equipo informático propios o contratados por el <em class="has-text-weight-medium">Prestador</em>, de otros usuarios o de cualquier <em class="has-text-weight-medium">Usuario</em>
                  de Internet.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Responsabilidad
                </h3>
                <p class="block">
                  El <em class="has-text-weight-medium">Prestador</em> no será responsable de las opiniones vertidas por los <span class="has-text-weight-medium">Usuarios</span> o terceras personas ajenas
                  <em>#HazTuNegocioDigital</em> a través de redes sociales, blog u otras herramientas de participación, conforme a lo previsto en la normativa de
                  aplicación.
                </p>
                <p class="block">
                  El <em class="has-text-weight-medium">Prestador</em> se reserva el derecho de retirar todos aquellos comentarios o contenido fraudulento y/o
                  manipulado que vulneren la legislación vigente, lesivos de los derechos o intereses de terceros, o que, a su
                  juicio, no resulten adecuados para su publicación. En caso de que, como <em class="has-text-weight-medium">Usuario</em>, consideres que existe en el
                  sitio web algún contenido que pudiera ser susceptible de esta clasificación, rogamos nos lo notifiques
                  inmediatamente escribiéndonos un correo electrónico a la siguiente dirección de email:
                  <a
                    href="mailto:legal@haztunegociodigital.com?subject=Denuncia%20de%20contenido"
                    title="Denunciar contenido inapropiado en la web de #HazTuNegocioDigital"
                  >
                    <span>legal@haztunegociodigital.com</span>
                  </a>
                </p>
                <p class="block">
                  El <em class="has-text-weight-medium">Prestador</em> se reserva el derecho a modificar, cancelar, restringir o suspender el contenido del sitio web,
                  los links y vínculos o la información obtenida a través del sitio web, sin necesidad de previo aviso.
                </p>
                <p class="block">
                  Este sitio web, <em>haztunegociodigital.com</em>, ha sido desarrollado, revisado y testeado para que <span class="has-text-weight-medium">funcione correctamente</span>.
                  En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. No obstante, el
                  <em class="has-text-weight-medium">Prestador</em> no descarta la posibilidad de que acontezcan causas de fuerza mayor como: catástrofes naturales, huelgas,
                  pandemias o circunstancias ajenas a nuestra organización que imposibiliten el acceso a este sitio web.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Medidas de seguridad
                </h3>
                <p class="block">
                  Cualquier dato personal que facilites al <em class="has-text-weight-medium">Prestador</em> puede ser almacenado en bases de datos, cuya titularidad
                  corresponde en exclusiva al <em class="has-text-weight-medium">Prestador</em> pero que se prestan a través de un tercero, siempre un proveedor de servicios
                  de intenet reputado y homologado, que asume todas las medidas de índole técnica, organizativa y de
                  seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las
                  mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
                </p>
                <p class="block">
                  Matizaremos que las medidas de seguridad de los sistemas informáticos en Internet
                  aunque son extremadamente fiables no son infalibles y que el <em class="has-text-weight-medium">Prestador</em> no puede garantizar al 100%
                  la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos 
                  (<em>software y hardware</em>) del <em class="has-text-weight-medium">Usuario</em> o en tus documentos electrónicos y ficheros contenidos en los
                  mismos. Dicho esto, el <em class="has-text-weight-medium">Prestador</em> pone todos los medios necesarios y toma las medidas de seguridad oportunas para
                  evitar la presencia de estos elementos dañinos.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Enlaces de interés a otros sitios Web
                </h3>
                <p class="block">
                  El <em class="has-text-weight-medium">Prestador</em> puede proporcionarle acceso a sitios web de terceros mediante enlaces con la finalidad de
                  informar sobre la existencia de otras fuentes de información en Internet en las que podrá ampliar los datos o servicios ofrecidos en el sitio web.
                </p>
                <p class="block">
                  Estos enlaces a otros sitios web no suponen en ningún caso una sugerencia o recomendación para que visites las
                  páginas web de destino. Estas están fuera del control del <em class="has-text-weight-medium">Prestador</em>, por lo que
                  <em class="has-text-weight-medium">Prestador</em> no es responsable del contenido de los sitios web vinculados, ni de los links o enlaces ubicados en él,
                  ni del resultado que obtenga al seguir los enlaces.
                </p>
                <p class="block">
                  La existencia de enlaces no implica la existencia de relaciones entre <em class="has-text-weight-medium">Prestador</em> y el
                  propietario/s del sitio en el que se establezca el enlace/s, ni la aceptación o aprobación por parte del <em class="has-text-weight-medium">Prestador</em>
                  de sus contenidos o servicios.
                </p>
                <p class="block">
                  Si accedes a un sitio web externo desde un enlace que encuentres en <em>haztunegociodigital.com</em> deberás leer la propia
                  <em>política de privacidad</em> propia del otro sitio web que visite pudiendo ser esta muy diferente a la de este sitio web.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Contratación de terceros
                </h3>
                <p class="block">
                  El <em class="has-text-weight-medium">Prestador</em> podrá
                  <b>contratar y/o subcontratar con terceras entidades</b> todo lo que estime oportuno en relación con la
                  realización de cualesquiera o todas las actividades necesarias para la gestión, mantenimiento, actualización
                  y/o mejora de los Servicios. Dichas entidades podrían tener la facultad de desactivar los servicios y, en
                  consecuencia, interrumpir el acceso al mismo para realizar las tareas contratadas.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Propiedad intelectual
                </h3>
                <p class="block">
                  Este sitio web, <em>haztunegociodigital.com</em>, incluyendo a título enunciativo pero no limitativo su codificación, edición,
                  compilación y demás elementos necesarios para su funcionamiento, así como los diseños, logotipos, imagen corporativa, texto y gráfismos
                  son propiedad de 
                  <a
                    class="has-text-link"
                    href="https://jalofernandez.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Página personal y portfolio de: @jalofernandez designer + coder"
                  >
                    jalofernandez.com
                  </a>
                  . A él corresponde el ejercicio exclusivo de los derechos de explotación de los mismos en cualquier forma
                  y, en especial, los derechos de reproducción, distribución, comunicación pública y transformación, de acuerdo
                  con la legislación española y de la Unión Europea aplicable.
                </p>
                <p class="block">
                  NO está permitida la reproducción total o parcial, uso, explotación y distribución con fines comerciales de cualquiera de los recursos materiales, 
                  artículos o programación incluida en el presente sitio web, <em>haztunegociodigital.com</em>.
                </p>
                <p class="block">
                  El <em class="has-text-weight-medium">Prestador</em> como titular de
                  <em>#HazTuNegocioDigital</em> autoriza expresamente a que terceros puedan redirigir directamente a los contenidos
                  concretos de sitio web: <em>haztunegociodigital.com</em>.
                </p>
                <p class="block">
                  Para realizar cualquier tipo de observación como posibles incumplimientos de los derechos de propiedad
                  intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puedes hacerlo a través
                  de nuestra dirección de correo electrónico:
                  <a
                    href="mailto:legal@haztunegociodigital.com?subject=Denuncia%20incumplimiento%20derechos%20de%20propiedad%20intelectual"
                    title="Escríbenos para denunciar incumplimientos de los derechos de propiedad intelectual en la web de #HazTuNegocioDigital"
                  >
                    <span>legal@haztunegociodigital.com</span>
                  </a>
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Derecho de exclusión
                </h3>
                <p class="block">
                  El <em class="has-text-weight-medium">Prestador</em> se reserva el derecho a denegar o retirar el acceso a <em>haztunegociodigital.com</em> 
                  y los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos <em class="has-text-weight-medium">Usuarios</em> 
                  que incumplan cualquiera de las condiciones de este <em>aviso legal</em>.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Jurisdicción
                </h3>
                <p class="block">
                  Este <em>aviso legal</em> se rige íntegramente por la <span class="has-text-weight-medium">legislación española</span>.
                </p>
                <p class="block">
                  Siempre que no haya una norma que obligue a otra cosa, para cuantas cuestiones se susciten sobre la
                  interpretación, aplicación y cumplimiento de este
                  <em>aviso legal</em>, así como de las reclamaciones que puedan derivarse de su uso, las partes acuerdan
                  someterse a los <span class="has-text-weight-medium">jueces</span> y <span class="has-text-weight-medium">tribunales</span> de la <span class="has-text-weight-medium">Comunidad Autónoma de Madrid</span>, con renuncia
                  expresa de cualquier otra jurisdicción que pudiera corresponderles.
                </p>

                <!-- INFO: incorporar cuando haya productos o servicios por los que cobrar €!!
                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Condiciones de Venta
                </h3>
                <p class="block">
                  En este apartado detallarás los pasos que debe realizar el <em class="has-text-weight-medium">Usuario</em> para completar una compra y las condiciones a las que ha de someterse.
                </p>-->

                <!-- INFO: incorporar cuando haya programas de afiliación, y/o anuncios patrocinados €!!
                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Enlaces de Afiliados y anuncios patrocinados
                </h3>
                <p class="block">
                  El sitio Web ofrece contenidos patrocinados, anuncios y/o enlaces de afiliados.
                </p>
                <p class="block">
                  La información que aparece en estos enlaces de afiliados o los anuncios insertados, son facilitados por los propios anunciantes, por lo que <em class="has-text-weight-medium">Prestador</em> no se hace responsable de posibles inexactitudes o errores que pudieran contener los anuncios, ni garantiza en modo alguno la experiencia, integridad o responsabilidad de los anunciantes o la calidad de sus productos y/o servicios.
                </p>-->

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Contacto
                </h3>
                <p class="block">
                  En caso de que tengas cualquier duda o desees realizar cualquier comentario o consulta sobre sobre este sitio web, puedes enviar un mensaje de correo electrónico a la dirección:
                  <a
                    href="mailto:legal@haztunegociodigital.com"
                    title="Escríbenos un email al departamento legal de #HazTuNegocioDigital"
                  >
                    <span>legal@haztunegociodigital.com</span>
                  </a>
                </p>

              </div>
            </div>
          </article>

          <!-- 04 :: POLÍTICA DE COOKIES -->
          <article id="section-cookies" class="media cookies mb-6">
            <figure class="media-left is-hidden-mobile">
              <p class="image is-64x64 circle neomorph">
                <img
                  src="/icons/htnd-icon--four.svg"
                  :title="`Creatividad de #${owner.name}: número uno`"
                  :alt="`Creatividad de #${owner.name}: número uno`"
                  width="64"
                  height="64"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <h2 class="subtitle text-shadow is-size-5-mobile">
                  Política de <b class="has-text-success">cookies</b>
                </h2>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-3">
                  ¿Por qué hay que informar sobre las cookies?
                </h3>
                <p class="block">
                  El reglamento LSSI-CE,
                  <a
                    href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
                    title="Publicación oficial del BOE sobre la Ley de la sociedad de la información y del comercio electrónico"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <em>Ley de la sociedad de la información y del comercio electrónico</em>
                  </a>,
                  obliga los porpietarios de sitios web, blogs o cualquier aplicación que descargue en tu navegador
                  cookies de terceros a informar al <em class="has-text-weight-medium">Usuario</em> sobre <span class="has-text-weight-medium">el tipo de cookies, la duración y la
                  finalidad</span> de cada una de ellas.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  ¿Y las cookies qué son?
                </h3>
                <p class="block">
                  Una cookie es un pequeño fichero que permite que el sitio web por el que está navegando recuerde información sobre su visita. Estas cookies son instaladas en su
                  navegador por cada web con la única finalidad de facilitar su próxima visita y hacer que el sitio web resulte más útil.
                </p>
                <p class="block">
                  Las cookies <span class="has-text-weight-medium">NO almacenan información sensible sobre ti</span> como tarjetas de crédito o datos bancarios,
                  fotografías o información personal. Los datos que guardan son de carácter técnico, estadísticos,
                  personalización de contenidos, etc. La información recogida por las cookies es anónima.
                </p>
                <p class="block">
                  Las cookies <span class="has-text-weight-medium">NO son virus</span>, ni troyanos, ni spam, ni spyware, ni abren molestas ventanas emergentes
                  (pop-ups)... Sólo contribuyen a tener una mejor experiencia de navegación para el <em class="has-text-weight-medium">Usuario</em>.
                </p>
                <p class="block">
                  La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten
                  o impiden en los ajustes de seguridad las cookies temporales o memorizadas. Más adelante explicaremos cómo
                  gestionarlas.
                </p>
                <p class="block">
                  Informarte que si continuas navegando y/o pulsas el botón "aceptar" del banner de aviso de Cookies,
                  <span class="has-text-weight-medium">estarás consintiendo el empleo de estas cookies</span> (
                  <small>
                    <em
                      >artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico</em
                    > </small
                  >).
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  ¿Cuántos y qué tipos de cookies existen?
                </h3>
                <p class="block">
                  Hay <span class="has-text-weight-medium">3 clasificaciones</span> por tipo de cookies:
                </p>
                <p class="is-size-6">
                  1. Según <b>quién las gestione</b>:
                </p>
                <blockquote class="quote neomorph">
                  <p class="block">
                    Cookies <b>propias</b> o aquellas generadas y gestionadas por la propia página o dominio que está visitando.
                  </p>
                  <p class="block">
                    Cookies <b>de terceros</b> o aquellas generadas por servicios o proveedores externos como las que generará
                    un chatbot, una herramienta de analítica web o las redes sociales de turno.
                  </p>
                </blockquote>
                <p class="is-size-6">
                  2. Según <b>el tiempo que permanezcan almacenadas</b>:
                </p>
                <blockquote class="quote neomorph">
                  <p class="block">
                    Cookies <b>sesión</b> o aquellas que se generarán y almacenarán tu información de navegación, permaneciendo
                    activas hasta que abandones la página y cierres el navegador.
                  </p>
                  <p class="block">
                    Cookies <b>persistentes</b> o aquellas cuyos datos siguen almacenados aunque abandones la página y pueden
                    ser tratados durante un periodo de tiempo que puede ir de unos minutos a varios años según haya definido
                    previamente el responsable de la cookie.
                  </p>
                </blockquote>
                <p class="is-size-6">
                  3. Según <b>la finalidad de los datos obtenidos</b>:
                </p>
                <blockquote class="quote neomorph">
                  <p class="block">
                    Cookies
                    <b>técnicas</b> o aquéllas que permiten al <em class="has-text-weight-medium">Usuario</em> la utilización de las diferentes opciones o servicios que
                    existan en la web como: identificar la sesión, acceder a partes de acceso restringido, recordar los
                    elementos que integran un pedido, realizar el proceso de compra de un pedido...
                  </p>
                  <p class="block">
                    Cookies de
                    <b>personalización</b> o aquéllas que permiten recordar las preferencias del <em class="has-text-weight-medium">Usuario</em> como: el idioma, el
                    tipo de navegador a través del cual accede al servicio, etc.
                  </p>
                  <p class="block">
                    Cookies de
                    <b>análisis</b> o aquéllas que permiten la medición y análisis estadístico de la utilización que hacen los
                    usuarios del servicio con el fin de mejorar la oferta de productos o servicios que se le ofrecen.
                  </p>
                  <p class="block">
                    Cookies
                    <b>publicitarias</b> o aquéllas que permiten gestionar de forma eficaz la oferta de los espacios
                    publicitarios para así encajar el contenido del anuncio al contenido de la página web.
                  </p>
                  <p class="block">
                    Cookies de
                    <b>publicidad comportamental</b> o aquéllas que muestran publicidad en función de tus hábitos de navegación,
                    tu país de procedencia, idioma, etc.
                  </p>
                </blockquote>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  ¿Qué cookies utilizamos aquí?
                </h3>
                <p class="block">
                  Aquí sólo usamos cookies para analizar el tráfico y establecer estadísticas de uso. Además, compartimos información sobre el uso que haga del
                  sitio web con nuestros partners de redes sociales y análisis web, todos ellos de más que conocidos (Google,
                  LinkedIn...) quienes pueden combinarla con otra información que ellos hayan recopilado a partir del uso que tú
                  hayas hecho de sus servicios (con tu cuenta personal de LinkedIn, por ejemplo).
                </p>
                <p class="block">Eso sí, en ningún caso se van a utilizar cookies que comprometan tu privacidad.</p>
                <p class="block">
                  Esta es la <span class="has-text-weight-medium">relación de cookies</span> que usa <span>#HazTuNegocioDigital</span>:
                </p>
                <div class="table-container">
                  <table class="table is-bordered is-narrow is-fullwidth is-size-6">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Temporalidad</th>
                        <th>Titularidad</th>
                        <th>Finalidad</th>
                        <th>Dominio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- <tr>
                        <td>__cfduid</td>
                        <td>Técnica de terceros</td>
                        <td>Persistente</td>
                        <td>CloudFlare, Inc.</td>
                        <td>
                          Identificar tráfico web de confianza. No corresponde a ningún id de <em class="has-text-weight-medium">Usuario</em> en la aplicación web, ni
                          guarda ningún dato personal identificable.
                        </td>
                        <td>cloudfare.com</td>
                      </tr> -->
                      <!-- <tr>
                        <td>__hstc</td>
                        <td>Técnica de terceros</td>
                        <td>Persistente</td>
                        <td>HubSpot, Inc.</td>
                        <td>
                          La cookie principal para seguimiento de los visitantes. Contiene el dominio, utk, marca de tiempo
                          inicial (primera visita), marca de tiempo más reciente (última visita), marca de tiempo actual (esta
                          visita) y número de sesión (aumenta para cada sesión posterior).
                        </td>
                        <td>hubspot.com</td>
                      </tr> -->
                      <!-- <tr>
                        <td>hubspotutk</td>
                        <td>Estrictamente necesaria de terceros</td>
                        <td>13 meses</td>
                        <td>HubSpot, Inc.</td>
                        <td>
                          se usa para hacer seguimiento de la identidad de un visitante. Se pasa a HubSpot en el envío de
                          formularios y se usa al eliminar la duplicación de contactos.
                        </td>
                        <td>hubspot.com</td>
                      </tr> -->
                      <!-- <tr>
                        <td>__hssrc</td>
                        <td>Estrictamente necesaria de terceros</td>
                        <td>Sesión</td>
                        <td>HubSpot, Inc.</td>
                        <td>
                          Determinar si el visitante ha reiniciado su navegador. Si esta cookie no existe cuando HubSpot
                          administra cookies, se considera una nueva sesión.
                        </td>
                        <td>hubspot.com</td>
                      </tr> -->
                      <!-- <tr>
                        <td>__hssc</td>
                        <td>Estrictamente necesaria de terceros</td>
                        <td>30 minutos</td>
                        <td>HubSpot, Inc.</td>
                        <td>
                          Seguimiento de las sesiones. Esto se utiliza para determinar si HubSpot debería aumentar el número de
                          sesión y las marcas de tiempo en la cookie __hstc. Contiene el dominio, el conteo de vistas viewCount
                          (se incrementa con cada vista de página en una sesión) y la marca de tiempo de inicio de una sesión.
                        </td>
                        <td>hubspot.com</td>
                      </tr> -->
                      <!-- <tr>
                        <td>messagesUtk</td>
                        <td>Estrictamente necesaria de terceros</td>
                        <td>13 meses</td>
                        <td>HubSpot, Inc.</td>
                        <td>
                          Para reconocer a los visitantes que chatean contigo utilizando la herramienta de mensajes. Si el
                          visitante deja tu sitio antes de que se agregue como un contacto, esta cookies se asociará con su
                          navegador. Si chateas con un visitante que luego regresa a tu sitio en el mismo navegador que ya tiene
                          cookies, la herramienta de mensajes cargará su historial de conversaciones.
                        </td>
                        <td>hubspot.com</td>
                      </tr> -->
                      <tr>
                        <td>_ga</td>
                        <td>Análisis de terceros</td>
                        <td>2 años</td>
                        <td>Google Analytics</td>
                        <td>Se usa para distinguir <em class="has-text-weight-medium">Usuarios</em>.</td>
                        <td>google.com</td>
                      </tr>
                      <tr>
                        <td>_gid</td>
                        <td>Análisis de terceros</td>
                        <td>24 horas</td>
                        <td>Google Analytics</td>
                        <td>Se usa para distinguir <em class="has-text-weight-medium">Usuarios</em>.</td>
                        <td>google.com</td>
                      </tr>
                      <tr>
                        <td>_gat</td>
                        <td>Análisis de terceros</td>
                        <td>1 minuto</td>
                        <td>Google Analytics</td>
                        <td>Se usa para limitar el porcentaje de solicitudes.</td>
                        <td>google.com</td>
                      </tr>
                      <!-- <tr>
                        <td>i18n_redirected</td>
                        <td>Técnica propia</td>
                        <td>Persistente</td>
                        <td>@jalofernandez</td>
                        <td>Mantener idioma elegido por el ususario.</td>
                        <td>haztunegociodigital.com</td>
                      </tr> -->
                      <!-- <tr>
                        <td>cookiesConsent</td>
                        <td>Técnica propia</td>
                        <td>Persistente</td>
                        <td>@jalofernandez</td>
                        <td>
                          Guardar el consentimiento y aceptación de la política de cookies por parte del <em class="has-text-weight-medium">Usuario</em> y no volver a
                          mostrar el banner de alerta sobre las cookies.
                        </td>
                        <td>haztunegociodigital.com</td>
                      </tr> -->
                      <!-- <tr>
                        <td>auth.*</td>
                        <td>Técnicas propias</td>
                        <td>Sesión</td>
                        <td>@jalofernandez</td>
                        <td>Para identificar de manera unitaria al <em class="has-text-weight-medium">Usuario</em> respecto a otros.</td>
                        <td>haztunegociodigital.com</td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
                <p class="block">
                  Aquí está la relación completa de <span class="has-text-weight-medium">cookies de terceros</span>:
                </p>
                <nav class="level">
                  <a
                    href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Qué cookies usa Google Analytics en el navegador del visitante"
                    class="level-item analytics"
                  >
                    <div>
                      <!-- <i class="mdi mdi-google-analytics"></i> -->
                      <p>Google <b>Analytics</b></p>
                    </div>
                  </a>
                  <!-- <a
                    href="https://www.facebook.com/policies/cookies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Qué cookies usa Facebook en el navegador del visitante"
                    class="level-item facebook"
                  >
                    <div>
                      <i class="mdi mdi-facebook"></i>
                      <p><b>Facebook</b></p>
                    </div>
                  </a> -->
                  <!-- <a
                    href="https://help.fullstory.com/hc/en-us/articles/360020829513-Why-FullStory-uses-First-Party-Cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Qué cookies usa Fullstory en el navegador del visitante"
                    class="level-item fullstory"
                  >
                    <div>
                      <i class="mdi mdi-mdi-open-in-new"></i>
                      <p><b>Fullstory</b></p>
                    </div>
                  </a> -->
                  <!-- <a
                    href="https://knowledge.hubspot.com/es/reports/what-cookies-does-hubspot-set-in-a-visitor-s-browser"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Qué cookies usa Hubspot en el navegador del visitante"
                    class="level-item hubspot"
                  >
                    <div>
                      <i class="mdi mdi-hubspot"></i>
                      <p><b>Hubspot</b></p>
                    </div>
                  </a> -->
                </nav>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  ¿Cómo se gestionan las cookies?
                </h3>
                <p class="block">
                  Puedes gestionar la configuración del navegador de modo que este te notifique antes de que se descargue cookie
                  en tu equipo o también puedes adaptar la configuración de forma que el navegador rechace todas las cookies o
                  sólo las cookies de terceros. Además puedes eliminar cualquiera de las cookies que ya se encuentren en tu
                  equipo.
                </p>
                <p class="block">
                  El único problema es que cada navegador lo gestiona a su manera y tendrás que adaptar por separado la
                  configuración de cada navegador y equipo que utilices pero aquí te dejamos una relación de enlaces a la
                  documentación de gestión de cookies de los navegadores más utilizados para que sepas como hacerlo:
                </p>
                <nav class="level">
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=es&hlrm=en"
                    class="level-item chrome"
                    title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Chrome"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <!-- <i class="mdi mdi-google-chrome"></i> -->
                      <p>Google <b>Chrome</b></p>
                    </div>
                  </a>
                  <a
                    href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10"
                    class="level-item explorer"
                    title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Explorer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <!-- <i class="mdi mdi-microsoft-internet-explorer"></i> -->
                      <p>Internet <b>Explorer</b></p>
                    </div>
                  </a>
                  <a
                    href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies"
                    class="level-item firefox"
                    title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Firefox"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <!-- <i class="mdi mdi-firefox"></i> -->
                      <p>Mozilla <b>Firefox</b></p>
                    </div>
                  </a>
                  <a
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                    class="level-item safari"
                    title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Safari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <!-- <i class="mdi mdi-apple-safari"></i> -->
                      <p>Apple <b>Safari</b></p>
                    </div>
                  </a>
                  <a
                    href="https://help.opera.com/en/latest/web-preferences/#cookies"
                    class="level-item opera"
                    title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Opera"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <!-- <i class="mdi mdi-opera"></i> -->
                      <p><b>Opera</b></p>
                    </div>
                  </a>
                </nav>
                <p class="block">
                  Ten en cuenta que si eliges bloquear las cookies esto puede afectar al correcto funcionamiento de este sitio web.
                </p>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Cookies en los dispositivos móviles
                </h3>
                <p class="block">
                  En <em>#HazTuNegocioDigital</em> también usamos cookies en dispositivos móviles. En este caso los navegadores de
                  los dispositivos móviles permiten configurar las opciones o ajustes de privacidad para desactivar o eliminar las cookies.
                  Aquí te dejamos una relación de enlaces a la documentación de gestión de cookies de los navegadores móviles más utilizados:
                </p>
                <nav class="level">
                  <a
                    href="https://support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1"
                    class="level-item chrome"
                    title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Chrome Mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <p><b>Chrome</b> Mobile</p>
                    </div>
                  </a>
                  <a
                    href="https://support.apple.com/es-es/HT201265"
                    class="level-item ios"
                    title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Apple iOS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <p>iPhone <b>iOS</b></p>
                    </div>
                  </a>
                  <a
                    href="https://support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq"
                    class="level-item windows"
                    title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Windows Phone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <p><b>Windows</b> Phone</p>
                    </div>
                  </a>
                  <a
                    href="https://help.opera.com/en/latest/web-preferences/"
                    class="level-item opera"
                    title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Opera Mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <p><b>Opera</b> Mobile</p>
                    </div>
                  </a>
                </nav>

                <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
                  Aceptación de la política de cookies
                </h3>
                <p class="block">
                  El <em class="has-text-weight-medium">Usuario</em> <b class="has-text-success">acepta expresamente</b>,
                  por la utilización de este sitio web, el tratamiento de la información
                  recabada en la forma y con los fines mencionados a lo largo de esta <em>”política de cookies”</em>. Reconoce
                  conocer la posibilidad de rechazar el tratamiento de tales datos o información rechazando el uso de cookies
                  mediante la selección de la configuración apropiada a tal fin en su navegador. Si bien esta opción de bloqueo
                  de cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades del sitio web.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <TheFooter :data="owner.footer" />
  </main>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: { TheNavbar, TheFooter },
  data() {
    return {
      owner: this.$store.state.landing.owner,
      sections: [
        { name: 'Responsable', link: 'responsability' },
        { name: 'Política de Privacidad', link: 'privacy' },
        { name: 'Condiciones de uso', link: 'terms' },
        { name: 'Política de Cookies', link: 'cookies' }
      ]
    };
  },
  head() {
    const landing = this.$store.state.landing
    const title = 'Aviso legal'
    const description =
      `${title} y política de cookies de #${landing.owner.name} donde digitalizamos tu negocio o comercio para que tengan presencia online en internet`
    const canonical = landing.owner.url + this.$route.path

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'subject', name: 'subject', content: `${title} y cookies de #${landing.owner.name}` },

      { hid: 'og:title', property: 'og:title', content: `${title} de #${landing.owner.name}` },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonical },

      { hid: 'twitter:title', name: 'twitter:title', content: `${title} de #${landing.owner.name}` },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
    ]

    return {
      title,
      meta,
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(landing.owner.schema),
          type: "application/ld+json",
        },
      ],
      link: [
        { rel: "canonical", hid: "canonical", href: canonical },
        {
          rel: "dns-prefetch",
          href: "//support.google.com/chrome/answer/95647?hl=es&hlrm=en",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies",
        },
        {
          rel: "dns-prefetch",
          href: "//support.apple.com/es-es/guide/safari/sfri11471/mac",
        },
        {
          rel: "dns-prefetch",
          href: "//help.opera.com/en/latest/web-preferences/#cookies",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1",
        },
        {
          rel: "dns-prefetch",
          href: "//support.apple.com/es-es/HT201265"
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq",
        },
        {
          rel: "dns-prefetch",
          href: "//help.opera.com/en/latest/web-preferences/",
        },
      ],
    };
  },
  // to enable "scroll to top" behaviour when page loads
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    showLink(id) {
      return this.currentLink === id
    },
    toggleClick(id) {
      if(this.currentLink !== 0) {
        this.currentLink = 0
        return false
      }
      this.currentLink = id
    }
  }
};
</script>
