// classList - shows/gets all classes
//contains - checks classlist for specific class
// add - adds class
//remove - remove class
//toggle -toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
});