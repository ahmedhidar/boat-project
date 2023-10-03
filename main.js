let stars= document.getElementById("stars");
let moon= document.getElementById("moon");
let mountains3= document.getElementById("mountains3");
let mountains4= document.getElementById("mountains4");
let river= document.getElementById("river");
let boat= document.getElementById("boat");
let nouvil= document.querySelector(".nouvil");
window.onscroll= function () {
    let value= scrollY
    stars.style.left= value +'PX';
    moon.style.top= value*5 +'PX';
    mountains3.style.top= value*2 +'PX';
    mountains4.style.top= value*1.5 +'PX';
    river.style.top= value +'PX';
    boat.style.top= value +'PX';
    boat.style.left= value*3 +'PX';
    nouvil.style.fontSize= value*0.80 +'px';
    if(scrollY>=67){
        nouvil.style.fontSize= 67+'px';
        nouvil.style.position= 'fixed';
        if(scrollY>=455){
        nouvil.style.display='none';
        
        }else{
        nouvil.style.display='block';
        }
    }
    if(scrollY>=108){
        document.querySelector('.main').style.background='linear-gradient(#349fd1,#10001f)'
    }else{
        document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'
    }
};