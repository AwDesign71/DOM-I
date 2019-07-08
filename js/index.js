const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
//Navigation
const links = document.querySelectorAll('a');
 links[0].textContent = siteContent["nav"]["nav-item-1"];
 links[1].textContent = siteContent["nav"]["nav-item-2"];
 links[2].textContent = siteContent["nav"]["nav-item-3"];
 links[3].textContent = siteContent["nav"]["nav-item-4"];
 links[4].textContent = siteContent["nav"]["nav-item-5"];
 links[5].textContent = siteContent["nav"]["nav-item-6"];
 //Changing the color of the nav
 const textColor = document.getElementsByTagName('a');
 for(let i=0; i < textColor.length; i++) {
      textColor[i].style.color = 'green';
 }
 //Appending and Prepending
 //Appending Prices
  const newLink = document.createElement('a');
const linkText = document.createTextNode('Prices');
newLink.appendChild(linkText);
newLink.setAttribute('href', '#');
const navTag = document.querySelector('nav');
navTag.appendChild(newLink);
//Prepending Sales
 const firstLink = document.createElement('a');
const aText = document.createTextNode('Sales');
firstLink.prepend(aText);
firstLink.setAttribute('href', '#');
/*const firstTag = document.querySelector('nav'); */
navTag.prepend(firstLink);
 // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//h1 tag
const headerOne = document.querySelector('h1');
headerOne.textContent = siteContent["cta"]["h1"];
//Adding the cta button
const ctaBtn = document.querySelector('button');
ctaBtn.textContent = "Get Started";
//Updating the IDs set images.
/* const headerLogo = document.querySelector('#cta-img');
headerLogo.src = '../img/header-img.png'; */
const headerLogo = document.getElementById('cta-img');
headerLogo.setAttribute('src', siteContent["cta"]["img-src"]);
//Adding main-content feature h4 to the page
const mainHtag = document.querySelectorAll('.text-content h4');
mainHtag[0].textContent = siteContent["main-content"]["features-h4"];
//Adding p content of main
const mainContent = document.querySelectorAll('.main-content .text-content p');
mainContent[0].textContent = siteContent["main-content"]["features-content"];
//Adding about content h4 to the page 

const aboutHtag = document.querySelectorAll('.main-content h4');
aboutHtag[1].textContent = siteContent["main-content"]["about-h4"];
//Adding p content of the main
const aboutContent = document.querySelectorAll('.main-content .text-content p');
aboutContent[1].textContent = siteContent["main-content"]["about-content"];
/* const middleImg = document.querySelector('#middle-img');
middleImg.src = '../img/mid-page-accent.jpg'; */
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//This will be the area for the three column layout.
// Services h4 tag
const servicesHtag = document.querySelectorAll('.main-content h4');
servicesHtag[2].textContent = siteContent["main-content"]["services-h4"];
// Services content
const servicesContent = document.querySelectorAll('.text-content p');
servicesContent[2].textContent = siteContent["main-content"]["services-content"];
// Product h4 tag
const productHtag = document.querySelectorAll('.main-content h4');
productHtag[3].textContent = siteContent["main-content"]["product-h4"];
//Product content
const productContent = document.querySelectorAll('.text-content p');
productContent[3].textContent = siteContent["main-content"]["product-content"];
//Vision h4 tag
const visiontHtag = document.querySelectorAll('.main-content h4');
visiontHtag[4].textContent = siteContent["main-content"]["vision-h4"];
//Vision content
const visionContent = document.querySelectorAll('.text-content p');
visionContent[4].textContent = siteContent["main-content"]["vision-content"];
//Contact and the footer section
//Contact part
const contactInfo = document.querySelector('.contact h4');
contactInfo.textContent = siteContent["contact"]["contact-h4"];
//Contact P tags
let contacts;
contacts = document.querySelectorAll('.contact p');
contacts[0].textContent = siteContent["contact"]["address"];
//Contact 2
contacts = document.querySelectorAll('.contact p');
contacts[1].textContent = siteContent["contact"]["phone"];
contacts = document.querySelectorAll('.contact p');
contacts[2].textContent = siteContent["contact"]["email"];
//Copyright
const cpyrght = document.querySelector('footer');
cpyrght.textContent = siteContent["footer"]["copyright"];