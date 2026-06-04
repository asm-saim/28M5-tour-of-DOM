const value1=document.getElementById('total');

//create element, and inner value.
const newSection=document.createElement('section');

const newh1=document.createElement('h1');

//h1
newh1.innerText="Hello, this is new heading created by JS."
newh1.style.fontSize='23px';

//ul, li
const newUl=document.createElement('ul');
const newli=document.createElement('li');
const newli2=document.createElement('li');
newli.innerText='Orange';
newli2.innerText='Mango';

//append
value1.appendChild(newSection);

newSection.appendChild(newh1);

newSection.appendChild(newUl);

newUl.appendChild(newli);
newUl.appendChild(newli2);


//innerHTML
const callId=document.getElementById('total');

const latestSection=document.createElement('section');
latestSection.innerHTML=
`
<h1> This line is created by innerHTML</h1> 
<ul>
<li>Physics</li>
<li>Math</li>
<li>Statistics</li>
</ul>

` 
callId.appendChild(latestSection);
