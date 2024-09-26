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
//Adding navigation
let navbar = document.querySelectorAll("a");
navbar[0].setAttribute('href', siteContent['nav']['nav-item-1']);
navbar[0].innerHTML= `${siteContent['nav']['nav-item-1']}`;

navbar[1].setAttribute('href', siteContent['nav']['nav-item-2']);
navbar[1].innerHTML= `${siteContent['nav']['nav-item-2']}`;

navbar[2].setAttribute('href', siteContent.nav['nav-item-3']);
navbar[2].innerHTML= `${siteContent['nav']['nav-item-3']}`;

navbar[3].setAttribute('href', siteContent.nav['nav-item-4'])
navbar[3].innerHTML= `${siteContent['nav']['nav-item-4']}`;

navbar[4].setAttribute('href', siteContent['nav']['nav-item-5'])
navbar[4].innerHTML= `${siteContent['nav']['nav-item-5']}`;

navbar[5].setAttribute('href', siteContent['nav']['nav-item-6'])
navbar[5].innerHTML= `${siteContent['nav']['nav-item-6']}`; 
//Adding new item with append and preappend
let firstLink = document.createElement('a');
let aText = document.createTextNode('Home');
firstLink.prepend(aText);
firstLink.setAttribute('href', 'Home.html');
let navTag = document.querySelector('nav');
navTag.prepend(firstLink);
//AppendChild
let addLink = document.createElement('a');
const nodeText = document.createTextNode('Support');
addLink.appendChild(nodeText);
addLink.setAttribute('href', '#');
const aTag = document.querySelector('nav');
aTag.appendChild(addLink);
//Color change
for(i=0; i < navbar.length; i++) {
  navbar[i].style.color = 'green';
}
for(i=0; i < navbar.length; i++) {
  navbar[i].addEventListener('mouseover', (event)=> {
    event.target.style.color = 'black';
});
navbar[i].addEventListener('mouseout', (event)=> {
    event.target.style.color = 'green';
});
}
/*-----------------------------------------------------------*/
let h1Tag = document.querySelector('.cta-text h1');
h1Tag.textContent = siteContent['cta']['h1'];
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Adding the Cta Image
let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
//Section 1 content
let middleContent_h4 = document.querySelectorAll('.top-content h4');
middleContent_h4[0].textContent = siteContent['main-content']['features-h4'];
middleContent_h4[1].textContent = siteContent['main-content']['about-h4'];

let middle_content_p = document.querySelectorAll('.top-content p');
middle_content_p[0].textContent = siteContent['main-content']['features-content'];
middle_content_p[1].textContent = siteContent['main-content']['about-content'];
//Adding the middle image
let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
let bottomContent_h4 = document.querySelectorAll('.bottom-content h4');
bottomContent_h4[0].textContent = siteContent['main-content']['services-h4'];
bottomContent_h4[1].textContent = siteContent['main-content']['product-h4'];
bottomContent_h4[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContent_p = document.querySelectorAll('.bottom-content p');
bottomContent_p[0].textContent = siteContent['main-content']['services-content'];
bottomContent_p[1].textContent = siteContent['main-content']['product-content'];
bottomContent_p[2].textContent = siteContent['main-content']['vision-content'];
//Contact information
let contactInfo_h4 = document.querySelector('.contact h4');
contactInfo_h4.textContent = siteContent['contact']['contact-h4'];
let contactInfo_p = document.querySelectorAll('.contact p');
contactInfo_p[0].textContent = siteContent['contact']['address'];
contactInfo_p[1].textContent = siteContent['contact']['phone'];
contactInfo_p[2].textContent = siteContent['contact']['email'];
//Footer
let cpyrght = document.querySelector('footer');
cpyrght.textContent = siteContent['footer']['copyright'];