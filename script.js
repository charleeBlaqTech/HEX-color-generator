//Nav-bar section

const hamburger=document.getElementById('hamburg')
const unoder=document.getElementById('unoder1')
hamburger.addEventListener("click", function(){
    document.querySelector('.hamburger').classList.toggle("active");
    document.querySelector('.nav-links').classList.toggle("active");
})




//color generator section

const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const leters=["A","B","C","D","E","F"]
const color2=["pink","orangered","yellow","grey","red"]
const button=document.getElementById("btn");
const body=document.querySelector('body');
const color=document.querySelector(".color");




button.addEventListener('click', function(){
    let hexColor="#"
    hexColor+=randomColor()
    body.style.background=hexColor;
    color.innerHTML=hexColor;
    color.style.backgroundColor=bannerColor();
    document.getElementById('color').style.backgroundColor=bannerColor()
})

function randomColor(){
    //generating random numbers to make up the 3 values for the rgb
    let h=Math.floor(Math.random() * colors.length );
    let e=Math.floor(Math.random() * leters.length);
    let x=Math.floor(Math.random() * colors.length);
    let a=Math.floor(Math.random() * leters.length);
    let d=Math.floor(Math.random() * colors.length);
    let m=Math.floor(Math.random() * leters.length);
    
    return `${colors[h]}${leters[e]}${colors[x]}${leters[a]}${colors[d]}${leters[m]}`
}

function bannerColor(){
   let randomValue=Math.floor(Math.random() * color2.length)
   return color2[randomValue]
}

