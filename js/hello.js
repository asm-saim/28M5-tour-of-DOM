// const sections=document.getElementsByTagName('section');
// for(let section of sections)
// {
//     console.log(section.innerText);
// }

const sections= document.querySelectorAll('section');
for(let section of sections){
    section.style.backgroundColor='lightblue';
    section.style.border='2px solid blue';
    section.style.margin='20px';
    section.style.borderRadius='20px';
} 

//
const values=document.getElementById('tour');
values.style.backgroundColor='grey';