

let slider = document.querySelector('.slider');
let list = document.querySelector('.list');
let items = document.querySelectorAll('.list .item');
let title = document.querySelector('.title');
let count = items.length;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = 1;
let leftTransform = 0;
let width_item = items[active].offsetWidth;

next.onclick = () => {
    active = active >= count - 1 ? count - 1 : active + 1;
    runCarousel();
}
prev.onclick = () => {
    active = active <= 0 ? active : active - 1;
    runCarousel();
}
function runCarousel() {
    prev.style.display = active == 0 ? 'none' : 'block';
    next.style.display = active == count - 1 ? 'none' : 'block';


    let old_active = document.querySelector('.item.active');
    if(old_active) old_active.classList.remove('active');
    items[active].classList.add('active');

     leftTransform = width_item * (active - 1) * -1;
    list.style.transform = `translateX(${leftTransform}px)`;
    let color_begin = items[active].dataset.colorBegin;
    let color_end = items[active].dataset.colorEnd;

    slider.style.background = `
        radial-gradient(${color_begin}, ${color_end})
    `;

    // title change
    title.innerText = items[active].dataset.title;
    title.animate([
        {
            opacity: 0,
            transform: 'translateY(30px)'
        },
        {
            opacity: 1,
            transform: 'translateY(0)'
        },

    ],
    {
        duration: 500,
        iterations: 1
    })
}
runCarousel();

// Set Text on a Circle
let circle = document.querySelector('.circle');
let textCircle = circle.innerText.split('');
circle.innerText = '';
textCircle.forEach((value, key) => {
    let newSpan =  document.createElement("span");
    newSpan.innerText = value;
    let rotateThisSpan = (360 / textCircle.length) * (key + 1);
    newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
    circle.appendChild(newSpan); 
});