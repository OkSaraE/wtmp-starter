import {doFetch} from './network';

const weeklyUrl =
  'https://www.compass-group.fi/menuapi/feed/json?costNumber=3208&language=';

const getDailyMenu = async (lang) => {
  try {
    const weeklyMenu = await doFetch(weeklyUrl + lang, true);
    console.log('fazer menu', weeklyMenu);
    const courses = weeklyMenu.MenusForDays[0].SetMenus.map(
      (menuItem) => {
        return menuItem.Components.join(', ');
      }
    );
    return courses;
  } catch (error) {
    throw new Error('getDailyMenu error: ' + error);
  }
};

const Fazer = {getDailyMenu};
export default Fazer;
