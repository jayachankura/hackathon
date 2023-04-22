const catContainer = document.querySelector("div");
catContainer.setAttribute("class", "cat-container");

// append catContainer to body
const body = document.querySelector("body");
body.appendChild(catContainer);

const images2 = [
  "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3B4NzU1MDcwLWltYWdlLWpvYjEzMTUucG5n.png",
  "https://wallpapers.com/images/featured/g9rdx9uk2425fip2.jpg",
  "https://cdn.wallpapersafari.com/34/82/Usl8dr.jpg",
  "https://t3.ftcdn.net/jpg/05/52/00/32/360_F_552003217_A2dFmqNuVvMWwlUWZamCWMgdmmsrSf7Z.jpg",
  "https://www.pcclean.io/wp-content/uploads/2020/4/ma6jAj.jpg",
  "https://wallpapers.com/images/hd/cool-hooded-black-cat-computer-sxcbxea9u0t2ylel.jpg",
  "https://images3.alphacoders.com/738/738230.jpg",
  "https://www.catbreedslist.com/cat-wallpapers/cat-wallpaper-cartoon-cute-purple-1280x1024.jpg",
  "https://cdn.wallpapersafari.com/29/26/YSAFj4.jpg",
];

let random = Math.floor(Math.random() * images2.length);
// create element and insert pic in catContainer
const img = document.createElement("img");
img.setAttribute("src", images2[random]);
img.setAttribute("class", "cat cat-animation-1");
catContainer.appendChild(img);
