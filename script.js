'use strict'
console.log("load");

const pages = document.querySelectorAll(".page");

pages.forEach((page)=>{
    const back = page.firstChild();
    back.addEventListener('click',()=>{
        page.classlist.remove('page--active')
    })
    
    page.addEventListener('click', ()=>{
        pages.classlist.add('.page--active');

    })
})