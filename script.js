var hamburger = document.querySelector(".hamburger")

const mobmenue = document.querySelector(".navlist ul")

var menuItem = document.querySelectorAll(".navlist ul li a")
const header = document.querySelector(".header");

hamburger.addEventListener("click", () =>  {
    hamburger.classList.toggle("active");
    mobmenue.classList.toggle("active")
});


menuItem.forEach((item)=> {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobmenue.classList.toggle("active");
  }); 
    
});


document.addEventListener("scroll", () => {
  var scroll-position =  window.scrollY;
  if (scroll-position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
}
})