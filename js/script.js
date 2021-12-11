// 
// Toggle Menu logic
// 
const toggle = document.querySelector('header .container .toggleBTN');
const NavbarMenu =document.querySelector('header .container nav');

toggle.addEventListener('click',function(){
    NavbarMenu.classList.toggle('active')
})

//Sticky Navbar in scroll
// 
const navbar = document.querySelector('header');
window.onscroll=function(){
    if(window.scrollY >= 95){
        navbar.classList.add('active');
    }else{
        navbar.classList.remove('active')
    }
}