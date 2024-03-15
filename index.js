window.addEventListener("scroll",()=>{
    let navbar = document.querySelector('nav')
    if(window.scrollY >= 15){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
})

