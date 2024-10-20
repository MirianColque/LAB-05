const rootDiv = document.getElementById("root");
const root = document.getElementById("root");
const heading = document.createElement("h2");
const link = document.createElement("a");
const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];
const ul = document.createElement("ul");
buyList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
    });
link.href = "https://www.google.com";
link.href = "https://keybr.com";

link.target = "_blank";
link.textContent = "Google";
heading.textContent ="INTERACTUANDO CON EL DOM"

rootDiv.appendChild(link);
root.appendChild(heading);

rootDiv.appendChild(ul);