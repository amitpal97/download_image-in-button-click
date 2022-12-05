var image = document.querySelectorAll(".img");
// .forEach((e)=>{
// console.log(e);
// })

// var btndiv = document.querySelectorAll(".btnnew");

// var mainWrapper = document.querySelectorAll(".wrapper");
// .forEach((e)=>{
// e.classList.toggle("color")
// })

// console.log(mainWrapper);

var button = document
  .querySelector(".btn")
  .addEventListener("click", function (e) {
    // image.classList.add("color")
    // alert(" your image now  downloading.")
    var data = ["/assets/Group 579.png" , "/assets/Group 579.png" , "/assets/Group 579.png"];
    for (i=0 ; i<data.length ; i++) {
        var a = document.createElement("a");
        a.href = data[i];
       
        a.download = data[i];
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

    e.preventDefault();
    fatchData(image);
  });
// button.foreach((elm)=>{
// console.log(elm);
// })

// function fatchData(data) {
//   fetch(data.src)
//     .then((res) => res.blob())
//     .then((file) => {
//       let tempUrl = URL.createObjectURL(file);
//       //    console.log(tempUrl );
//       let aTagInject = document.createElement("a");
//       aTagInject.href = tempUrl;
//       aTagInject.download = data.src;
//       document.body.appendChild(aTagInject);
//       aTagInject.click();
//       aTagInject.remove();
//     });
// }


