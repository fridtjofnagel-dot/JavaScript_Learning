

const header = document.createElement("header")
const nav = document.createElement("nav")
header.appendChild(nav)

const logo = document.createElement("a");
logo.classList.add("logo");
logo.textContent = "Coffee Shop";
nav.appendChild(logo)

const navList = document.createElement("ul");
navList.classList.add("nav-list");
nav.appendChild(navList)

const menu = document.createElement("li")
menu.textContent = "Menu"
menu.classList.add("nav-list")
navList.appendChild(menu)

const home = document.createElement("li")
home.textContent = "Home"
home.classList.add("nav-list")
navList.appendChild(home)

const about = document.createElement("li")
about.textContent = "About"
about.classList.add("nav-list")
navList.appendChild(about)

const contact = document.createElement("li")
contact.textContent = "Contact"
contact.classList.add("nav-list")
navList.appendChild(contact)

document.body.appendChild(header);

// Create the hero section

const heroSection = document.createElement("section")
heroSection.classList.add("hero")


const heroDiv = document.createElement("div")
heroDiv.classList.add("hero-content")
heroSection.appendChild(heroDiv)

const heroH1 = document.createElement("h1")
heroH1.textContent = "Welcome to Our Coffee Shop"
heroDiv.appendChild(heroH1)

const pHero = document.createElement("p")
pHero.textContent = "Enjoy the best coffee in town"
heroDiv.appendChild(pHero)

const aHero = document.createElement("a")
aHero.textContent = "Explore our Menu"
heroDiv.appendChild(aHero)


document.body.appendChild(heroSection)

// Create the Footer

const footerHero = document.createElement("footer")
footerHero.classList.add("footer")

const pFooterHero = document.createElement("p")
pFooterHero.textContent = "© 2024 Coffee Shop. All rights reserved."
footerHero.appendChild(pFooterHero)

document.body.appendChild(footerHero)

// Apply CSS Styles Using JavaScript

header.style.backgroundColor = "#fff";
header.style.boxShadow = "02px 4px rgba(0,0,0,0.1)"
header.style.padding = "1rem 0"

nav.style.display = "flex"
nav.style.justifyContent = "space-between"
nav.style.alignItems = "center"

logo.style.fontSize = "1.5rem"

