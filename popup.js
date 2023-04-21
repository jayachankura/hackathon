alert("working");
const button = document.querySelector("button");
const testFunc = () => console.log("click");
button.onclick = () => testFunc();
