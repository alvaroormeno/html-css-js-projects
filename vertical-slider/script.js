const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
// selecting all the divs inside the element with class name of right-slide, length
const slidesLength = slideRight.querySelectorAll('div').length



let activeSlideIndex = 0;

// Here we are changing the left slide top css style to the number/length of all the
// right slides (4 in total) and multiply it by 100vh therefore the left slide which
// top class is initially on 0 changed to 300vh so it moves
slideLeft.style.top = `-${(slidesLength - 1) *100}vh`


// added click event listeners to both buttons to call the function
// changeSlide and pass different arguments
upButton.addEventListener("click", () => changeSlide('up'))
downButton.addEventListener("click", () => changeSlide('down'))

const changeSlide = (upORdown) => {
    // gives us the height of the slidercontainer which occupies 100% of the screensize
    const sliderHeight = sliderContainer.clientHeight
    console.log(sliderHeight)

    if(upORdown === 'up') {
        // add 1 to activeSlideIndex
        activeSlideIndex++

        // if activeSlideIndex is greater than the number of right side slides which is 4
        // bring back the activeSlideIndex back to 0/restart
        if(activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0
        }
    } else if (upORdown === 'down') {

        activeSlideIndex--

        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }

    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    
}