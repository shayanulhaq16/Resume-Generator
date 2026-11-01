
const bigImage = document.getElementById("bigImage");
const lightbox = document.getElementById("lightbox");

const larger_image = (img)=>{
    bigImage.src = img.src;
    lightbox.style.display = "flex";
}

const close_img = ()=>{
    bigImage.src = "";
    lightbox.style.display = "none";
    
}