var favs = Array.from(document.querySelectorAll(".fa-heart"));
var minusBtns  = Array.from(document.querySelectorAll(".fa-minus-circle"));
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));



for(let fav of favs) {
    fav.addEventListener("click" , function() {
        if(fav.style.color == "white") {
            fav.style.color = "cyan"
        }  else {
            fav.style.color = "white"
        }
    })

}



for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click" , function(){
        cards[i].remove()
        total()
    })
}

for(let plusBtn of plusBtns) {
    plusBtn.addEventListener("click" , function(){
        plusBtn.nextElementSibling.innerHTML ++
        total()
    })
}

for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click" , function() {
        minusBtn.previousElementSibling.innerHTML > 0 ?
        minusBtn.previousElementSibling.innerHTML -- :
        null
        total()
    })


}

function total() {
    let qte = Array.from(document.querySelectorAll(".qute"))
    let price = Array.from(document.querySelectorAll(".unitt-price"))
    let s = 0
    for (let i = 0 ; i < price.length ; i++) {
        s = s + price[i].innerHTML * qte[i].innerHTML
    }
    document.getElementById("total-price").innerHTML = s;
}
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
