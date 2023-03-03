import Sodexo from "./modules/sodexo-data";
import Fazer from "./modules/fazer-data";
import sw from "./modules/serviceWorker";

let lang = "fi";
let menuContainers = [];
let activeMenus = [];

//menu rendering to page
const renderMenu = (menu, targetElem) => {
  const menuContainer = targetElem;
  menuContainer.innerHTML = "";
  const list = document.createElement("ul");
  for (const dish of menu) {
    const li = document.createElement("li");
    li.textContent = dish;
    list.append(li);
  }
  menuContainer.append(list);
};


//language change
const changeLanguage = async (language) => {
  activeMenus[0] = await Sodexo.getDailyMenu(language);
  activeMenus[1] = await Fazer.getDailyMenu(language);
  lang = language;
  for (const [index, menu] of activeMenus.entries()) {
    renderMenu(menu, menuContainers[index]);
  }
};

//picking random menu
const randButton = document.querySelector("#rand-button");
randButton.addEventListener("click", () => {
  const dish = getRandomDish(activeMenus[0]);
  const menuText2 = document.querySelector("#menuRandom");
  menuText2.innerHTML = "";
  menuText2.append(dish);
  menuText2.style.visibility = "visible";
});

const getRandomDish = (menu) => {
  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
};

const sortButton = document.querySelector("#sort-button");
sortButton.addEventListener("click", () => {
  renderMenu(sortMenu(activeMenus[0]));
});

const langButton = document.querySelector("#lang-button");
langButton.addEventListener("click", () => {
  if (lang === "fi") {
    changeLanguage("en");
  } else {
    changeLanguage("fi");
  }
});

//Theme change 1 = light || 2 = dark
let theme = 1;
const body = document.querySelector("body");
const themeButton = document.querySelector("#theme-button");
//check wich theme is curently in use and changes it
themeButton.addEventListener("click", () => {
  if (theme === 1) {
    body.style.backgroundColor = "#22272E";
    body.style.color = "white";
    theme = 2;
  } else {
    theme = 1;
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }

  //saves the new theme to the local Storage
  localStorage.setItem('theme', theme);
});

//init
const init = async () => {
  activeMenus = [
    await Sodexo.getDailyMenu(lang),
    await Fazer.getDailyMenu(lang),
  ];
  menuContainers = document.querySelectorAll(".menu-container");
  for (const [index, menu] of activeMenus.entries()) {
    renderMenu(menu, menuContainers[index]);
  }
};

init();

sw();
