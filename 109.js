// let navItems = document.getElementsByTagName("a"); //htmlcollection
// console.log(navItems);

// for (let i = 0; i < navItems.length; i++) {
//   //   console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "grey";
//   navItem.style.fontWeight = "bold";
// });

// for (let navItem of navItems) {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "blue";
//   navItem.style.fontWeight = "bold";
// }

//array like object --->> indexing, length
//
//simple for loop
//for of loop
//forEach(we cannot use for each method to iterate html collection)

//

// const navItems = document.querySelectorAll(".nav-item"); //nodelist
// console.log(navItems);

let navItems = document.querySelectorAll("a");
console.log(navItems);
