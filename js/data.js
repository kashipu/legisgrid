const info = [{
        sigla: "EXW",
        subtitulo: "Ex works / En fábrica",
        descripcion: "El vendedor entrega la mercancía a disposición del comprador en el lugar designado por el mismo bien sea en la fábrica, almacén o taller, entre otros. El comprador asume todos los riesgos y los costos desde el momento que recibe la mercancía hasta su destino.",
        imagen: "images/exw.gif",
        checklisk: `<li>El vendedor indica el lugar de entrega de la mercancía.</li>
        <li>El vendedor no está obligado a realizar el cargue de la mercancía.</li>
        <li>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado necesario.</li>
        <li>El comprador debe asumir los costos y los riesgos al momento de recibir la mercancía no cargada.</li>
        <li>Se recomienda que se pacte el cargue de la carga, ya que usualmente el vendedor dispone de los recursos necesarios para la correcta manipulación de la carga.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`
    },
    {
        sigla: "FCA",
        subtitulo: "Free Carrier / Franco porteador",
        descripcion:`En este Incoterms®️2020 existen dos modalidades de entrega y riesgo de la mercancía:
        <ul>
        <li>Cuando el lugar designado son las instalaciones del vendedor, la mercancía se debe cargar en los medios de transporte dispuestos por el comprador.</li>
        <li>Cuando el lugar designado es otro, se debe acordar o concretar un punto de entrega de la mercancía al transportista elegido por el comprador, en los medios de transporte del vendedor preparada para la descarga.</li>
        </ul> `,
        imagen: "images/fca.gif",
        checklisk: `<li>Cuenta con dos condiciones de entrega</li>
        <li>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado necesario.</li>
        <li>El vendedor debe pagar los costos de verificación de calidad u operaciones de recuento.</li>
        <li>El vendedor es responsable de pérdida o daños hasta que se haya entregado al porteador o persona designada por el comprador.</li>
        <li>El comprador debe contratar el transporte desde el punto designado de entrega.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`, 
    },
    {
        sigla: "CPT",
        subtitulo: "Carriage Paid To / Transporte pagado hasta",
        descripcion: "El vendedor hace la entrega de la mercancía y asume el costo del transporte hasta un puerto o destino acordado con el comprador, incluye todos los gastos, trámites de exportación y transporte internacional. No obstante, la responsabilidad y el riesgo la asume el comprador desde que inicia el transporte internacional.",
        imagen: "images/cpt.gif",
        checklisk: `<li>El vendedor debe pagar los costos de verificación de calidad u operaciones de recuento.</li>
        <li>El comprador asume la responsabilidad y riesgo desde que inicia el transporte internacional.</li>
        <li>El vendedor debe asumir los costos de los trámites de exportación.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`,
    },
    {® 
        sigla: "CIP",
        subtitulo: "Carriage and Insurance Paid to / Transporte y seguro pagados hasta",
        descripcion: "Es el complemento del Incoterms®️2020 CPT, se incluye el valor del seguro que es asumido por el vendedor. El vendedor debe asumir todos los gastos relacionados con manipulación, transporte local, trámites de exportación, transporte internacional y seguro. No obstante, la responsabilidad y el riesgo la asume el comprador desde que inicia el transporte internacional.",
        imagen: "images/cip.gif",
        checklisk: `<li>El vendedor debe pagar los costos de verificación de calidad u operaciones de recuento.</li>
        <li>El vendedor debe asumir el valor del transporte internacional y del seguro.</li>
        <li>La responsabilidad la asume el comprador al iniciar el transporte internacional.</li>
        <li>Se recomienda leer las notas explicativas y obligaciones de las partes.</li>`,
    },
    {
        sigla: "DAP",
        subtitulo: "Delivered At Place / Entregada en Lugar Convenido",
        descripcion: "El vendedor entrega la mercancía y asume los costos generados en origen tales como (transporte, cargue, aduana exportación, transporte internacional, seguro y demás movimientos ocasionados para lograr el despacho de la mercancía) y costos en destino como ( gastos por manipulación y movimiento de la mercancía y transporte en destino hasta entregar la mercancía en un punto acordado).  el comprador debe asumir los costos y gastos en aduana de importación.",
        imagen: "images/dap.gif",
        checklisk: `<li>El vendedor asume todos los gastos generados hasta la entrega de la mercancía, excluyendo los gastos en aduana de importación.</li>
        <li>El comprador debe asumir los gastos relacionados con la aduana de importación.</li>
        <li>El vendedor le hace la entrega de la mercancía al comprador en el punto acordado, poniéndola a disposición en los medios de transporte de llegada.</li>
        <li>Se recomienda acordar el seguro para esa operación.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`
    },
    {
        sigla: "DPU",
        subtitulo: "Delivered at place unloaded / Mercancía entregada y descargada",
        descripcion: "El vendedor entrega la mercancía hasta el sitio en destino, cubriendo todos los gastos generados en transporte local, internacional, seguro, aduana de exportación y manipulación de carga en origen y destino, transporte en destino. el comprador debe cubrir los gastos generados en aduana de importación y pago de impuestos.",
        imagen: "images/dpu.gif",
        checklisk: `<li>El vendedor asume todos los gastos generados hasta la entrega de la mercancía incluyendo el descargue, excluyendo los gastos en aduana de importación.</li>
        <li>El vendedor asume todos los riesgos hasta hacer la entrega de la mercancía en el punto acordado y descargada.</li>
        <li>El comprador asume todos los gastos de importación.</li>
        <li>El comprador debe informar la recepción de la mercancía al vendedor.</li>
        <li>Se recomienda acordar el seguro para esa operación.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`
    },
    {
        sigla: "DDP",
        subtitulo: "Delivered Duty Paid / Entrega con Derechos Pagados",
        descripcion: "El DDP establece que el vendedor cubre todos los gastos ocasionados tanto en origen como en destino, excluyendo el descargue en destino, el vendedor adquiere el riesgo una vez la mercancía sea entregada o llegue al sitio acordado en destino.",
        imagen: "images/ddp.gif",
        checklisk: `<li>El vendedor asume todos los gastos generados en origen como en destino, sin incluir el descargue de la mercancía en el punto acordado.</li>
        <li>Se recomienda acordar el seguro para esa operación.</li>
        <li>El comprador no tiene ninguna responsabilidad con el transporte.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`
    },
    {
        sigla: "FAS",
        subtitulo: "Free Alongside Ship / Franco al Costado del Buque",
        descripcion: "El vendedor se hace cargo de la entrega de la mercancía en el puerto de embarque, es decir el vendedor asume los costos generado hasta la entrega de la mercancía en puerto (transporte en origen, aduana  de exportación y demás gastos que se generen al ingresar y dejar la mercancía a disposición del puerto), el comprador asume el riesgo una vez sea transferida la responsabilidad en el puerto de origen hasta la entrega de la mercancía en destino, debe asumir los gastos generados tales como (manipulación de carga en  puerto origen, flete internacional, seguro, manipulación de carga en destino, aduana y transporte local).",
        imagen: "images/fas.gif",
        checklisk: `<li>FAS solo se debe utilizar en transporte por mar o vías navegables.</li>
        <li>El vendedor entrega la mercancía al costado del buque o en el punto de carga asignado por el
            comprador.</li>
        <li>El vendedor hace la transmisión del riesgo de pérdida o daño una vez se haya entregado la
            mercancía según lo acordado en el numeral A2 de las obligaciones del vendedor. </li>
        <li>El comprador debe contratar el transporte internacional desde el puerto de embarque hasta el
            lugar de destino.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`
    },
    {
        sigla: "FOB",
        subtitulo: "Free On Board / Franco a Bordo",
        descripcion: "El vendedor hace la entrega de la mercancía a bordo del buque, cubriendo los gastos generados en origen tales como (transporte local, aduana de exportación y manipulación de mercancía)  Asimismo, el comprador asume  todos los costos y riesgos de daño o pérdida desde ese lugar. (flete internacional, seguro, manipulacion de mercancia, aduana de importación y transporte local en destino).",
        imagen: "images/fob.gif",
        checklisk: `<li>FOB solo se debe utilizar en transporte por mar o vías navegables.</li>
        <li>El vendedor debe hacer entrega de la mercancía a bordo del buque.</li>
        <li>Los gastos de aduana de exportación deben ser cubiertos por el vendedor.</li>
        <li>El comprador debe contratar a sus despensas el transporte internacional y seguro.</li>
        <li>El vendedor transmite el riesgo una vez sea puesta la carga a bordo del buque. </li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`
    },
    {
        sigla: "CFR",
        subtitulo: "Cost and Freight / Coste y Flete",
        descripcion: "Incoterms®️2020 utilizado únicamente para transporte por marítimo o fluvial, en este caso el vendedor asume los costos generados  hasta entregar la mercancía en puerto de destino tales como (transporte local en origen, aduana de exportación, manipulación de carga en puerto, y flete internacional), de este modo transfiere el riesgo al comprador una vez esté la mercancía en puerto de destino, de este modo el comprador asume los gastos ocasionados como (seguro, manipulación de carga en puerto de destino, aduana de importación y transporte local en destino).",
        imagen: "images/cfr.gif",
        checklisk: `<li>CFR solo se debe utilizar en transporte por mar o vías navegables.</li>
        <li>El vendedor entrega la mercancía a bordo del buque.</li>
        <li>El vendedor transmite el riesgo cuando entrega la carga a bordo del buque.</li>
        <li>El vendedor debe contratar el transporte hasta el puerto de destino acordado.</li>
        <li>Se recomienda al comprador asegurar la carga.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`
    },
    {
        sigla: "CIF",
        subtitulo: "Cost, Insurance and Freight/Coste, Seguro y Flete",
        descripcion: "Es el complemento del CFR, donde se adiciona el seguro marítimo a cargo del vendedor, en este caso el vendedor debe asumir los costos generado en origen sumando el flete internacional y el seguro, (transporte local en origen, aduana de exportación, manipulación de carga en puerto, flete internacional y seguro), el comprador asume los gastos ocasionados como (manipulación de carga en puerto de destino, aduana de importación y transporte local en destino).",
        imagen: "images/fob.gif",
        checklisk: `<li>CIF solo se debe utilizar en transporte por mar o vías navegables.</li>
        <li>El vendedor asume los gastos del seguro y del flete internacional de la carga.</li>
        <li>El comprador debe asumir los gastos en destino, tales como aduana de importación como
            transportes locales.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`
    }
]

function exw(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven3, conven4, ribbonNone);
    colores(3, conven3, conven4, ribbonNone);
    colores(4, conven3, conven4, ribbonNone);
    colores(5, conven3, conven4, ribbonNone);
    colores(6, conven3, conven4, ribbonNone);
    colores(7, conven3, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function fca(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven5, conven5, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven3, conven4, ribbonNone);
    colores(6, conven3, conven4, ribbonNone);
    colores(7, conven3, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function cpt(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven1, conven2, ribbonNone);
    colores(7, conven1, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function cip(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven1, conven2, ribbonNone);
    colores(7, conven1, conven4, ribbonNone);
    colores(8, conven1, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function dap(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven1, conven2, ribbonNone);
    colores(7, conven1, conven2, ribbonNone);
    colores(8, conven1, conven2, ribbonNone);
    colores(9, conven5, conven5, ribbonNone);
    colores(10, conven5, conven5, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven5, conven5, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function dpu(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven1, conven2, ribbonNone);
    colores(7, conven1, conven2, ribbonNone);
    colores(8, conven1, conven2, ribbonNone);
    colores(9, conven1, conven2, ribbonNone);
    colores(10, conven1, conven2, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven1, conven2, ribbonNone);
    colores(13, conven1, conven2, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function ddp(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven1, conven2, ribbonNone);
    colores(7, conven1, conven2, ribbonNone);
    colores(8, conven1, conven2, ribbonNone);
    colores(9, conven1, conven2, ribbonNone);
    colores(10, conven1, conven2, ribbonNone);
    colores(11, conven1, conven2, ribbonNone);
    colores(12, conven1, conven2, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function fas(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven3, conven4, ribbonNone);
    colores(7, conven3, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function fob(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven1, conven2, ribbonNone);
    colores(7, conven3, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function cfr(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven1, conven2, ribbonNone);
    colores(7, conven1, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}

function cif(){
    colores(1, conven1, conven2, ribbonNone);
    colores(2, conven1, conven2, ribbonNone);
    colores(3, conven1, conven2, ribbonNone);
    colores(4, conven1, conven2, ribbonNone);
    colores(5, conven1, conven2, ribbonNone);
    colores(6, conven1, conven2, ribbonNone);
    colores(7, conven1, conven4, ribbonNone);
    colores(8, conven1, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
    colores(14, conven3, conven4, ribbonNone);
}