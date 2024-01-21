const mainElement = document.getElementById("main");
mainElement.remove();

const newHeader = document.createElement("h1");

newHeader.id = 'victory';

newHeader.textContent = 'Victor is the champion';
document.body.appendChild(newHeader);


const element = document.createElement("div");
document.body.append(element);

const ul1 = document.createElement("ul"); 

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul1.append(li); 
}

element.append(ul1);

const main = document.getElementById("main");
main.style.height = "300px";
main.style.backgroundColor = "#27647B";
main.textContent = "Dont give up!";
main.style.fontSize = "24px";
main.style.marginLeft = "30px";
main.style.lineHeight = 2;
main.className = "pet-listing dog";

const ul2 = document.getElementsByTagName("ul")[0]; 
const secondChild = ul2.querySelector("li:nth-child(2)");
ul2.removeChild(secondChild); 

const elementToRemove = document.getElementById("main");
elementToRemove.remove();

const yourName = "Victor"; 
const championText = `${yourName} is the champion`;

element.textContent = championText;