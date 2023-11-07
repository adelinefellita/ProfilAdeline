let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let li = document.querySelectorAll(".faq-text li");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
            clickedLi = e.target.parentElement;
            
        }else{
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
        
    });
    
};

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.beranda-text',{delay:200, origin:'top'});
sr.reveal('.beranda-img',{delay:500, origin:'top'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});
