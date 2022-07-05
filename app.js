/******************************************
                  Header
******************************************/

/*Boton Imagen y Boton Texto*/

const btnImagen = document.getElementById("btnImagen");
const btnTexto = document.getElementById("btnTexto");
const aside = document.getElementById("aside");
const aside2 = document.getElementById("aside2");

btnImagen.addEventListener("click", () => {
  aside.style.display = "";
  aside2.style.display = "none";
});

btnTexto.addEventListener("click", () => {
  aside.style.display = "none";
  aside2.style.display = "";
});

/*Boton Modo Oscuro*/

const btnModoOscuro = document.getElementById("btnModoOscuro");
const body = document.getElementsByTagName("body");
const modoOscuro = document.getElementsByClassName("modo-oscuro");
const modoClaro = document.getElementsByClassName("modo-claro");

btnModoOscuro.addEventListener("click", () => {
  if (btnModoOscuro.checked) {
    document.body.classList.remove("modo-oscuro");
    document.body.classList.add("modo-claro");
  } else {
    document.body.classList.remove("modo-claro");
    document.body.classList.add("modo-oscuro");
  }
});

/******************************************
            Panel de Imagen
******************************************/

/*CERRAR PANEL BTN*/

const cerrarPanelBtn = document.getElementById("cerrar-panel-btn");
const cerrarPanelBtn2 = document.getElementById("cerrar-panel-btn2");

cerrarPanelBtn.addEventListener("click", (e) => {
  aside.style.display = "none";
});

cerrarPanelBtn2.addEventListener("click", (e) => {
  aside2.style.display = "none";
});

/*URL*/

const urlImgInput = document.getElementById("urlImgInput");
const imagen = document.getElementById("imagen");
const img = document.getElementsByTagName("img");
const imagenMeme = document.getElementById("imagenMeme");

urlImgInput.addEventListener("input", (e) => {
  const url = e.target.value;
  if (url.length !== 0) {
    imagen.style.background = `url('${url}')`;
    imagen.style.backgroundPosition = "center";
    imagen.style.backgroundSize = "cover";
    imagen.style.backgroundRepeat = "no-repeat";
  }
});

/*FONDO*/

const inputFondo = document.getElementById("input-fondo");
const inputText = document.getElementById("input-text");
const inputTonalidad = document.getElementById("input-tonalidad");

inputFondo.addEventListener("input", (e) => {
  const colorElegido = e.target.value;
  if (colorElegido.length !== 0) {
    inputText.innerText = colorElegido.toUpperCase();
    imagen.style.backgroundColor = colorElegido;
  }
});

inputTonalidad.addEventListener("change", (e) => {
  const tonalidadElegida = e.target.value;
  imagen.style.backgroundBlendMode = tonalidadElegida;
});

/***********FILTROS***********/

 const brightnessSlider = document.getElementById("brightness-slider");
 const opacitySlider = document.getElementById("opacity-slider");
 const contrastSlider = document.getElementById("contrast-slider");
 const blurSlider = document.getElementById("blur-slider");
 const grayscaleSlider = document.getElementById("grayscale-slider");
 const sepiaSlider = document.getElementById("sepia-slider");
 const hueSlider = document.getElementById("hue-slider");
 const saturationSlider = document.getElementById("saturation-slider")
 const invertSlider = document.getElementById("invert-slider");


const filtros = () => {
  const brightness = brightnessSlider.value
  const opacity = opacitySlider.value
  const blur = blurSlider.value
  const contrast = contrastSlider.value
  const grayscale = grayscaleSlider.value
  const hue = hueSlider.value
  const sepia = sepiaSlider.value
  const saturate = saturationSlider.value
  const invert = invertSlider.value

  imagen.style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%)  hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
}

const inicializarFiltros = () => {
  brightnessSlider.addEventListener('change', filtros)
  opacitySlider.addEventListener('change', filtros)
  blurSlider.addEventListener('change', filtros)
  contrastSlider.addEventListener('change', filtros)
  grayscaleSlider.addEventListener('change', filtros)
  hueSlider.addEventListener('change', filtros)
  sepiaSlider.addEventListener('change', filtros)
  saturationSlider.addEventListener('change', filtros)
  invertSlider.addEventListener('change', filtros)
}

 inicializarFiltros()

/***reestablecer filtros***/

const reestablecerFiltros = document.getElementById("reestablecer-filtros");

reestablecerFiltros.addEventListener("click", (e) => {
  brightnessSlider.value = 1;
  opacitySlider.value = 1;
  blurSlider.value = 0;
  contrastSlider.value = 100;
  grayscaleSlider.value = 0;
  hueSlider.value = 0;
  sepiaSlider.value = 0;
  saturationSlider.value = 100;
  invertSlider.value = 0;
  imagen.style.filter = "none";
  imagen.style.backgroundColor = "transparent";
});


/******************************************
            Panel de texto
******************************************/

/*TEXTO SUPERIOR*/

const superiorText = document.getElementById("superior-text");
const topText = document.getElementById("topText");

superiorText.addEventListener("input", (e) => {
  const textoSup = e.target.value;
  if (textoSup.length !== 0) {
    topText.innerHTML = textoSup;
    textoSuperior.style.overflow="hidden";

  }
});

const checkboxText = document.getElementById("checkbox-text");
const textoSuperior = document.getElementById("textoSuperior");

checkboxText.addEventListener("click", () => {
  if (checkboxText.checked) {
    textoSuperior.style.display = "none";
  } else {
    textoSuperior.style.display = "";
  }
});

/*TEXTO INFERIOR*/

const inferiorText = document.getElementById("inferior-text");
const bottomText = document.getElementById("bottomText");

inferiorText.addEventListener("input", (e) => {
  const textoInf = e.target.value;
  if (textoInf.length !== 0) {
    bottomText.innerHTML = textoInf;
    textoInferior.style.overflow="hidden";
  }
});

const textoInferior = document.getElementById("textoInferior");
const checkboxTextInf = document.getElementById("checkbox-text-inf");

checkboxTextInf.addEventListener("click", () => {
  if (checkboxTextInf.checked) {
    textoInferior.style.display = "none";
  } else {
    textoInferior.style.display = "";
  }
});

/*FUENTE*/

/***tipo de fuente***/

const fuenteSelect = document.getElementById("fuente-select");

fuenteSelect.addEventListener("change", (e) => {
  let fuenteElegida = e.target.value;
  topText.style.fontFamily = fuenteElegida;
  bottomText.style.fontFamily = fuenteElegida;
});

/***tamaño de fuente***/

const inputTamañoFuente = document.getElementById("input-tamaño-fuente");

inputTamañoFuente.addEventListener("change", (e) => {
  let tamañoFuenteElegido = e.target.value;
  topText.style.fontSize = `${tamañoFuenteElegido}px`;
  bottomText.style.fontSize = `${tamañoFuenteElegido}px`;
});

/***alineación texto***/

const buttonAlineacion1 = document.getElementById("button-alineacion1");
const buttonAlineacion2 = document.getElementById("button-alineacion2");
const buttonAlineacion3 = document.getElementById("button-alineacion3");

buttonAlineacion1.addEventListener("click", (e) => {
  textoSuperior.style.justifyContent = `left`;
  textoInferior.style.justifyContent = `left`;
});

buttonAlineacion2.addEventListener("click", (e) => {
  textoSuperior.style.justifyContent = `center`;
  textoInferior.style.justifyContent = `center`;
});

buttonAlineacion3.addEventListener("click", (e) => {
  textoSuperior.style.justifyContent = `end`;
  textoInferior.style.justifyContent = `end`;
});

/***color fuente***/

const colorTextoInput = document.getElementById("color-texto-input");
const textColor = document.getElementById("text-color");

colorTextoInput.addEventListener("input", (e) => {
  const colorTextoElegido = e.target.value;
  if (colorTextoElegido.length !== 0) {
    textColor.innerText = colorTextoElegido.toUpperCase();
    topText.style.color = colorTextoElegido;
    bottomText.style.color = colorTextoElegido;
  }
});

/***color fondo de fuente***/

const colorFondoInput = document.getElementById("color-fondo-input");
const textFondo = document.getElementById("text-fondo");

colorFondoInput.addEventListener("input", (e) => {
  let colorFondoElegido = e.target.value;
  if (colorFondoElegido.length !== 0) {
    textFondo.innerText = colorFondoElegido.toUpperCase();
    textoSuperior.style.backgroundColor = colorFondoElegido;
    textoInferior.style.backgroundColor = colorFondoElegido;
  }
});

/***fondo transparente***/

const checkboxTransparente = document.getElementById("checkbox-transparente");

const actualizarFondoTexto=()=>{
      if(!checkboxTransparente.checked){
      const colorFondoElegido = colorFondoInput.value;
      textFondo.innerText = colorFondoElegido.toUpperCase();
      textoSuperior.style.backgroundColor= 'pink';
      textoInferior.style.backgroundColor= 'pink';
      }
       else{
      textoSuperior.style.backgroundColor='transparent';
      textoInferior.style.backgroundColor='transparent';
       }
  }

const actualizarPosicionTexto= ()=>{
  if(checkboxTransparente.checked){
    textoSuperior.style.position='absolute';
    textoInferior.style.position='absolute';
    textoSuperior.style.top='120px';
    textoInferior.style.bottom='70px';
      }else{
    textoSuperior.style.position='static';
    textoInferior.style.position='static';
      }
  }

const inicializarFondoTexto = () =>{
 colorFondoInput.addEventListener('input', actualizarFondoTexto)
 checkboxTransparente.addEventListener('change', () => {
   actualizarFondoTexto()
     actualizarPosicionTexto()
  })
 }

 inicializarFondoTexto()


/***Contorno***/

const btnContornoNinguno = document.getElementById("btn-contorno-ninguno");
const btnContornoClaro = document.getElementById("btn-contorno-claro");
const btnContornoOscuro = document.getElementById("btn-contorno-oscuro");

btnContornoNinguno.addEventListener("click", (contorno) => {
  topText.style.textShadow = "none";
  bottomText.style.textShadow = "none";
});

btnContornoClaro.addEventListener("click", (e) => {
  topText.style.textShadow =
    "-2px -2px 1px #FFF, 2px 2px 1px #FFF, -2px 2px 1px #FFF, 2px -2px 1px #FFF";
  bottomText.style.textShadow =
    "-2px -2px 1px #FFF, 2px 2px 1px #FFF, -2px 2px 1px #FFF, 2px -2px 1px #FFF";
});

btnContornoOscuro.addEventListener("click", (e) => {
  topText.style.textShadow =
    "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000";
  bottomText.style.textShadow =
    "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000";
});

/***Espaciado***/

const espaciadoInput = document.getElementById("espaciado-input");

espaciadoInput.addEventListener("change", (e) => {
  let espaciadoElegido = e.target.value;
  if (espaciadoElegido !== 0) {
    topText.style.padding = `${espaciadoElegido}px 50px`;
    bottomText.style.padding = `${espaciadoElegido}px 50px`;
  }
});

/***Interlineado***/

const interlineadoIput = document.getElementById("interlineado-input");

interlineadoIput.addEventListener("change", (e) => {
  let interlineadoElegido = e.target.value;
  if (interlineadoElegido !== 0) {
    topText.style.lineHeight = interlineadoElegido;
    bottomText.style.lineHeight = interlineadoElegido;
  }
});

/******************************************
                Footer
******************************************/

/***Boton de descarga***/

const botonDescarga = document.getElementById('boton-descarga');
const section1 = document.getElementById('section1');

const descargarMeme = () => {
  domtoimage.toBlob(section1).then(function (blob) {
    saveAs(blob, 'mi-meme.png');
  })
}

const inicializar = () => {
  botonDescarga.addEventListener('click', descargarMeme);
}

inicializar()

