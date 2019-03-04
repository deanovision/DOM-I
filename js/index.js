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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navA = document.querySelectorAll("nav a");
const navArray = Object.values(siteContent.nav);
// console.log(navArray);
navA.forEach(function(currentValue, index){
   return currentValue.textContent = navArray[index];  
 });

/*navA[0].textContent = "Services";
navA[1].textContent = "Product";
navA[2].textContent = "Vision";
navA[3].textContent = "Features";
navA[4].textContent = "About";
navA[5].textContent = "Contact";*/


const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = "DOM Is Awesome";

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = "img/header-img.png";

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";

const allH4 = document.querySelectorAll("h4");
allH4[0].textContent = "Features";
allH4[1].textContent = "About";
allH4[2].textContent = "Services";
allH4[3].textContent = "Product";
allH4[4].textContent = "Vision";
allH4[5].textContent = "Contact";

const topP = document.querySelectorAll(".top-content p");
topP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomP = document.querySelectorAll(".bottom-content p");

bottomP[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomP[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomP[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg"

const contact = document.querySelectorAll(".contact p");
contact[0].textContent = "123 Way 456 Street Somewhere, USA"
contact[1].textContent = "1 (888) 888-8888"
contact[2].textContent = "sales@greatidea.io"

const footer = document.querySelector("footer p");
footer.textContent = "Copyright Great Idea! 2018"


// console.log(allH4);