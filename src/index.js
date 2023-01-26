import sodexo from './modules/sodexo-data';
import fazer from './modules/fazer-data';

let lang = "fi";
let activeMenus = [sodexo.coursesFi, fazer.coursesFi];
/**
 * renders menu content to html page
 * @param {*} menu - array of courses
 */
// Menu renderin, 3
const renderMenu = (menu, targetElement) => {
  const menuText = targetElement;
  menuText.innerHTML = "";
  const list = document.createElement("ul");
  for (const dish of menu) {
    const li = document.createElement("li");
    li.textContent = dish;

    list.appendChild(li);
  }
  menuText.append(list);
};

renderMenu(activeMenus[0], document.querySelector(".menuText"));
renderMenu(activeMenus[1], document.querySelector(".menuText3"));

//Language change, 4
const changeLan = (language) => {
  if (language === "fi") {
    lang = "fi";
    activeMenu[0] = sodexo.coursesFi;
    activeMenu[1] = fazer.coursesFi;
  } else if (language === "en") {
    activeMenu[0] = sodexo.coursesEn;
    activeMenu[1] = fazer.coursesFi;
  }
  lang = language;
  renderMenu(activeMenu[0]);
};

const lanButton = document.querySelector("#language");

lanButton.addEventListener("click", () => {
  if (lang === "fi") {
    changeLan("en");
  } else if (lang === "en") {
    changeLan("fi");
  }
});

// Menu sortin, 5
const sortMenu = (menu, order = "asc") => {
  menu.sort();
  if (order === "desc") {
    menu.reverse();
  }
  return menu;
};
const sortButton = document.querySelector("#sort");

sortButton.addEventListener("click", () => {
  renderMenu(sortMenu(activeMenu[0]));
});

//random dish, 6
const getRandomDish = (menu) => {
  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
};

const randomButton = document.querySelector("#random");

randomButton.addEventListener("click", () => {
  const dish = getRandomDish(activeMenu[0]);
  const menuText2 = document.querySelector(".menuText2");
  menuText2.innerHTML = "";
  menuText2.append(dish);
});

const init = () => {

};

init();
