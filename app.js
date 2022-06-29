// const $ = (id) => document.getElementById(id);

/*Boton Imagen y Boton Texto*/

const btnImagen= document.getElementById('btnImagen');
const btnTexto= document.getElementById('btnTexto');
const aside= document.getElementById('aside');
const aside2= document.getElementById('aside2');

btnImagen.addEventListener('click', () =>{
aside.style.display='';
aside2.style.display='none';
})

btnTexto.addEventListener('click', () =>{
    aside.style.display='none';
    aside2.style.display='';
    })

/*Boton Modo Oscuro*/  

const btnModoOscuro= document.getElementById('btnModoOscuro');
const body= document.getElementsByTagName('body');
const modoOscuro= document.getElementsByClassName('modo-oscuro');
const modoClaro= document.getElementsByClassName('modo-claro');

btnModoOscuro.addEventListener('click', ()=>{
    if(btnModoOscuro.checked){
        document.body.classList.remove('modo-oscuro')
        document.body.classList.add('modo-claro')
    } else{
        document.body.classList.remove('modo-claro')
        document.body.classList.add('modo-oscuro')
    }
})

/**********PANEL IMAGEN**********/

/*CERRAR PANEL BTN*/

const cerrarPanelBtn = document.getElementById('cerrar-panel-btn');
const cerrarPanelBtn2 = document.getElementById('cerrar-panel-btn2');

cerrarPanelBtn.addEventListener('click',(e)=>{
    aside.style.display='none';
})

cerrarPanelBtn2.addEventListener('click',(e)=>{
    aside2.style.display='none';
})

/*URL*/

const urlImgInput = document.getElementById('urlImgInput');
const imagen = document.getElementById('imagen');
const img= document.getElementsByTagName('img');
const imagenMeme=document.getElementById('imagenMeme');


urlImgInput.addEventListener('input', (e) =>{
    const url= e.target.value;
    if(url.length !== 0){
        imagen.style.background=`url('${url}')`;
       imagen.style.backgroundPosition= 'center';
       imagen.style.backgroundSize= 'cover';
       imagen.style.backgroundRepeat= 'no-repeat';

    }
})

/*FONDO*/

const inputFondo = document.getElementById('input-fondo');
const inputText = document.getElementById('input-text');
const inputTonalidad = document.getElementById('input-tonalidad');

inputFondo.addEventListener('input', (e) =>{
    const colorElegido = e.target.value;
    if(colorElegido.length !== 0){
    inputText.innerText = colorElegido.toUpperCase();
    imagen.style.backgroundColor= colorElegido;
    }
})

inputTonalidad.addEventListener('change', (e) =>{
     const tonalidadElegida = e.target.value;
     imagen.style.backgroundBlendMode= tonalidadElegida;
 })


 /***********FILTROS***********/

/***brillo***/

const brightnessSlider = document.getElementById('brightness-slider');

brightnessSlider.addEventListener('change', (e)=>{
    const brillo = e.target.value;
    if(brillo.length !== 0){
        imagen.style.filter= `brightness(${brillo})`;
    }
})

/***opacidad***/

const opacitySlider = document.getElementById('opacity-slider');

opacitySlider.addEventListener('change', (e)=>{
    const opacidad = e.target.value;
    if(opacidad.length !== 0){
        imagen.style.filter= `opacity(${opacidad})`;
    }
})

/***contraste***/

const contrastSlider = document.getElementById('contrast-slider');

contrastSlider.addEventListener('change', (e)=>{
    const contraste = e.target.value;
    if(contraste.length !== 0){
        imagen.style.filter= `contrast(${contraste}%)`;
    }
})

/***desenfoque***/

const blurSlider = document.getElementById('blur-slider');

blurSlider.addEventListener('change', (e)=>{
    const desenfoque = e.target.value;
    if(desenfoque.length !== 0){
        imagen.style.filter= `blur(${desenfoque}px)`;
    }
})

/***escala de grises***/

const grayscaleSlider = document.getElementById('grayscale-slider');

grayscaleSlider.addEventListener('change', (e)=>{
    const escalaDeGrises = e.target.value;
    if(escalaDeGrises.length !== 0){
        imagen.style.filter= `grayscale(${escalaDeGrises}%)`;
    }
})

/***sepia***/

const sepiaSlider = document.getElementById('sepia-slider');

sepiaSlider.addEventListener('change', (e)=>{
    const sepia = e.target.value;
    if(sepia.length !== 0){
        imagen.style.filter= `sepia(${sepia}%)`;
    }
})

/***hue***/

const hueSlider = document.getElementById('hue-slider');

hueSlider.addEventListener('change', (e)=>{
    const hue = e.target.value;
    if(hue.length !== 0){
        imagen.style.filter= `hue-rotate(${hue}deg)`;
    }
})


/***saturado***/

const saturationSlider = document.getElementById('saturation-slider');

saturationSlider.addEventListener('change', (e)=>{
    const saturado = e.target.value;
    if(saturado.length !== 0){
        imagen.style.filter= `saturate(${saturado}%)`;
    }
})

/***negativo***/

const invertSlider = document.getElementById('invert-slider');

invertSlider.addEventListener('change', (e)=>{
    const negativo = e.target.value;
    if(negativo.length !== 0){
        imagen.style.filter= `invert(${negativo})`;
    }
})

/***reestablecer filtros***/

 const reestablecerFiltros= document.getElementById('reestablecer-filtros');

 reestablecerFiltros.addEventListener('click', (e)=>{
       brightnessSlider.value = 1;
       opacitySlider.value = 1;
       blurSlider.value = 0;
       contrastSlider.value = 100;
       grayscaleSlider.value = 0;
       hueSlider.value = 0;
       sepiaSlider.value = 0;
       saturationSlider.value = 100;
       invertSlider.value = 0;
       imagen.style.filter= 'none';
       imagen.style.backgroundColor='transparent';
    
 })
  
/**********PANEL TEXTO**********/

/*TEXTO SUPERIOR*/

const superiorText = document.getElementById('superior-text');
const topText = document.getElementById('topText');

superiorText.addEventListener('input', (e) =>{
    const textoSup = e.target.value;
    if(textoSup.length !== 0){
        topText.innerHTML= textoSup;

    }
})

const checkboxText = document.getElementById('checkbox-text');
const textoSuperior= document.getElementById('textoSuperior');

checkboxText.addEventListener('click', () =>{
    if(checkboxText.checked){
        textoSuperior.style.display= 'none';
    }else{
        textoSuperior.style.display= '';
    }     
    })


/*TEXTO INFERIOR*/

const inferiorText = document.getElementById('inferior-text');
const bottomText = document.getElementById('bottomText');

inferiorText.addEventListener('input', (e) =>{
    const textoInf = e.target.value;
    if(textoInf.length !== 0){
        bottomText.innerHTML= textoInf;

    }
})

const textoInferior= document.getElementById('textoInferior');
const checkboxTextInf = document.getElementById('checkbox-text-inf');

checkboxTextInf.addEventListener('click', () =>{
    if(checkboxTextInf.checked){
        textoInferior.style.display= 'none';
    }else{
        textoInferior.style.display= '';
    }     
    })


/*FUENTE*/

/***tipo de fuente***/

const fuenteSelect = document.getElementById('fuente-select');

fuenteSelect.addEventListener('change', (e) =>{
    let fuenteElegida = e.target.value;
        topText.style.fontFamily= fuenteElegida;
        bottomText.style.fontFamily= fuenteElegida;

})

/***tamaño de fuente***/
