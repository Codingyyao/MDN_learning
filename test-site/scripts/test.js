let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myHTML = document.querySelector('html');
myHTML.onclick = function() {};

// onclick 是匿名函数

document.querySelector('html').addEventListener('click', () => {
  alert('别戳我，我怕疼。');
});