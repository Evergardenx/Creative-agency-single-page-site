/*
This code is taken from tutorial by Weibenfalk on youtube
https://www.youtube.com/watch?v=6AuH3xSo6f8
I have made some modification
 - I add transition property directly to .slider__image
 - I add another animation for headline
*/

document.addEventListener('DOMContentLoaded', () => {

    
    const forwardButton = document.querySelector('#buttonForward');
    const backButton = document.querySelector('#buttonBackward');
    const allSlides = [...document.querySelectorAll('.slider__image')];
    const allHeadlines = [...document.querySelectorAll('.slide__headline')];

    let activeSlideIndex = null;
    let clickable = true;
    let active = null; // active image
    let newActive = null;

    let activeHeadlineIndex = null;
    let enabled = null; // active headline
    let newActiveHeadline = null;
    
    
   

    function changeSlide(forward) {
        if(clickable) {
            clickable = false;
            active = document.querySelector('.active');
            activeSlideIndex = allSlides.indexOf(active);

            enabled = document.querySelector('.enabled');
            activeHeadlineIndex = allHeadlines.indexOf(enabled);

            if(forward){
                //console.log("active slide index: ", activeSlideIndex);
                //console.log("allSlides length: ", allSlides.length);
                //console.log("new slide: ", (activeSlideIndex + 1) % allSlides.length);
            
                newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
                active.classList.add('slideOutLeft'); // animation 
                newActive.classList.add('slideInRight', 'active'); // animation

                newActiveHeadline = allHeadlines[(activeHeadlineIndex + 1) % allHeadlines.length];
                enabled.classList.add('slideOutBottom');
                newActiveHeadline.classList.add('slideInTop', 'enabled');


            } else {
                newActive = allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
                active.classList.add('slideOutRight'); // animation
                newActive.classList.add('slideInLeft', 'active'); // animation

                newActiveHeadline = allHeadlines[(activeHeadlineIndex - 1 + allHeadlines.length) % allHeadlines.length];
                enabled.classList.add('slideOutTop');
                newActiveHeadline.classList.add('slideInBottom', 'enabled');
            }
        }
    }

    // this function wait until the animation is finished and then it do the code inside
    allSlides.forEach(slide => {
        slide.addEventListener('transitionend', () => {
            if(slide === active && !clickable) {
                clickable = true;
                active.className = "slider__image slide" + activeSlideIndex; 
                enabled.className = "slide__headline";
            }
        })
    });
    
    forwardButton.addEventListener('click', () => {
        changeSlide(true);
    });
    backButton.addEventListener('click', () => {
        changeSlide(false);
    });
    
  
 });