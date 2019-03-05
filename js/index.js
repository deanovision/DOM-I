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
///////////////////////NAVIGATION////////////////////////////
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector("nav");
const navA = document.querySelectorAll("nav a");
const navArray = Object.values(siteContent.nav);

navA.forEach(function(currentValue, index){
   return currentValue.textContent = navArray[index];  
 });

 navA.forEach(function(currentValue){
  return currentValue.style.color = "blue";  
});

const appended = document.createElement('a');
appended.textContent = "Appended";
nav.appendChild(appended);
appended.style.color = "red";

const prepended = document.createElement('a');
prepended.textContent = "Prepended"
nav.prepend(prepended);
prepended.style.color = "red";

//////////////////////////////////////HEADER AREA///////////////////////////////

const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

//////////////////////////////////////MAIN CONTENT///////////////////////////////

const mainContentH4 = document.querySelectorAll(".main-content h4");
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];


const topP = document.querySelectorAll(".top-content p");
topP[0].textContent = siteContent["main-content"]["features-content"];
topP[1].textContent = siteContent["main-content"]["about-content"];

const midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

const bottomP = document.querySelectorAll(".bottom-content p");

bottomP[0].textContent = siteContent["main-content"]["services-content"];
bottomP[1].textContent = siteContent["main-content"]["product-content"];
bottomP[2].textContent = siteContent["main-content"]["vision-content"];

///////////////////////////////////////////// CONTACT AREA /////////////////////////////////

const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contact = document.querySelectorAll(".contact p");
contact[0].textContent = siteContent["contact"]["address"];
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];

//////////////////////////////////////////// FOOTER AREA //////////////////////////////////

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];


// console.log(allH4);