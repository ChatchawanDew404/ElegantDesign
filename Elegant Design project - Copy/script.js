 window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 200)
})

function toggleMenu(){
    const menuToggle = document.querySelector(".fa-bars")
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('fa-times');
    navigation.classList.toggle('active');
}