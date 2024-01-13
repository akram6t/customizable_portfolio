const domain = window.location.origin;

async function getData(){
  const response = await fetch(`${domain}/data/data.json`);
  const data = await response.json();

// set background image in body
document.body.style.backgroundImage = `url('${domain}${data.background}')`;

const navbarName = document.getElementById("navbarName");
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

navbarName.innerHTML = data.name;



// work on skills
iconSkills.sort(function (a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
});



// work on skills
const gridSkills = document.getElementById("gridSkills");
function ItemSkills(item) {
    return `<div class="border p-5 rounded-lg">
  <img class="w-full" src="${domain}${item.logo}" alt="reactjs" />
  <p class="font-bold text-center mt-3">${item.title}<p/>
</div>`;
}

for (let item of iconSkills) {
    gridSkills.innerHTML = gridSkills.innerHTML + ItemSkills(item);
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

}

getData();