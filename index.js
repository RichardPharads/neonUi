const btnMenu = document.getElementById('menu').addEventListener('click',openSideBar)
const btnClose = document.getElementById('close').addEventListener('click',closeSideBar)
const sidebar = document.querySelector(".sidebar")
let style = window.getComputedStyle(headClass);

function openSideBar(){
    sidebar.style.display = 'block'
}

function closeSideBar(){
    sidebar.style.display = 'none'
}