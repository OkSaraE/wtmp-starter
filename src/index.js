const menus = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

//1 dunno what this even means

// 2 Sort by price
menus.sort((a,b) => a.price - b.price);

console.log("menuSort");
console.log(menus);

// 3 Filter ( <5€)
const filterMenu = menus.filter(menu => {
  return menu.price < 5;
});
console.log("filterMenu");
console.log(filterMenu);

// 4 Raise price 15% (map)
const raisePrice = menus.map((menu) => {
  return{name:menu.name, price:menu.price*1.15};
});

console.log("raisePrice");
console.log(raisePrice);

// 5 Whole menu price
const sumMenu = menus.reduce((acc, current) => {
  return acc + current.price;
}, 0);

console.log("sumMenu");
console.log(sumMenu);

