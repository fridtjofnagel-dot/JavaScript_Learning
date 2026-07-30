// 


const heroContent = document.querySelector(".hero-content")
const heroH1 = heroContent.querySelector("h1")

console.log(heroH1)


const a = document.querySelector(".nav-list a")
console.log(a)

const btnItem = document.querySelector(".btn")
console.log(btnItem)

const header = document.querySelector(".header")
header.style.backgroundColor = "#b5651d"

heroH1.style.fontSize = "3rem"

a.style.color = "#faf0e6"



const newParagraph = document.createElement("p");
newParagraph.textContent = "Open 7 to 9";
heroContent.appendChild(newParagraph);

