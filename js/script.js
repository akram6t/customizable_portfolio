const domain = window.location.origin;

async function getData(){
  const response = await fetch(`${domain}/data/data.json`);
  const data = await response.json();

// set background image in body
document.body.style.backgroundImage = `url('${domain}${data.background}')`;

const navRef = document.getElementById("navBar");
const navbarMenu = document.getElementById("navbarMenu"); // Get a reference to the navigation container

// click outside of navbar to hide navbarMenu
document.addEventListener("click", (event) => {
  if (navRef && !navRef.contains(event.target)) {
    navbarMenu.classList.add("hidden");
  }
});

function toggleNav() {
  navbarMenu.classList.toggle("hidden");
}

// SetData
// const navbarName = document.getElementById("navbarName
const headerName = document.getElementById("headerName");
const aboutName = document.getElementById("aboutName");
const footerName = document.getElementById("footerName");

const headerProfile = document.getElementById("headerProfile");
const aboutProfile = document.getElementById("aboutProfile");

const headerDescription = document.getElementById("headerDescription");
const aboutDescription = document.getElementById("aboutDescription");

// cv
document.getElementById('btnCV').href = domain + data.cv;

// names
navbarName.innerHTML = data.name;
headerName.innerHTML = data.name;
aboutName.innerHTML = data.name;
footerName.innerHTML = data.name;

// profiles
headerProfile.src = domain + data.headerProfile;
aboutProfile.src = domain + data.aboutProfile;

// descriptions
headerDescription.innerText = data.headerDescription;
aboutDescription.innerText = data.aboutDescription;

// work on WhatIDo
const gridWhatIDo = document.getElementById("gridWhatIDo");
function Item_WhatIDo(item) {
  return `<div
  class="overflow-hidden h-28 px-5 py-3 flex gap-5 items-center shadow-lg bg-white rounded-lg bg-opacity-5 hover:bg-opacity-20">
  <i class="fa-solid fa-check"></i>
  <p>${item}</p>
</div>`;
}
for (let item of data.whatIDo) {
  gridWhatIDo.innerHTML = gridWhatIDo.innerHTML + Item_WhatIDo(item);
}



// work on skills
const gridSkills = document.getElementById("gridSkills");
function ItemSkills(item) {
  return `<div class="progressbar group relative p-8" style="--value: ${item.percent}">
  <div
      class="tooltip text-lg transition group-hover:visible invisible absolute top-0 mx-auto bg-black px-2 pt-1 rounded translate-y-[-12px]">
      ${item.title}
  </div>
  <img class="w-full h-full" src="${domain}${item.logo}" alt="reactjs" />
</div>`;
}
for (let item of data.skills) {
  gridSkills.innerHTML = gridSkills.innerHTML + ItemSkills(item);
}



// work on Social Links
const listSocial = document.getElementById("listSocial");
function ItemSocial(item) {
  return `<a id="socialBgColor" href="${item.link}" target="_blank"
  class="px-3 py-2 cursor-pointer bg-[${item.bgColor}] text-[${item.color}] rounded-full shadow-lg hover:bg-opacity-70 active:bg-opacity-40 transition font-bold">
  <i id="socialIcon" class="me-2 ${item.icon} text-[${item.color}]"></i>${item.name}
</a>`;
}
for (let item of data.socialLinks) {
  listSocial.innerHTML = listSocial.innerHTML + ItemSocial(item);
}



// work on Footer Social Links
const footerLinkSocial = document.getElementById("footerLinkSocial");
function ItemFooterSocial(item) {
  return `<a target="_blank" href="${item.link}"
  class="px-3 py-2 cursor-pointer bg-[${item.bgColor}] rounded-full shadow-lg hover:bg-opacity-70 active:bg-opacity-40 transition font-bold text-white">
  <i class="${item.icon} text-[${item.color}]"></i>
</a>`;
}
for (let item of data.socialLinks) {
  footerLinkSocial.innerHTML =
    footerLinkSocial.innerHTML + ItemFooterSocial(item);
}



// work on Contact
const listContact = document.getElementById("listContact");
function ItemContact(item) {
  return ` <div class="flex gap-5 p-4 items-center cursor-pointer transition rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 hover:shadow-lg active:bg-opacity-30">
    <span class="bg-yellow-300 px-3 py-2 rounded-full">
        <i class="${item.icon} text-black text-4xl"></i>
    </span>
    <div>
      <h2 class="text-xl font-semibold">${item.title}</h2>
      <h3 class="text-lg">${item.subTitle}</h3>
    </div>
</div>`;
}
for (let item of data.contacts) {
  listContact.innerHTML = listContact.innerHTML + ItemContact(item);
}



// Work on Projects
const listProjects = document.getElementById("listProjects");
function itemProjects(item, pid) {
  return `<div
  class="card overflow-hidden shadow-lg hover:shadow-2xl bg-white rounded-lg bg-opacity-5 cursor-pointer">
  <div class="relative w-full h-56 group">
      <a href="${item.sourceCode}"
          class="absolute px-3 py-2 rounded-full transition bottom-2 right-3 bg-black bg-opacity-50 backdrop-blur hover:bg-opacity-70 active:bg-opacity-90">Source
          Code</a>
      <img class="w-full h-full object-cover object-center rounded-lg"
          src="${item.image}" alt="" />
  </div>
  <div class="details mt-3 p-2">
      <h2 class="text-xl text-gray-200 font-semibold">
          ${item.title}
      </h2>
      <h4 class="mt-2 text-gray-300 line-clamp-2">
          ${item.description}
      </h4>
      <hr class="mt-3 border-gray-500" />
      <div id="${pid}" class="languages mt-4 flex gap-3 px-2 py-2">
        
      </div>
  </div>
</div>`;
}

let langIdName = 0;
for (let item of data.projects) {
  langIdName += 1;
  listProjects.innerHTML =
    listProjects.innerHTML + itemProjects(item, `pid${langIdName}`);
  listLanguages(item, `pid${langIdName}`);
}

function listLanguages(item, pid) {
  const listLanguages = document.getElementById(pid);
  function itemLanguages(language) {
    return `<span class="relative group cursor-pointer">
  <img src="${language.icon}" class="w-7 h-7">
  <span
      class="text-lg shadow px-2 py-1 absolute top-0 left-0 rounded-lg translate-y-[-35px] bg-black invisible group-hover:visible">${language.name}</span>
  </img>
</span>`;
  }

  for (let language of item.languages) {
    listLanguages.innerHTML = listLanguages.innerHTML + itemLanguages(language);
  }
}





// header link - this is a button of link its contain in left of about button in header section
const headerLink = document.getElementById('headerLink');

function itemBtnLink(){
  // in this use a btn from data -> socialLinks -> position-[0 to count ofsocial links]
  const btnLink = data.socialLinks[0];
  return `<a href="${btnLink.link}"
  class="px-3 py-2 bg-yellow-400 rounded-full shadow-lg hover:bg-opacity-70 active:bg-opacity-50 transition font-bold text-black">
  <i class="${btnLink.icon} text-black me-2"></i>${btnLink.name}
</a>`
}
headerLink.innerHTML = itemBtnLink() + headerLink.innerHTML;

}


getData();