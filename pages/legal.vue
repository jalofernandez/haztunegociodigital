<template>
  <main class="legal old-crt-effect">
    <!-- Place here "Zeppelin" animation as a component (pug import in old porject) -->
    <div class="overlay overlay--hidden"></div>
    <div class="content">
      <div class="content__inner">
        <!-- (main) Header -->
        <div class="content__top">
          <h2 class="title">
            <span class="mode mode--design is-glitch glitch--2">
              @jalofernandez
            </span>
          </h2>
          <nav class="controls">
            <a 
              class="icon icon-twitter"
              href="https://twitter.com/jalofernandez"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver cuenta de Twitter de @jalofernandez">
              Twitter
              <!-- <i class="fab fa-twitter"></i> -->
              <!-- <font-awesome-icon icon="twitter"/> -->
            </a>
          </nav>
        </div>
        <h1 class="glitch" data-text="designer + coder">
          designer + coder
        </h1>
        <!-- typewritin´Title -->
        <div class="typewriter in-legal">
          <h3 class="mode--code">
            Legal Disclaimer
          </h3>
        </div>
        <!-- all Legal Terms typewriting -->
        <div class="skills-list">
          <p v-for="(term, index) in terms" :key="index" v-html="term.row"></p>
        </div>
        <!-- FOOTER navbar links -->
        <div class="content__bottom">
          <div class="switch switch--navbar mode mode--code">
            <nuxt-link :to="{name: 'index'}" class="btn is-link btn--coder menu__link glitch" data-text="<< Home">
              << Home
            </nuxt-link>
            <nuxt-link :to="{name: 'portfolio'}" class="btn is-link btn--designer menu__link glitch" data-text="Portfolio >>">
              Portfolio >>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="line-anim">
      <div class="flicker"></div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      terms: [
        { row: "<b>@jalofernandez</b> es una marca comercial propiedad de <b>Javier Lorenzo Fernández</b> que a su vez es responsable del sitio web, pone a disposición de los usuarios el presente documento con el que pretende dar cumplimiento a las obligaciones dispuestas en la <em>Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE)</em>, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso del sitio web." },
        { row: "Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualesquiera otra disposición legal que fuera de aplicación." },
        { row: "<b>@jalofernandez</b> se reserva el derecho a modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web de <b>@jalofernandez</b> ( <em>www.jalofernandez.com</em> )." },
        { row: "<span>LOPD</span>" },
        { row: "<b>@jalofernandez</b> se encuentra profundamente comprometida con el cumplimiento de la normativa española de protección de datos de carácter personal, y garantiza el cumplimiento íntegro de las obligaciones dispuestas, así como la implementación de las medidas de seguridad dispuestas en el art. 9 de la Ley 15/1999, de Protección de Datos de Carácter Personal (LOPD) y en el Reglamento de Desarrollo de la LOPD." },
        { row: "Cualquier dato que usted (el Usuario o Cliente en adelante) nos facilite por cualquiera de las vías de contacto existentes en <b>@jalofernandez</b> y su website <em>www.jalofernandez.com</em>, ya sea telefónicamente, por correo electrónico o través de cualquiera de las redes sociales, serán incorporados a un fichero automatizado convenientemente registrado ante la <b>Agencia Española de Protección de Datos (AGPD)</b> y sobre el que podrá ejercer sus derechos reconocidos legalmente (acceso, rectificación, cancelación y oposición) escribiendo a la dirección de correo electrónico <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a>, en ambos casos, que su comunicación está relacionada con “Protección de Datos”. Tiene usted información ampliada a este respecto en el siguiente bloque: <em>Política de privacidad</em>." },
        { row: "<span>Política de privacidad</span>" },
        { row: "<b>Identidad y datos de contacto del responsable</b>: El Responsable del tratamiento de los datos personales del Usuario es <b>@jalofernandez</b>, marca comercial propiedad de <em>Javier Lorenzo Fernández</em>, con domicilio comercial en <em>C/ Vicente Bascuñana, 6. 28024. Pozuelo de Alarcón, Madrid</em> y <em>NIF 53385793X</em>. Si tiene cualquier duda en materia de protección de datos, puede contactar con <b>@jalofernandez</b> a través de la dirección de correco electrónico: <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a>" },
        { row: "<b>Finalidades, bases jurídicas del tratamiento y plazos de conservación</b>: El presente sitio web, <em>www.jalofernandez.com</em>, no recaba datos de caracter personal. No se solicitan datos ni posee formularios de contacto para tal efecto. No obstante, los datos de carácter personal proporcionados por los clientes a través de vía telefónica, electrónica (email) o por redes sociales serán tratados por la <b>@jalofernandez</b>, que ostenta la condición de Responsable del tratamiento, para las finalidades que se indican a continuación. Asimismo, le indicamos por qué motivo es lícito que tratemos sus datos y durante cuánto tiempo los conservaremos en la siguiente tabla:" },
        { row: "<table class='responsive-table'> <thead> <tr> <th>Finalidad</th> <th>Base jurídica</th> <th>Plazos de conservación</th> </tr></thead> <tbody> <tr> <td>Gestionar y responder las solicitudes de información realizadas telefónicamente, a través de email o de manera presencial.</td><td>Interés legítimo del responsable del tratamiento.</td><td>Los datos serán conservados durante la vigencia de la consulta realizada. Una vez finalizada, se conservarán bloqueados durante los plazos de prescripción de las acciones legales, suprimiéndose a la finalización de dichos plazos.</td></tr><tr> <td>Gestionar la prestación de los servicios ofrecidos en el sitio web.</td><td>Ejecución del contrato en que el interesado es parte.</td><td>Los datos serán conservados durante la vigencia de la relación contractual. Una vez finalizada, se conservarán bloqueados durante los plazos de prescripción de las acciones legales, suprimiéndose a la finalización de dichos plazos.</td></tr></tbody></table>" },
        { row: "<b>Derechos de los usuarios</b>: Usted puede ejercitar los derechos que se detallan a continuación ante <b>@jalofernandez</b> a través del correo electrónico <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a> o bien a la dirección postal de <em>Calle Vicente Bascuñana, 6. 28024. Pozuelo de Alarcón, Madrid</em>, a la atención de <em>Javier Lorenzo Fernández</em>. La solicitud deberá contener copia de su DNI u otro documento identificativo equivalente, así como el contenido mínimo previsto en la normativa aplicable. Si la solicitud no reúne los requisitos especificados, <b>@jalofernandez</b> podrá requerir su subsanación. No se exigirá contraprestación alguna por el ejercicio de los derechos." },
        { row: "<table class='responsive-table'> <thead> <tr> <th>Derecho</th> <th>¿En qué consiste?</th> </tr></thead> <tbody> <tr> <td>Derecho de acceso</td><td>Consultar qué datos personales tenemos sobre Usted.</td></tr><tr> <td>Derecho de rectificación</td><td>Modificar los datos personales que tenemos sobre Usted cuando sean inexactos.</td></tr><tr> <td>Derecho de oposición</td><td>Solicitar que no tratemos tus datos personales para algunas finalidades concretas.</td></tr><tr> <td>Derecho de supresión</td><td>Solicitar que eliminemos sus datos personales.</td></tr><tr> <td>Derecho de limitación</td><td>Solicitar que limitemos el tratamiento de sus datos personales.</td></tr><tr> <td>Derecho de portabilidad</td><td>Obtener en un formato electrónico los datos personales que nos haya suministrado y los que se hayan generado en el contexto del servicio.</td></tr></tbody></table>" },
        { row: "En caso de no obtener satisfacción en el ejercicio de sus derechos, podrá presentar una reclamación ante la autoridad de control en materia de protección de datos, la <b>Agencia Española de Protección de Datos</b>, cuya página web es: <a href='http://www.agpd.es' target='_blank' title='Ver web de Agencia Española de Protección de Datos'>www.agpd.es</a>" },
        { row: "<b>Destinatarios de los datos personales</b>: Sus datos personales no serán cedidos a otras personas o empresas para ser utilizados para sus propios fines. <b>@jalofernandez</b> no tiene entidades subcontratadas ni terceras presonas podrían acceder a los datos personales." },
        { row: "<b>Medidas de seguridad</b>: <b>@jalofernandez</b> tratará sus datos personales de manera absolutamente confidencial. Asimismo, ha implantado medidas técnicas y organizativas adecuadas para garantizar la seguridad de sus datos personales y evitar su destrucción, pérdida, acceso ilícito o alteración ilícita. A la hora de determinar estas medidas, se han tenido en cuenta criterios como el alcance, el contexto y los fines del tratamiento; el estado de la técnica y los riesgos existentes." },
        { row: "<b>Exactitud de los datos aportados</b>: El Cliente o Usuario, al aceptar la política de privacidad, declara que todos los datos que constan en el perfil son veraces, que están actualizados y que corresponden con los datos del titular de la expendeduría, debiendo el Usuario ponerse en contacto con <b>@jalofernandez</b> o hacer uso de los mecanismos que le ofrecemos en caso de que desee modificar algún dato de carácter personal. El Usuario será el único responsable de los daños ocasionados tanto a <b>@jalofernandez</b> como a terceras personas por las manifestaciones o información falsas o inexactas que proporcione." },
        { row: "<span>Uso de cookies</span>" },
        { row: "Las <b>cookies</b> son pequeños archivos de información que el servidor envía al ordenador de quien accede a la página para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las <b>cookies</b> utilizadas en el sitio web, en todo caso, tienen carácter temporal con la única finalidad de hacer más eficaz su transmisión ulterior y desaparecen al terminar la sesión del usuario. Existen los siguientes tipos de <em>cookies</em>:" },
        { row: "<b>Cookies técnicas</b>: Son aquellas que permiten al Usuario la navegación y la utilización de las diferentes opciones o servicios que se ofrecen como, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran una reserva, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación o almacenar, difundir y/o compartir contenidos." },
        { row: "<b>Cookies analíticas</b>: Son aquellas utilizadas por Google, <em>'Google Analytics'</em>, que permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización y actividad que hacen los Usuarios, así como elaborar perfiles de navegación de éstos para poder introducir mejoras en el sitio web." },
        { row: "<b>Cookies publicitarias</b>: Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello, podemos analizar sus hábitos de navegación en Internet y podemos mostrar al Usuario publicidad relacionada con su perfil de navegación." },
        { row: "El sitio web de <b>@jalofernandez</b> utiliza <b>cookies analíticas</b>. En ningún caso se utilizarán las <b>cookies</b> para recoger información de carácter personal. Esta es la relación de <b>cookies</b> utilizadas:" },
        { row: "<table class='responsive-table'> <thead> <tr> <th>Cookie</th> <th>Finalidad</th> <th>Propietario</th> </tr></thead> <tbody> <tr> <td>_ga</td><td>Se usa para distinguir usuarios.</td><td>Google analytics</td></tr><tr> <td>_gid</td><td>Google Analytics utiliza esta cookie para almacenar y actualizar un valor único para cada página visitada. La cookie se actualiza cada vez que envía los datos a Google Analytics.</td><td>Google analytics</td></tr></tbody></table>" },
        { row: "El usuario puede usted permitir, bloquear o eliminar las <b>cookies</b> instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador (ver enlaces mostrados)." },
        { row: "Las <b>cookies</b> serán tratadas por el titular de esta página web y, en su caso, por entidades a las que se les haya encomendado su tratamiento con finalidades legítimas." },
        { row: "<span>Responsabilidad</span>" },
        { row: "<b>@jalofernandez</b> se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web, siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo." },
        { row: "Desde el sitio web del cliente es posible que se redirija a contenidos de terceros sitios web. Dado que <b>@jalofernandez</b> no puede controlar siempre los contenidos introducidos por los terceros en sus sitios web, éste no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, <b>@jalofernandez</b> manifiesta que procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión." },
        { row: "<b>@jalofernandez</b> no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chat's, generadores de blogs, comentarios, redes sociales o cualesquiera otro medio que permita a terceros publicar contenidos de forma independiente en la página web de <b>@jalofernandez</b>. No obstante y en cumplimiento de lo dispuesto en el art. 11 y 16 de la LSSI-CE, <b>@jalofernandez</b> se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, y colaborando de forma activa en la retirada o en su caso bloqueo de todos aquellos contenidos que pudieran afectar o contravenir la legislación nacional, o internacional, derechos de terceros o la moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del sitio web mediante la siguiente dirección de correo electrónico: <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a>" },
        { row: "Este sitio web ha sido revisado y probado para que funcione correctamente. En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. No obstante, <b>@jalofernandez</b> no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas, o circunstancias semejantes que hagan imposible el acceso a la página web." },
        { row: "<span>Propiedad intelectual</span>" },
        { row: "El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos son propiedad del prestador o en su caso dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes." },
        { row: "Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del prestador. Cualquier uso no autorizado previamente por parte del prestador será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor. Los diseños, logotipos, texto y/o gráficos ajenos al prestador y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos. En todo caso, el prestador cuenta con la autorización expresa y previa por parte de los mismos." },
        { row: "<b>@jalofernandez</b> autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos del sitio web, debiendo en todo caso redirigir al sitio web principal del prestador." },
        { row: "<b>@jalofernandez</b> reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna de <b>@jalofernandez</b> sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo." },
        { row: "Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del siguiente correo electrónico: <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a>" }
      ]
    }
  },
  head() {
    return {
      title: 'with modals'
    }
  }
}
</script>
