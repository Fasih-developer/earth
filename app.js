window.addEventListener('load' , function(){
  gsap.From('.main',{
    opacity :0,
  })
})
function locomotive (){
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
}
function page2(){
    var clutter = "";
    document.querySelector('.page-2 p').textContent.split(' ').forEach(function(dets){
      clutter += `<span> ${dets} </span>`
      document.querySelector('.page-2 p').innerHTML = clutter
    })
    
    gsap.to('.page-2 p>span', {
      scrollTrigger:{
        trigger: ".page-2 p",
        scroller:'.main',
        start:'-140% 45%',
        // markers :true,
        end:'top 38%',
        scrub:.5,
      },
      stagger:.2,
      color:"#fff",
    })  
}

gsap.from('nav a', {
    opacity: 0,
    ease: "power1.inOut",
    delay:2,
    duration: 2,
})
gsap.to('nav button', {
    opacity: 1,
    duration: .5,
    delay:2,
    marginTop: '0vw',
    ease: "power1.inOut",
});






gsap.from('.hero-main h2', {
    opacity: 0,
    ease: "power1.inOut",
    delay:.7,
    duration: 2,
    dealy:1,
})
gsap.from('.hero-main h1', {
    opacity: 0,
    ease: "power1.inOut",
    delay:1.2,
    duration: 2.5,
})
gsap.from('.hero-earth iframe', {
    scale:1.3,
    opacity: 0,
    ease: "power1.inOut",
    delay:1.4,
    duration: 2.5,
})



locomotive();
page2();