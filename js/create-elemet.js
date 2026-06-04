//create the element and set inner text
const newData = document.createElement('li');
newData.innerText = 'Marshal Art';

//find the parent where we want to add the child.
const newData2 = document.getElementById('sport');
newData2.appendChild(newData);



//parentNode
const values = document.getElementById('sport');

console.log(values.parentNode); 
console.log(values.parentNode.id); 


//childNode
const newValue=document.getElementById("new");

//Returns a live NodeList of ALL child nodes — including text nodes, comments, and elements.
console.log(newValue.childNodes);

//to get only HTMLelements
console.log(newValue.children);
