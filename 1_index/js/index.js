const hamBar = document.querySelector("a.hamBar");
const sideInner = document.querySelector(".sideInner");
hamBar.addEventListener("click", function(e){
    e.preventDefault();
        const nav = document.querySelector("section.nav");
        nav.classList.toggle("nav_show");

        if(sideInner.style.display === 'none'){
            sideInner.style.display = 'block'
        }else{
            sideInner.style.display = 'none'
        }
});

sideInner.addEventListener("click", function(){
    if(sideInner.style.display === 'block'){
        sideInner.style.display = 'none'
            let nav = document.querySelector("section.nav")
            nav.classList.remove('nav_show');
    }else{
        sideInner.style.display = 'block'
    }
})


const drop_down1 = document.querySelectorAll("a.drop_down")[0]
const drop_down2 = document.querySelectorAll("a.drop_down")[1]

drop_down1.addEventListener("click", function(){
    const second_nav_1 = document.querySelectorAll(".second_nav")[0]
    const angleDown = document.querySelectorAll("i.fa-angle-down")[0]

    if(second_nav_1.style.display === 'none'){
        second_nav_1.style.display = 'block';
        angleDown.style.transform = 'rotate(180deg)';
    }else{
        second_nav_1.style.display = 'none';
        angleDown.style.transform = 'rotate(0deg)';
    }
})

drop_down2.addEventListener("click", function(){
    const second_nav_2 = document.querySelectorAll(".second_nav")[1]
    const angleDown = document.querySelectorAll("i.fa-angle-down")[1]

    if(second_nav_2.style.display === 'none'){
        second_nav_2.style.display = 'block'
        angleDown.style.transform = 'rotate(180deg)'
    }else{
        second_nav_2.style.display = 'none'
        angleDown.style.transform = 'rotate(0deg)'
    }
})

