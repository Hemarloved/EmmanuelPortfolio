/*This is a function that shows greeting for the different times in a day*/

var  greeter = document.getElementById('greeters');
var today = new Date();
var hourNow = today.getHours();
var greeting;



if (hourNow >= 18){
    greeting = 'Good Evening!' 
} else if (hourNow >= 12){
    greeting ='Good Afternoon!';
} else if (hourNow > 0){
    greeting = 'Good Morning!';
} else{
    greeting = '';
}



greeter.textContent = greeting + " welcome to Hemar's" + ' world';

/* The code block here brings about the font design on My name is Emmanuel*/

const text = document.querySelector('.emmy');
const strText =  text.textContent;
const splitText = strText.split('');
console.log(splitText)
//const subString = strTest.subString(11, 19);
text.textContent ="";

for (let i=0; i < splitText.length;i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}


let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}





/*

function pageTransition(){

    var tl = gsap.timeline();
    tl.to("ul .transition li", {
        duration:1.2,
        scaleY:1,
        transformOrigin:"bottom left",
        stagger:.2,
        width:"100%"
    })
    tl.to("ul .transition li",{
        duration:1.2,
        scaleY:0,
        transformOrigin:"bottom left",
        stagger:.1,
        delay:.1,
        width:"100%",
        
    })

}

function contentAnimation(){
    var tl = gsap.timeline();
    tl.from(".left", { duration:1, y: 30, opacity:0, stagger:0.4, delay:0.2
    });
    tl.to('img', {clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"});


function delay(n) {
    n = n || 2000;
    return new Promise((done)=> {
        setTimeout(() => {
            done();
        }, n);
    
    });
}

barba.init({

    sync: true,

    transitions: [{


        async leave(data) {
            const done = this.async();

            PageTransition();
            await delay(1500);
            done();
        },

        async enter(data){
            contentAnimation();
        },

        async enter(data){
            contentAnimation();
        },

        async once(data){
            contentAnimation();
        },

       

    }]
});
 












/*
function delay(n) {
    n = n || 2000;
    return new Promise((done)=> {
        setTimeout(() => {
            done();
        }, n);
    
    });
}


function pageTransition(){
    var tl =gsap.timeline();
    tl.to(".loading-screen", {
        duration:1.2,
        width:"100%",
        left:"0%",
        ease:"Expo.easeInOut"
    });
    
    tl.to(".loading-screen",{
        duration:1,
        width:"100%",
        left:"100%",
        ease:"Expo.easeInOut",
        delay:0.3
    });
    tl.set(".loading-screen", { left: "-100%"});
}

function contentAnimation(){
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration:1, y: 30, opacity:0, stagger:0.4, delay:0.2
    });
}

$(function() {
    barba.init({
        sync:true,

        transitions: [
            {
                async leave(data){
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data){
                    contentAnimation();
                },

                async enter(data){
                    contentAnimation();
                },

                async once(data){
                    contentAnimation();
                },
            },
        ],
    });
}); 


gsap.from('.text-container',{opacity:0, duration:1, y:-50});
gsap.from('.trend',{opacity:0, duration:1, y:-30})


*/