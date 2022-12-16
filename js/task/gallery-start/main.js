const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

//const newImage = document.createElement('img');
//newImage.setAttribute('src', xxx);
//newImage.setAttribute('alt', xxx);
//thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

const imgNames = ['pic1.jpg', 'pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

for (i=0; i< imgNames.length; i++){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + imgNames[i]);
    newImage.setAttribute('alt', imgNames[i]);
    thumbBar.appendChild(newImage);
}


const imgs = document.querySelectorAll('.thumb-bar img');
console.log(imgs);

for (i=0; i<imgs.length; i++)
{
const e = imgs[i];
e.onclick = function() {
var srcName = e.getAttribute('src');
displayedImage.setAttribute('src', srcName);
 }}

//console.log(overlay.style.backgroundColor)


btn.addEventListener('click', () => {

if (btn.getAttribute('class') === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
else
{
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}
});
