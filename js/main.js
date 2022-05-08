const menu=document.querySelector('.menu');
const show = document.querySelector('#menu');
const closeMenu = document.querySelector('#close');
const menuLinks = document.querySelectorAll('.menu_link');
show.onclick = () =>{
    menu.classList.toggle('showmenu');
}
closeMenu.onclick = () =>{
    menu.classList.remove('showmenu');
}
for(var index in menuLinks){
    menuLinks[index].onclick = () =>{
        menu.classList.remove('showmenu');
    }
}