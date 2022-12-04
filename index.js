var image= document.querySelector(".img");
var btndiv=document.querySelector(".btnnew");
var button= document.querySelector(".btn").addEventListener("click",function(){
    // image.classList.add("color")
    // alert("Your image downloaded.")
    // e.preventDefault();
    fatchData(image);
});

function fatchData(data){
    fetch(data).then(res => res.blob()) .then(file => {
       let tempUrl= URL.createObjectURL(file);
       console.log(tempUrl );
       let aTagInject= document.createElement("a");
        aTagInject.href=tempUrl;
        aTagInject.download="filename";
        document.body.appendChild(aTagInject);
        aTagInject.click();
        aTagInject.remove();
    });
}

