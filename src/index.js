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

//menu sorting
//not working with multiple menus
// const sortMenu = (menu, order = "asc") => {
//   menu.sort();
//   if (order === "desc") {
//     menu.reverse();
//   }
//   return menu;
// };

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

//init
const init = async () => {
  activeMenus = [await Sodexo.getDailyMenu(lang), await Fazer.getDailyMenu(lang)];
  menuContainers = document.querySelectorAll(".menu-container");
  for (const [index, menu] of activeMenus.entries()) {
    renderMenu(menu, menuContainers[index]);
  }
};

init();

sw();
//moved to own module
// if (APP_CONF.productionMode && 'serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('./service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }
