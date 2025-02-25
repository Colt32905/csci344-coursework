let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

function moveCarousel(direction) {
    const items = document.querySelectorAll(".carousel-item"); //moves all images either forward or backward (keeps 2 in frame at all times)

    if (direction == "forward") {
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) {
            return false;  //checks to see if it has reached the end of the image carousel, if it is false, then it essentially means that the end has not been reached yet
        }
        currentPosition++; //increments the current position variable by 1 to move the left item off of the screen to welcome a new item on the right
    } else {
        if (currentPosition == 0) {
            return false; //this means it has reached the end of the carousel and can only go backwards from here.
        }
        currentPosition--; // says the back button must decrease the current position by 1 because of the else statement (the direction != forward)
    }

    const offset = (slideWidth + gap) * currentPosition; //creates a variable called offset that is found using the setup of the carousel as well as multiplying it by the number of times currentPostion has incremented

    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`; //I believe this is what actually moves the carousel and changes the pictures by linking the current position variable to each picture
    }
}
