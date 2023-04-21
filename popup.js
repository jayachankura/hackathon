const button = document.querySelector("button");
const body = document.querySelector("body");

// test putting cat image on website
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3B4NzU1MDcwLWltYWdlLWpvYjEzMTUucG5n.png"
);

const testFunc = () => body.appendChild(img);
button.onclick = () => testFunc();
