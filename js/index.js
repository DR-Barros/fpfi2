const IMAGE = document.getElementById("Hero-image");
const BRASILTECA_IMAGE = document.getElementById("img-brasilteca");
let i = 1;

setTimeout(CambiarImagen, 6000);

function CambiarImagen(){
    if(i === 1){
        IMAGE.src = "img/ejemplo2.jpg";
        BRASILTECA_IMAGE.src = "img/portfolio/brasilteca/brasilteca_1.jpg"; 
        i++;
    } else if (i === 2){
        IMAGE.src = "img/ejemplo3.jpg";
        BRASILTECA_IMAGE.src = "img/portfolio/brasilteca/brasilteca_2.jpg"; 
        i++;
    } else {
        IMAGE.src = "img/ejemplo.jpg";
        BRASILTECA_IMAGE.src = "img/portfolio/brasilteca/brasilteca_0.jpg"; 
        i = 1;
    }
    setTimeout(CambiarImagen, 6000);
}
