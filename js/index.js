//1

const pageHeader = document.querySelector('header');

pageHeader.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'yellow';
});

//2

const pageNav = document.querySelector('nav');

pageNav.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'lightblue';
});

//3

const firstPic = document.querySelector('.intro img');

firstPic.addEventListener('wheel', (event) => {
    event.target.style.filter = 'brightness(120%)';
});

//4

const welcomeTitle = document.querySelector('.intro h2');

welcomeTitle.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'red';
});

//5

const everything = document.querySelector('body');

everything.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = 'grey';
});

//6

const letsGo = document.querySelector('.text-content h2');

letsGo.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'red';
});

//7

const adventureText = document.querySelector('.text-content p');

adventureText.addEventListener('contextmenu', (event) => {
    event.target.style.fontSize = '30px';
});

//8

const mapPic = document.querySelector('.img-content img');

mapPic.addEventListener('mousemove', (event) => {
    event.target.style.filter = 'opacity(50%)';
});

//9

const pageFooterLoad = document.querySelector('footer');

window.addEventListener('load', (event) => {
    pageFooterLoad.style.backgroundColor = 'grey';
});

//10

const bigButton = document.querySelector('.btn');

bigButton.addEventListener('mouseup', (event) => {
    event.target.style.color = 'red';
});

//------------Disable Links-----------------//

document.querySelectorAll('nav a').forEach(item => item.addEventListener('click', function (evt) {
    evt.preventDefault();
  }));

//-------------Stop Propogation--child-parent-----------------//

//parent
const destination1 = document.querySelector('.content-pick .destination');

destination1.addEventListener('click', function(event){
        event.target.style.padding = '50px';
        
      });

      
//child
const destination1Header = document.querySelector('.content-pick .destination h4');

destination1Header.addEventListener('click', function(event){
        event.target.style.padding = '20px';
        event.stopImmediatePropagation()
      });