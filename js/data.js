const summarAll = `<li>Vendedor: Persona encargada de la venta o comercialización de un producto.</li>
<li>Transporte interno: es el desplazamiento que se realiza desde la fábrica hasta un punto
    acordado.</li>
<li>Aduana origen: trámites que se deben realizar para la autorización de exportación de la
    mercancía.</li>
<li>operación en puerto, aeropuerto o pasos de fronteras según sea el caso: son todos los
    procedimiento de manipulación de la mercancía para el cargue al transporte internacional.
</li>
<li>seguro: contrato que se efectúa con una agencia de seguros con el fin de transferir el
    riesgo de alguna eventualidad con relación de la mercancía.</li>
<li>flete: costo que se genera al contratar el transporte (local o internacional) de acuerdo a
    su negociación.</li>
<li>tránsito internacional: transporte de la mercancía desde el país de origen a país de
    destino.</li>
<li>operación en puerto, aeropuerto o pasos de fronteras según sea el caso: son todos los
    procedimiento de manipulación de la mercancía para el descargue al transporte internacional.
</li>
<li>aduana destino: trámites que se deben realizar para la autorización de la importacion y
    legalizacion de la entrada de la mercancía en el país de destino.</li>
<li>transporte interno: es el desplazamiento que se realiza para la entrega de la mercancía al
    cliente o comprador.</li>
<li>comprador: la persona encargada de negociar o contratar la compra de un producto en el
    exterior.</li>
<li>país de compra: país donde se efectúa la compra de la mercancía.
<li>País de origen: lugar donde se fabrica la mercancía.
<li>puerto de embarque: lugar donde se despacha la mercancía.
<li>país de destino: lugar final donde se recibe la mercancía.</li>`



const info = [{
        sigla: "EXW",
        audio: "audios/pruebainc.mp3",
        subtitulo: "Exworks en fábrica",
        descripcion: "El vendedor únicamente es responsable de entregar la mercancía en el lugar designadas por el mismo bien sea (fábrica, almacén, taller etc.) y  el comprador asume todos los riesgos y los costos desde el momento que recibe la mercancía hasta su destino.",
        imagen: "images/exw.mp4",
        checklisk: `<li>El vendedor indica el lugar de entrega de la mercancía.</li>
        <li>El vendedor no está obligado a realizar el cargue de la mercancía.</li>
        <li>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado necesario.</li>
        <li>El comprador debe asumir los costos al momento de entrega de la mercancía no cargada.</li>
        <li>Se recomienda que se pacte el cargue de la carga ya que usualmente el vendedor dispone de los recursos necesarios para la correcta manipulación de la carga.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`,
        glosario: summarAll
    },
    {
        sigla: "FCA",
        audio: "",
        subtitulo: "Free Carrier / Franco Porteador",
        descripcion: "Se debe acordar o concretar un punto de entrega de la mercancía al transportista (transitario, naviera, aerolínea, etc.)  elegido por el comprador, el vendedor debe hacer la entrega de la mercancía una vez superada la aduana de exportación, asumiendo los gastos generado por manipulación, transporte, descargue y costos aduaneros desde el almacén o fábrica hasta el lugar o punto fijado para ello.",
        imagen: "images/fca.mp4",
        checklisk: `<li>Cuenta con dos condiciones de entrega</li>
        <li>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado necesario.</li>
        <li>El vendedor es responsable de perdida o daños hasta que se haya entregado al porteador o persona designada por el comprador.</li>
        <li>El comprador debe contratar el transporte desde el punto designado de entrega.</li>
        <li>El vendedor debe pagar los costos de verificación de calidad u operaciones de recuento.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`,
        glosario: summarAll,
    },
    {
        sigla: "CPT",
        subtitulo: "Carriage Paid To / Transporte pagado hasta",
        descripcion: "El vendedor hace la entrega de la mercancía y asume el costo del transporte hasta un puerto o destino acordado, incluyendo todos los gastos, trámites de exportación, despacho aduanero y transporte internacional. No obstante la responsabilidad y el riesgo la asume el comprador desde que inicia el transporte internacional",
        imagen: "images/cpt.mp4",
        checklisk: `<li>El vendedor debe pagar los costos de verificación de calidad o operaciones de recuento.</li>
        <li>El comprador asume la responsabilidad y riesgo desde que inicia el transporte internacional.</li>
        <li>El vendedor debe asumir los costos de despacho de aduana.</li>
        <li>El vendedor debe pagar los costos de verificación de calidad u operaciones de recuento.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`,
        glosario: summarAll
    },
    {
        sigla: "CIP",
        subtitulo: "Carriage and Insurance Paid to / Transporte y Seguro Pagados hasta",
        descripcion: "Es el complemento del Incoterm®  CPT, se incluye el valor del seguro que es asumido por el vendedor. El vendedor debe asumir todos los gastos relacionados con manipulación, transporte local, trámites de exportación, despacho aduanero, transporte internacional y seguro. No obstante la responsabilidad del comprador inicia al finalizar el transporte internacional.",
        imagen: "images/cip.mp4",
        checklisk: `<li>El vendedor debe pagar los costos de verificación de calidad u operaciones de recuento.</li>
        <li>El vendedor debe asumir el valor del seguro.</li>
        <li>La responsabilidad la asume el comprador al finalizar el transporte internacional.</li>
        <li>El vendedor debe asumir los gastos si se general al realizar las operaciones de verificación de calidad y conteo de la mercancía.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`,
        glosario: summarAll
    },
    {
        sigla: "DAP",
        subtitulo: "Delivered At Place / Entregada en Lugar Convenido",
        descripcion: "El vendedor entrega la mercancía y asume los costos generados en origen tales como (transporte, cargue, aduana exportación, transporte internacional, seguro y demás movimientos ocasionados para lograr el despacho de la mercancía) y costos en destino como ( gastos por manipulación y movimiento de la mercancía y transporte en destino hasta entregar la mercancía en un punto acordado).  el comprador debe asumir los costos y gastos en aduana de importación.",
        imagen: "images/dap.mp4",
        checklisk: `<li>El vendedor asume todos los gastos generados hasta la entrega de la mercancía, excluyendo los gastos en aduana de importación.</li>
        <li>El comprador debe asumir los gastos relacionados con la aduana de importación.</li>
        <li>El vendedor le hace la entrega de la mercancía al comprador en el punto acordado, poniéndola a disposición en los medios de transporte de llegada.</li>
        <li>Se recomienda acordar el seguro para esa operación.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`,
        glosario: summarAll
    },
    {
        sigla: "DPU",
        subtitulo: "Delivered at place unloaded / Mercancía entregada y descargada",
        descripcion: "El vendedor entrega la mercancía hasta el sitio en destino, cubriendo todos los gastos generados en transporte local, internacional, seguro, aduana de exportación y manipulación de carga en origen y destino, transporte en destino. el comprador debe cubrir los gastos generados en aduana de importación y pago de impuestos.",
        imagen: "images/dpu.mp4",
        checklisk: `<li>El vendedor asume todos los gastos generados hasta la entrega de la mercancía incluyendo el descargue, excluyendo los gastos en aduana de importación.</li>
        <li>El vendedor asume todos los riesgos hasta hacer la entrega de la mercancía en el punto acordado y descargada.</li>
        <li>El comprador asume todos los gastos de importación.</li>
        <li>El comprador debe informar la recepción de la mercancía al vendedor.</li>
        <li>Se recomienda acordar el seguro para esa operación.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`,
        glosario: summarAll
    },
    {
        sigla: "DDP",
        subtitulo: "Delivered Duty Paid / Entrega con Derechos Pagados",
        descripcion: "El DDP establece que el vendedor cubre todos los gastos ocasionados tanto en origen como en destino, excluyendo el descargue en destino, el vendedor adquiere el riesgo una vez la mercancía sea entregada o llegue al sitio acordado en destino.",
        imagen: "images/ddp.mp4",
        checklisk: `<li>El vendedor asume todos los gastos generados en origen como en destino, sin incluir el descargue de la mercancía en el punto acordado.</li>
        <li>Se recomienda acordar el seguro para esa operación.</li>
        <li>El comprador no tiene ninguna responsabilidad con el transporte.</li>
        <li>Se recomienda leer las notas explicativas e obligaciones de las partes.</li>`,
        glosario: summarAll
    },
    {
        sigla: "FAS",
        subtitulo: "Free Alongside Ship / Franco al Costado del Buque",
        descripcion: "El vendedor se hace cargo de la entrega de la mercancía en el puerto de embarque, es decir el vendedor asume los costos generado hasta la entrega de la mercancía en puerto (transporte en origen, aduana  de exportación y demás gastos que se generen al ingresar y dejar la mercancía a disposición del puerto), el comprador asume el riesgo una vez sea transferida la responsabilidad en el puerto de origen hasta la entrega de la mercancía en destino, debe asumir los gastos generados tales como (manipulación de carga en  puerto origen, flete internacional, seguro, manipulación de carga en destino, aduana y transporte local).",
        imagen: "images/fas.mp4",
        checklisk: `<li>El vendedor indica el lugar de entrega de la mercancía.</li>
            <li>El vendedor no está obligado a realizar el cargue de la mercancía.</li>
            <li>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado
                necesario.</li>
            <li>El comprador debe asumir los costos al momento de entrega de la mercancía no
            cargada.</li>
            <li>Se recomienda que se pacte el cargue de la carga ya que usualmente el vendedor
                    dispone de los recursos necesarios para la correcta manipulación de la carga.</li>`,
        glosario: summarAll
    },
    {
        sigla: "FOB",
        subtitulo: "Free On Board / Franco a Bordo",
        descripcion: "El vendedor hace la entrega de la mercancía a bordo del buque, cubriendo los gastos generados en origen tales como (transporte local, aduana de exportación y manipulación de mercancía)  Asimismo, el comprador asume  todos los costos y riesgos de daño o pérdida desde ese lugar. (flete internacional, seguro, manipulacion de mercancia, aduana de importación y transporte local en destino).",
        imagen: "images/fob.mp4",
        checklisk: `<li>El vendedor indica el lugar de entrega de la mercancía.</li>
            <li>El vendedor no está obligado a realizar el cargue de la mercancía.</li>
            <li>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado
                necesario.</li>
            <li>El comprador debe asumir los costos al momento de entrega de la mercancía no
            cargada.</li>
            <li>Se recomienda que se pacte el cargue de la carga ya que usualmente el vendedor
                    dispone de los recursos necesarios para la correcta manipulación de la carga.</li>`,
        glosario: summarAll
    },
    {
        sigla: "CFR",
        subtitulo: "Cost and Freight / Coste y Flete",
        descripcion: "Incoterms utilizado únicamente para transporte por marítimo o fluvial, en este caso el vendedor asume los costos generados  hasta entregar la mercancía en puerto de destino tales como (transporte local en origen, aduana de exportación, manipulación de carga en puerto, y flete internacional), de este modo transfiere el riesgo al comprador una vez esté la mercancía en puerto de destino, de este modo el comprador asume los gastos ocasionados como (seguro, manipulación de carga en puerto de destino, aduana de importación y transporte local en destino).",
        imagen: "images/cfr.mp4",
        checklisk: `<li>El vendedor indica el lugar de entrega de la mercancía.</li>
            <li>El vendedor no está obligado a realizar el cargue de la mercancía.</li>
            <li>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado
                necesario.</li>
            <li>El comprador debe asumir los costos al momento de entrega de la mercancía no
            cargada.</li>
            <li>Se recomienda que se pacte el cargue de la carga ya que usualmente el vendedor
                    dispone de los recursos necesarios para la correcta manipulación de la carga.</li>`,
        glosario: summarAll
    },
    {
        sigla: "CIF",
        subtitulo: "Cost, Insurance and Freight/Coste, Seguro y Flete",
        descripcion: "Es el complemento del CFR, donde se adiciona el seguro marítimo a cargo del vendedor, en este caso el vendedor debe asumir los costos generado en origen sumando el flete internacional y el seguro, (transporte local en origen, aduana de exportación, manipulación de carga en puerto, flete internacional y seguro), el comprador asume los gastos ocasionados como (manipulación de carga en puerto de destino, aduana de importación y transporte local en destino).",
        imagen: "images/cfr.mp4",
        checklisk: `<li>El vendedor indica el lugar de entrega de la mercancía.</li>
            <li>El vendedor no está obligado a realizar el cargue de la mercancía.</li>
            <li>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado
                necesario.</li>
            <li>El comprador debe asumir los costos al momento de entrega de la mercancía no
            cargada.</li>
            <li>Se recomienda que se pacte el cargue de la carga ya que usualmente el vendedor
                    dispone de los recursos necesarios para la correcta manipulación de la carga.</li>`,
        glosario: summarAll
    }
]

function exw(){
    colores(1, conven1, conven2);
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
}

function fca(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven5, conven5);
    colores(4, conven1, conven2);
    colores(5, conven3, conven4, ribbonNone);
    colores(6, conven3, conven4, ribbonNone);
    colores(7, conven3, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
}

function cpt(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven1, conven2);
    colores(6, conven1, conven4);
    colores(7, conven3, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
}

function cip(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven1, conven2);
    colores(6, conven1, conven4);
    colores(7, conven1, conven4);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
}

function dap(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven1, conven2);
    colores(6, conven1, conven2);
    colores(7, conven1, conven2);
    colores(8, conven5, conven5);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4);
    colores(11, conven5, conven5, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
}

function dpu(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven1, conven2);
    colores(6, conven1, conven2);
    colores(7, conven1, conven2);
    colores(8, conven1, conven2);
    colores(9, conven3, conven4);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven5, conven5);
    colores(12, conven5, conven5);
    colores(13, conven3, conven4, ribbonNone);
}

function ddp(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven1, conven2);
    colores(6, conven1, conven2);
    colores(7, conven1, conven2);
    colores(8, conven1, conven2);
    colores(9, conven1, conven2);
    colores(10, conven1, conven2);
    colores(11, conven3, conven4);
    colores(12, conven3, conven4);
}

function fas(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven3, conven4);
    colores(6, conven3, conven4, ribbonNone);
    colores(7, conven3, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
}

function fob(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven1, conven2);
    colores(6, conven3, conven4);
    colores(7, conven3, conven4, ribbonNone);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
}

function cfr(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven1, conven2);
    colores(6, conven1, conven4);
    colores(7, conven3, conven4);
    colores(8, conven3, conven4);
    colores(9, conven3, conven4);
    colores(10, conven3, conven4);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
}

function cif(){
    colores(1, conven1, conven2);
    colores(2, conven1, conven2);
    colores(3, conven1, conven2);
    colores(4, conven1, conven2);
    colores(5, conven1, conven2);
    colores(6, conven1, conven4);
    colores(7, conven1, conven4);
    colores(8, conven3, conven4, ribbonNone);
    colores(9, conven3, conven4, ribbonNone);
    colores(10, conven3, conven4, ribbonNone);
    colores(11, conven3, conven4, ribbonNone);
    colores(12, conven3, conven4, ribbonNone);
    colores(13, conven3, conven4, ribbonNone);
}