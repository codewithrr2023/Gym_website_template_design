console.log("ritu")

const mobile=document.querySelector(".mobile-nav");

const header=document.querySelector("header");
const menu=document.querySelector(".fa-bars");

const show_logo=document.querySelector(".show-logo")
const navbar=document.querySelector(".nav-bar");
console.log(menu)

const cancel=document.querySelector(".fa-xmark");
console.log(cancel);

mobile.addEventListener("click",function(){
    mobile.classList.toggle("active");
    navbar.classList.toggle("active");
})


// JS for animation on navigation
window.onscroll=(function(){
    if(this.scrollY>20){
        header.classList.add("sticky");
        show_logo.classList.add("sticky")
    }

    else{
        header.classList.remove("sticky");
        show_logo.classList.remove("sticky")
    }
})


// JS for image slider in mobile view
const gallery=document.querySelectorAll(".gallery");
console.log(gallery)

const circle=document.querySelectorAll(".circle")
console.log(circle);

for(let i=0;i<circle.length;i++){
    circle[i].addEventListener("click",function(){
        for(let x=0;x<gallery.length;x++){
            if(x==i){
                gallery[x].style.display="block";
                circle[x].classList.add("active");
            }

            else{
                gallery[x].style.display="none";
                circle[x].classList.remove("active");
            }
        }
    })
}

// JS for imagslider in desktop view
const content=document.querySelectorAll(".content");
let flag=1;

slideshow(flag);

function controller(x){
    flag=flag+x;
    slideshow(flag);
    
}

function slideshow(num){

    if(flag<0){
        flag=gallery.length-1;
        num=gallery.length-1;
    }

    if(flag==gallery.length){
        flag=0;
        num=0;
    }

    for(let i=0;i<gallery.length;i++){
        gallery[i].style.display='none'
    }

    gallery[num].style.display="block";
  
}

//js for counter

const counters=document.querySelectorAll(".count");

const main_tgt=document.querySelector(".main-counter")

// window.onscroll=(function(){
//     if(this.scrollY=main_tgt){
        
//     }
// })


counters.forEach(counter=>{
    function updatecount(){
        const target=+counter.getAttribute("data-count")
        console.log(counter.innerHTML);
        // console.log(target)
        const count= ++counter.innerHTML;
        // console.log(count);
        const inc = Math.floor((target - count) / 50);
        counter.innerHTML=count+inc;
        if(count==target){
            count=0;
         }
        setTimeout(updatecount,5)
   
    }

    updatecount();
});


//js for duration

const caloris=document.querySelector(".caloris");
console.log(caloris)
const energy=document.querySelector(".energy");
console.log(energy)

console.log(caloris.offsetWidth)


//js for classes-wrapper

const class_wrapper=document.querySelectorAll(".classes .classes-wrapper");
console.log(class_wrapper)

const class_wrapper_button=document.querySelectorAll(".classes-wrapper-btn");
console.log(class_wrapper_button);


for(let i=0;i<class_wrapper_button.length;i++){
    class_wrapper_button[i].addEventListener("click",function(){
        for(let x=0;x<class_wrapper.length;x++){
            if(x==i){
                class_wrapper[x].style.display="block";
                class_wrapper_button[x].classList.add("active");
            }

            else{
                class_wrapper[x].style.display="none";
                class_wrapper_button[x].classList.remove("active");
            }
        }
    })
}


