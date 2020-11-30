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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navi = document.querySelectorAll('nav a');
navi.forEach((item, i) => {
  item.textContent = siteContent['nav'][`nav-item-${i + 1}`]
});

let head1 = document.querySelector('h1');
head1.textContent = siteContent['cta']['h1'];

let butt1 = document.querySelector('.cta-text button');
butt1.textContent = siteContent['cta']['button'];

let hImg = document.getElementById('cta-img');
hImg.setAttribute('src', siteContent ['cta']['img-src']);

let titles = document.querySelector('.text-content h4');
titles.textContent = siteContent['main-content']['features-h4'];

let p1 = document.querySelector('.text-content p');
p1.textContent = siteContent['main-content']['features-content'];

let titles2 = document.querySelector('.text-content:nth-of-type(2) h4');
titles2.textContent = siteContent['main-content']['about-h4'];

let p2 = document.querySelector('.text-content:nth-of-type(2) p');
p2.textContent = siteContent['main-content']['about-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let titles3 = document.querySelector('.bottom-content .text-content h4');
titles3.textContent = siteContent['main-content']['services-h4'];

let p3 = document.querySelector('.bottom-content .text-content p');
p3.textContent = siteContent['main-content']['services-content'];

let titles4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
titles4.textContent = siteContent['main-content']['product-h4'];

let p4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
p4.textContent = siteContent['main-content']['product-content'];

let titles5 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
titles5.textContent = siteContent['main-content']['vision-h4'];

let p5 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
p5.textContent = siteContent['main-content']['vision-content'];

let contacts = document.querySelector('.contact h4');
contacts.textContent = siteContent['contact']['contact-h4'];

let contactsp1 = document.querySelector('.contact p');
contactsp1.textContent = siteContent['contact']['address'];

let contactsp2 = document.querySelector('.contact p:nth-of-type(2)');
contactsp2.textContent = siteContent['contact']['phone'];

let contactsp3 = document.querySelector('.contact p:nth-of-type(3)');
contactsp3.textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
