import Menu from '../mock-data/sodexo.json';
// console.log('menu from json', Menu);

const coursesEn = Object.values(Menu.courses).map((course) => course.title_en);
const coursesFi = Object.values(Menu.courses).map((course) => course.title_fi);

const sodexo = {coursesEn, coursesFi};

export default sodexo;
