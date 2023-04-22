const body = document.querySelector("body");

const images = {
  first:
    "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3B4NzU1MDcwLWltYWdlLWpvYjEzMTUucG5n.png",
};

// create element and insert pic
const img = document.createElement("img");
img.setAttribute("src", images.first);

const button = document.querySelector("button");
const testFunc = () => body.appendChild(img);
button.onclick = () => testFunc();

//inject javascript into the current open file
//how to interact between pop-up and open page
//checkout csx chrome extension instructions
//local storage

//victor has an index.html
/**
 * local
 *
 */
//background service worker for the separate
// js functionality to manipulate local storage as state
//use a selector from main.js to something on your actual dom
//how to inject functionality into the main website
