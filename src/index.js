import Sodexo from "./modules/sodexo-data";
//import Fazer from "./modules/fazer-data";
import sw from "./modules/serviceWorker";

let lang = "fi";
const restaurants = [
  { name: "Myrtsi", id: 152, type: "sodexo" },
  { name: "Karaportti", id: 3208, type: "fazer" },
];

//menu rendering to page
const renderMenu = (menu, targetElem) => {
  const menuContainer = document.createElement('div');
  menuContainer.classList = 'menu-container';
  targetElem.append(menuContainer);
  const list = document.createElement('ul');
  for (const dish of menu) {
    const li = document.createElement('li');
    li.textContent = dish;
    list.append(li);
  }
  menuContainer.append(list);
};

//language change
const changeLanguage = async (language) => {
  lang = language;
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
  const menuWrapper = document.querySelector("#menu-wrapper");
  for (const restaurant of restaurants) {
    if(restaurant.type === 'sodexo'){
      const menu = await Sodexo.getDailyMenu(restaurant.id, lang);
      renderMenu(menu, menuWrapper);
    } else if (restaurant.type === 'fazer'){
      const menu = await FinalizationRegistry.getDailyMenu(lang);
      renderMenu(menu, menuWrapper);
    }


  }
};

init();
sw();
