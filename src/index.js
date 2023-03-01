import Sodexo from "./modules/sodexo-data";
import Fazer from "./modules/fazer-data";

let lang = "fi";
let menuContainers = [];
let activeMenus = [];

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

// TODO: fix for multiple menus
const sortMenu = (menu, order = "asc") => {
  // create a copy of the menu for sorting
  // don't change the original arrays's order
  menu = [...menu];
  menu.sort();
  if (order === "desc") {
    menu.reverse();
  }
  return menu;
};

const changeLanguage = (language) => {
  if (language === "fi") {
    activeMenus[0] = Sodexo.coursesFi;
    activeMenus[1] = Fazer.coursesFi;
  } else if (language === "en") {
    activeMenus[0] = Sodexo.coursesEn;
    activeMenus[1] = Fazer.coursesEn;
  }
  lang = language;
  // TODO: implement & use generic renderAll() function??
  for (const [index, menu] of activeMenus.entries()) {
    renderMenu(menu, menuContainers[index]);
  }
};

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


const randButton = document.querySelector("#rand-button");
randButton.addEventListener("click", () => {
  // alert(getRandomDish(activeMenus[0]));
  const dish = getRandomDish(activeMenus[0]);
  const menuText2 = document.querySelector("#menuRandom");
  menuText2.innerHTML = "";
  menuText2.append(dish);
  menuText2.style.visibility = "visible";
});

const init = () => {
  activeMenus = [Sodexo.coursesFi, Fazer.coursesFi];
  menuContainers = document.querySelectorAll(".menu-container");
  for (const [index, menu] of activeMenus.entries()) {
    renderMenu(menu, menuContainers[index]);
  }
};
init();
