function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

locomotiveAnimation()
//Nav Animation
function navAnimation(){
    var nav=document.querySelector("nav");

nav.addEventListener("mouseenter",function(){
    let t1=gsap.timeline()
    t1.to("#nav-bottom1",{
        height:"23vh"
    })
    t1.to(".nav2 h5",{
        display:"block"
    })
    t1.to(".nav2 h5 span",{
        y:0,
        // duration:0.3,
        stagger:{
            amount:0.4  
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let t1=gsap.timeline()
    t1.to(".nav2 h5 span",{
        y:44,
        // duration:0.3,
        stagger:{
            amount:0.3
        }
    })
    t1.to("#nav-bottom1",{
        height:0,
        duration:0.2
    })
    t1.to(".nav2 h5",{
        display:"none",
        duaration:0.2
    })
})

}
//Page 2 Animation
function moveAnime(){
    var relm=document.querySelectorAll(".right-ele");
var remlmImg=document.querySelectorAll(".right-ele img");
relm.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        gsap.to(ele.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    ele.addEventListener("mouseleave",function(){
        gsap.to(ele.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    ele.addEventListener("mousemove",function(dets){
       gsap.to(ele.childNodes[3],{
        x:dets.x - ele.getBoundingClientRect().x - 70,
        y:dets.y - ele.getBoundingClientRect().y - 170  
       })
    })

})

}
navAnimation();
moveAnime();

function page3Animation(){
    var pageCen=document.querySelector(".page3-centre");
    var video=document.querySelector("#page3 video");
    pageCen.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
        })
    })

    video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})

}

page3Animation();


function page5Animation(){
    var sec=document.querySelectorAll(".sec-right");
    sec.forEach(function(ele){
       ele.addEventListener("mouseenter",function(){
           ele.childNodes[3].style.opacity= 1
           ele.childNodes[3].play()
       })
       ele.addEventListener("mouseleave",function(){
           ele.childNodes[3].style.opacity= 1
           ele.childNodes[3].load()
       })
    })

}

page5Animation()


// gsap.to("#bottom-pa2 h4",{
//     x:100,
//     duaration:1,
//     stagger:{
//         amount:-0.1
//     },
//     scrollTrigger:{
//         trigger:"#bottom-pa2",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top -80%",
//         scrub:true


//     }
// })


function page7Animation(){
    gsap.from("#bottom-pa2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#bottom-pa2",
            scroller:"#main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from("#bottom-pa3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#bottom-pa3",
            scroller:"#main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from("#bottom-pa4 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#bottom-pa4",
            scroller:"#main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })     

}

page7Animation();


var t1=gsap.timeline();
t1.from("#page1",{
    opacity:0,
    duration:0.2,
    delay:0.1
})

t1.from("#page1",{
    transform:"scaleX(0.7) scale(0.2)",
    borderRadius:"100px",
    duration:2,
    ease:"expo.out"
})
t1.from("nav",{
    opacity:0,
    delay:-0.2
})

t1.from("#page1 h1, #page1 p , #page1 div",{
    opacity:0,
    duration:0.4,
    stagger:0.3
})



