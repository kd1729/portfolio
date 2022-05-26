// animation for hero section
let tl = gsap.timeline({ defaults: { duration: 2 } });

// animation for about me
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro"
    }
});

// animation for skills section
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills"
    }
});

// animation for projects section
let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
    }
});

// animation for contact me section
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact"
    }
});

// animation for strengths section
let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".strengths"
    }
});

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".experience",
    }
});

tl.from(".fade", { opacity: 0, delay: .7, stagger: .3 });
tl2.from(".stagger", { opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5 });
tl3.from(".skill-card", { opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5 });
tl4.from(".grid-item", { opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5 });
tl5.from(".scroll", { opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5 });
tl6.from(".strength-card", { opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5 });
tl7.from(".experience-text", { opacity: 0, stagger: .3, duration: 2, y: 40, delay: .5 });


//Get the button:
var mybutton = document.getElementById("myBtn");

//When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        mybutton.classList.add('shown')
    else
        mybutton.classList.remove('shown')
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function closeToggle(){
   var myCheckbox = document.getElementById("btn-toggle");
    if(myCheckbox.checked){
        myCheckbox.checked = false;
    }
}

document.querySelectorAll('nav ul li').forEach(function(el){
    el.addEventListener('click', function(){
        var myCheckbox = document.getElementById("btn-toggle");
        if(myCheckbox.checked)
            myCheckbox.checked = false;
    })
})