let conven1 = 'colorConven1'
let conven2 = 'colorConven2'
let conven3 = 'colorConven3'
let conven4 = 'colorConven4'
let conven5 = 'colorConven5'
let ribbonNone = 'none-ico'

engine = null;
if (window.navigator.appName == "Microsoft Internet Explorer")
{
   // This is an IE browser. What mode is the engine in?
   if (document.documentMode) // IE8
      engine = document.documentMode;
   else // IE 5-7
   {
      engine = 5; // Assume quirks mode unless proven otherwise
      if (document.compatMode)
      {
         if (document.compatMode == "CSS1Compat")
            engine = 7; // standards mode
      }
   }
   // the engine variable now contains the document compatibility mode.
}

function colores(i, colorBox1, colorBox2, ribbon) {
    let color1 = document.querySelector(`.scroll-card-inc:nth-of-type(${i}) .scroll-color-box-1`);
    let color2 = document.querySelector(`.scroll-card-inc:nth-of-type(${i}) .scroll-color-box-2`);
    let ribbonShow = document.querySelector(`.scroll-card-inc:nth-of-type(${i}) .scroll-ribbon`);
    color1.classList.remove("colorConven1", "colorConven2", "colorConven3", "colorConven4", "colorConven5")
    color2.classList.remove("colorConven1", "colorConven2", "colorConven3", "colorConven4", "colorConven5")
    ribbonShow.classList.remove("none-ico")
    color1.classList.add(colorBox1)
    color2.classList.add(colorBox2)
    ribbonShow.classList.add(ribbon)
}

let scrollContainer = document.querySelector("#scrollContent")


function scrollButton() {
    let scrollIzq = scrollContainer.scrollLeft
    let scrollIzqMax = scrollContainer.scrollLeftMax
    let avanceScroll = scrollContainer.scrollLeftMax / 12
    scrollContainer.scrollLeft += avanceScroll
    console.log(scrollIzq);
    console.log(scrollIzqMax);
    if (scrollIzq >= scrollIzqMax) {
        scrollContainer.scrollLeft = 0
    }
}




function toggle() {
    let queryX = window.matchMedia("(max-width:1110px)")
    let navBar = document.querySelector('#navToggle');
    navBar.classList.toggle('show-ico');
    if (queryX.matches) {
        let contentBox = document.querySelector('#contentBox')
        let footerBox = document.querySelector('#footerBox')
        let helpTextBox = document.querySelector('#helpText')
        let btnmenu = document.querySelector('#btnmenu')
        contentBox.classList.toggle('none-ico');
        footerBox.classList.toggle('none-ico');
        helpTextBox.classList.toggle('none-ico');
    }
    if(navBar.classList.contains("show-ico")){
        btnmenu.setAttribute ("aria-expanded", "true")
    } else {
        btnmenu.setAttribute ("aria-expanded", "false")
    }
}
function insertInfo(i) {
    console.log(i)
    //titulo
    let incTitle = document.querySelector('#inc-title')
    incTitle.innerText = info[i].sigla
    //Subtitutulo
    let incSubTitle = document.querySelector('#inc-subtitle')
    incSubTitle.innerHTML = info[i].subtitulo
    //Descripción
    let incDescrip = document.querySelector('#inc-descrip')
    incDescrip.innerHTML = info[i].descripcion
    // imagen
    let incImg = document.querySelector('#inc-img')
    incImg.setAttribute("src", info[i].imagen)
    //Checklist
    let incChecklist = document.querySelector('#inc-checklist')
    incChecklist.innerHTML = info[i].checklisk;
    //Guia de la página
    let textGuide = document.querySelector('#incTextGuide')
    textGuide.innerHTML = `Página <strong>${i+1} / 11</strong>`
    // Botones
    let buttonsGuide = document.querySelector('#buttonsGuide')
    buttonsGuide.innerHTML = `
        <button onclick="insertInfo(${i - 1})" class="btn-inc-blue">Anterior</button>
        <button onclick="insertInfo(${i + 1})" class="btn-inc-blue2">Siguiente</button>
        `

    // let player = document.querySelector('#audioTag');
    // player.setAttribute("src", info[i].audio)

    // color help text
    if ((i == 7) || (i == 8) || (i == 9) || (i == 10)) {
        let helpTextBox = document.querySelector('#helpText')
        let fichaBox = document.querySelector('#ficha')
        let iconBox = document.querySelector('#iconBox')
        iconBox.style.setProperty('color', '#FFB71B')
        fichaBox.classList.add('ficha-yellow')
        helpTextBox.innerHTML = `<h2>TRANSPORTE MARITIMO Y VÍAS NAVEGABLES</h2>`
        helpTextBox.classList.add('yellow')
    } else {
        let helpTextBox = document.querySelector('#helpText')
        let fichaBox = document.querySelector('#ficha')
        let iconBox = document.querySelector('#iconBox')
        iconBox.style.setProperty('color', '#0066FF')
        helpTextBox.innerHTML = `<h2>OTROS MODOS DE TRANSPORTE</h2>`
        helpTextBox.classList.remove('yellow')
        fichaBox.classList.remove('ficha-yellow')
    }

    if(i == 0) {
        exw()
    }else if (i == 1) {
        fca()
    }else if (i == 2) {
        cpt()
    }else if (i == 3) {
        cip()
    }else if (i == 4) {
        dap()
    }else if (i == 5) {
        dpu()
    }else if (i == 6) {
        ddp()
    }else if (i == 7) {
        fas()
    }else if (i == 8) {
        fob()
    }else if (i == 9) {
        cfr()
    }else if (i == 10) {
        cif()
    }

    //Mostrar eventos frente al usar los botones del nav
    let queryX = window.matchMedia("(max-width:1110px)");
    if (queryX.matches) {
        let navBar = document.querySelector('#navToggle');
        navBar.classList.remove('show-ico');
        let contentBox = document.querySelector('#contentBox')
        let footerBox = document.querySelector('#footerBox')
        let helpTextBox = document.querySelector('#helpText')
        contentBox.classList.remove('none-ico');
        footerBox.classList.remove('none-ico');
        helpTextBox.classList.remove('none-ico');
    }
}
insertInfo(0)