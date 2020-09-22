const IMAGE = document.getElementById("Hero-image");
let i = 1;

setTimeout(CambiarImagen, 6000);

function CambiarImagen(){
    if(i === 1){
        IMAGE.src = "img/ejemplo2.jpg";
        i++;
    } else if (i === 2){
        IMAGE.src = "img/ejemplo3.jpg";
        i++;
    } else {
        IMAGE.src = "img/ejemplo.jpg";
        i = 1;
    }
    setTimeout(CambiarImagen, 6000);
}
