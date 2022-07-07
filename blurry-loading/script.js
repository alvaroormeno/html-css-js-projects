//import/grab to js both elements in HTML based on their class name
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load =0;

// use setInterval js function to call blurring function every 30 milliseconds
let int = setInterval(blurring, 30)

function blurring() {
    // increases load + 1 every time blurring function is calles
    load ++
    // if load value is more than 99, therefore 100 lets clear the Interval int
    if(load > 99) {
        clearInterval(int)
    }

    //let loadtext which is the html element with a class of "loading-text" inner Text value
    // to load% using template literals
    loadText.innerText = `${load}%`
    // loadtext css style opacity which is at 0, equals to the scale function to make it go up
    loadText.style.opacity =  scale(load, 0, 100, 1, 0)

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
} 

// function to map a range of numbers to another range of numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}