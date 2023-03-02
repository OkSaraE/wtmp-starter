// import Menu from '../mock-data/sodexo.json';
import { doFetch } from "./network";
// console.log('menu from json', Menu);

const today = new Date().toISOString().split("T")[0];
const dailyUrl =
  "https://www.sodexo.fi/ruokalistat/output/daily_json/152/" + today;

const getDailyMenu = async (lang) => {
  try {
    const menu = await doFetch(dailyUrl);
  const coursesEn = Object.values(menu.courses).map(
    (course) => course.title_en
  );
  const coursesFi = Object.values(menu.courses).map(
    (course) => course.title_fi
  );
  return lang == 'en' ? coursesEn : coursesFi;

  }catch(error){
    console.log(error);
    throw new Error(error);
  }

};

const sodexo = {getDailyMenu};

export default sodexo;
