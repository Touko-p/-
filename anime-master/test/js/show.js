const showMe=anime({
    targets:'.me img',
    rotate:180,
    keyframes:[
        {translateY:-385,duration: 0},
        {translateY: -280,duration: 800}
    ],
    autoplay:false,
    duration:0
})
const hideMe=anime({
    targets:'.me img',
    rotate:180,
    keyframes:[
        {translateY:-280,duration: 0},
        {translateY: -385,duration: 800}
    ],
    autoplay:false,
    duration:0
})
showMe.pause();
hideMe.pause();
var nav=document.querySelector('nav');
var img=document.querySelector('img');
nav.addEventListener('mouseover',function () {
    img.style.display='block';
    showMe.play();
})
nav.addEventListener('mouseout',function () {
    // img.style.display='block';
    hideMe.play();
})