window.onload = function() {
    'use strict';

    let i;
    let speed;
    let interval;
    let animationArray;
    let length;
    const turbo = document.getElementById('turbo');
    const fontsize = document.getElementById('fontsize');
    const animation = document.getElementById('animation');
    const stop = document.getElementById('stop');
    const start = document.getElementById('start');
    const textArea = document.getElementById('text-area');

// load js code only when DOM is fully loaded

    function animationSingle(){ // actual animation function : using separate function
        if(i === length)
            i = 0;
        textArea.innerHTML = animationArray[i++];
    }
    function startAnimation(){ // starting function of animation
        start.disabled = true;
        stop.disabled = false;
        textArea.readOnly = true;
        var animationText = ANIMATIONS[animation.value];
        animationArray = animationText.split("=====\n");
        i = 0;
        length = animationArray.length;
        interval = setInterval(animationSingle, speed);
        animation.disabled = true;
    }
    function stopAnimation(){ // stop the animation
        start.disabled = false;
        stop.disabled = true;
        clearInterval(interval);
        interval = null;
        animation.disabled = false;
        textArea.readOnly = false;
    }
    function changeFontSize(){ // change the font size
        textArea.style.fontSize = fontsize.value;
    }
    function turboSpeed(){ // increase/decrease the speed of animation
        if(turbo.checked === true) {
            speed = 50;
        }
        else{
            speed = 250;
        }
        if(interval != null){ // clear and restart the animation
            clearInterval(interval); 
            interval = null;
            interval = setInterval(animationSingle, speed);
        }
    }
    function displayFirstAnimationTextOnScreen(){ // display whole text of animation when an animation is selected
        textArea.innerHTML = ANIMATIONS[animation.value];
    }

    animationArray = null;
    interval = null;
    speed = 250;
    animation.onchange = displayFirstAnimationTextOnScreen;
    start.onclick = startAnimation;
    stop.onclick = stopAnimation;
    fontsize.onchange = changeFontSize;
    turbo.onchange = turboSpeed;
};