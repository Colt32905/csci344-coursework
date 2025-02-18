let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    draw5CirclesWhile();
    draw5CirclesFor();
    drawNCircles(20);
    
    drawNCirclesFlexible(30, 25, 400, 0);
    drawNCirclesFlexible(4, 100, 100, 200);
    drawNCirclesFlexible(8, 50, 700, 100);

    drawNShapesFlexible(30, 30, 335, 0, "square");
    drawNShapesFlexible(4, 100, 120, 200, "circle");
    drawNShapesFlexible(8, 50, 725, 25, "square");

    drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
    drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
    drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");
    drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5CirclesWhile() {
    //noFill();
     fill('red');
    let x = 100;
    let y = 200;
    let d = 50;
    
    let i = 0;

    while(i < 5){
    circle(x, y+(50*i), d); // centerX, centerY, radius
        i++;
}
}
// function draw5RedSquares() {
//     fill("red");
//     square(320, 200, 50); // topLeftX, topLeftY, width
//     square(320, 250, 50);
//     square(320, 300, 50);
//     square(320, 350, 50);
//     square(320, 400, 50);
// }

function draw5CirclesFor() {
    fill('blue');
    let x = 300;
    let y = 200;
    let d = 50;
    for (let i = 0; i < 5; i++){
        circle(x, (y+50*i), d);
    }
    }

    function drawNCircles(n) {
        let x = 500;
        let y = 100;
        let d = 50;
        
        for (let i = 0; i < n; i++){
            circle(x, (y+50*i), d);
        }
        }

    function drawNCirclesFlexible(n, size, x, y) {
        fill('hotpink')  
        for (let i = 0; i < n; i++){
                circle(x, (y+i*size), size);
            }
        }

    function drawNShapesFlexible(n, size, x, y, shape) {
            fill('yellow')
            for (let i = 0; i < n; i++) {
                if (shape === "circle") {
                    circle(x, y + i * size, size);
                } else {
                    square(x - size / 2, y + i * size - size / 2, size);
                }
            }
        }

        function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
           fill('purple') 
            for (let i = 0; i < n; i++) {
                let xPos = direction === "row" ? x + i * size : x; 
                let yPos = direction === "column" ? y + i * size : y; 
        
                if (shape === "circle") {
                    circle(xPos, yPos, size);
                } else {
                    square(xPos - size / 2, yPos - size / 2, size);
                }
            }
        }