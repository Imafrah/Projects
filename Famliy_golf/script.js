
var crs=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crs.style.left=dets.x+"px"
    crs.style.top=dets.y+"px"    

})
var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crs.style.scale=2;
        crs.style.border="0.5px solid #fff"
        crs.style.backgroundColor="transparent"
        
    })
    ele.addEventListener("mouseleave",function(){
        crs.style.scale=1;
        crs.style.border="0px solid #95c11e"
        crs.style.backgroundColor="#95c11e"
        
    })
})


var crsBlr=document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
    crsBlr.style.left=dets.x-80+"px"
    crsBlr.style.top=dets.y-80+"px"    

})





gsap.to("#nav",{
    backgroundColor:"#95c11e",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",        
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrup:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrup: 2
    }
})

gsap.from("#about-us img,#about-us #about-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:5
    }
})


gsap.from(".card",{
   scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:5
    }
})


gsap.from("#c1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#c1",
        scroller:"body",
        // markers:"true",
        start:"top 55%",
        end:"top 45%",
        scrub:5


    }

})


gsap.from("#c2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#c2",
        scroller:"body",
        // markers:"true",
        start:"top 55%",
        end:"top 45%",
        scrub:5


    }

})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:"true",
        start:"top 75%",
        end:"top 70%",
        scrub:5


    }
})
