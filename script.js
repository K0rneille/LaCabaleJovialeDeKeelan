'use strict'
console.log("load");

const before = document.querySelector('.nav__before')
const after = document.querySelector('.nav__after')

const pages = document.querySelectorAll(".page");
const navs = document.querySelectorAll('.nav__element');


before.addEventListener('click', (e)=>{
e.preventDefault()
const previousNav=document.querySelector('.nav__element--active')
let targetNav= previousNav.previousElementSibling
previousNav.classList.remove('nav__element--active')

if (targetNav) {
targetNav.classList.add('nav__element--active');
changePage(targetNav.innerHTML)}
else{
navs[5].classList.add('nav__element--active');
changePage(navs[5].innerHTML)}
}
)


after.addEventListener('click', (e)=>{
e.preventDefault()
const previousNav = document.querySelector('.nav__element--active')
const targetNav = previousNav.nextElementSibling
previousNav.classList.remove('nav__element--active')
if (targetNav) {
targetNav.classList.add('nav__element--active');
changePage(targetNav.innerHTML)}
else{ 
navs[0].classList.add('nav__element--active');
changePage(navs[0].innerHTML)}
}
)

function changePage(target){
const previousPage = document.querySelector('.page--active')
previousPage.classList.remove('page--active')
const targetpage = pages[target - 1];
targetpage.classList.add('page--active')
}

