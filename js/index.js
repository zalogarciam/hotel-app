'use strict';

const reservationModal = document.getElementById('exampleModal')
const contactModal = document.getElementById('contactModal')

const myInput = document.getElementById('myInput')

reservationModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

contactModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })


const nav = document.querySelector('nav');
const navMenuIcon = document.getElementById('nav-menu-icon');
const listHeader = document.getElementById('list-header');
const navCloseIcon = document.getElementById('icon-close');
const carouselExampleCaptions = document.getElementById('carouselExampleCaptions');

// const navMenuIcon = document.querySelector('#nav-menu-icon');
console.log(navCloseIcon);
console.log(navMenuIcon);

document.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scroll', window.scrollY > 0);
  });

navCloseIcon.addEventListener('click', () => {
    // listHeader.style.pointerEvents ='none';
    // listHeader.style.opacity = 0;
    carouselExampleCaptions.style.opacity = 1;
    listHeader.classList.remove('list--header-show');
});

navMenuIcon.addEventListener('click', () => {
    // listHeader.style.pointerEvents ='auto';
    // listHeader.style.opacity = 1;
    carouselExampleCaptions.style.opacity = 0;
    listHeader.classList.add('list--header-show');
});