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

// 
// fade visable elements
// 
// Start Services Section //
window.addEventListener('scroll',()=>{
    if (window.scrollY >= 450) {
        document.querySelectorAll('.serv').forEach(serv =>{
            serv.classList.add('active');
        })
    }else{
        document.querySelectorAll('.serv').forEach(serv =>{
            serv.classList.remove('active')
        })
    }
    // Start Price Section //
    if (window.scrollY >= 1610) {
        Array.from(document.querySelector('.plans').children).forEach(plan =>{
            plan.classList.add('active')
        })
    }else{
        Array.from(document.querySelector('.plans').children).forEach(plan =>{
            plan.classList.remove('active')
        })
    }
})
// fade on page load 
// 
window.onload=function(){
    document.body.style.opacity='1'
    document.body.style.transition="0.5s ease-in"
}