const LENGTH = 200;
const ANGLE = 0.4;
const RATIO = 0.67;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, LENGTH);

    // len_array.push(LENGTH);
    // drawTree();
    frameRate(30);
}

let offset = LENGTH - LENGTH / 10;

function branch(len, recurse = true) {
    if (len < 5) {
        return;
    }

    line(0, 0, 0, -len);
    translate(0, -len);

    if (len < (LENGTH / 5)) {
        stroke(len, LENGTH, LENGTH);
    }

    // If length < 1 / 10 of the original length, then create leaf
    if (len < (LENGTH / 10) && random(1) < 0.5) {
        stroke(len, LENGTH, LENGTH);

        // Create leaf
        noStroke();
        fill(
            random(LENGTH - LENGTH / 6, LENGTH),
            LENGTH,
            LENGTH,
        );
        ellipse(0, 0, 10, 10);
    } else if (len == (LENGTH / 10)) {
        stroke(0);
    }

    if (!recurse) {
        return;
    }

    push();
    rotate(ANGLE);
    branch(len * RATIO);
    pop();

    push();
    rotate(-ANGLE);
    branch(len * RATIO);
    pop();
}

function drawTree() {
    stroke(255);
    strokeWeight(4);
    line(width / 2, height, width / 2, height - LENGTH);
    translate(width / 2, height - LENGTH);

    branch(LENGTH - offset);
}

function draw() {
    background(0);
    drawTree();

    if (offset > 1) {
        offset -= 0.5;
    }
}