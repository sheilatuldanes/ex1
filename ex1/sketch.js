console.log("reading from js");

function setup() {
    var myCanvas = createCanvas(800, 250);
    //link to id mySketch from header tag
    myCanvas.parent('mySketch');
}

function draw() {
    //draw background
    background("#D3F5FF");
    for (var i = 0; i < 800; i += 25) {
        for (var j = 0; j < 250; j += 25) {
            noStroke();
            fill(255);
            ellipse(i, j, 5, 5);
        }
    }
    drawPig();
    eyesMove();
    drawBerry();
} //draw

function drawPig() {
    noStroke();
    ellipseMode(CENTER);

    //ears
    noStroke();
    fill("#FFB4B4");
    triangle(width / 2 - 120, 160, width / 2 - 110, 90, width / 2 - 50, 100);
    triangle(width / 2 + 120, 160, width / 2 + 110, 90, width / 2 + 50, 100);

    //draw head 
    noStroke();
    fill("#FFCECE");
    ellipse(width / 2, 190, 250, 200);

    //nose
    fill("#FF9B9B");
    ellipse(width / 2, 220, 60, 40);
    fill(0);
    ellipse(width / 2 + 10, 220, 10, 20);
    ellipse(width / 2 - 10, 220, 10, 20);

    //eyes
    fill(255);
    ellipse(width / 2 + 60, 210, 40, 40);
    ellipse(width / 2 - 60, 210, 40, 40);
} //drawPig

function eyesMove() {
    //move eyes based on which quadrant the mouse is in
    if (mouseX < (width / 2 - 125) && mouseY < 200) {
        fill(0);
        ellipse(width / 2 + 50, 205, 20, 20);
        ellipse(width / 2 - 70, 205, 20, 20);
    }
    if (mouseX < (width / 2 - 125) && mouseY < 400 && mouseY > 200) {
        fill(0);
        ellipse(width / 2 + 50, 210, 20, 20);
        ellipse(width / 2 - 70, 210, 20, 20);
    }
    if (mouseX < (width / 2 - 125) && mouseY > 400) {
        fill(0);
        ellipse(width / 2 + 50, 215, 20, 20);
        ellipse(width / 2 - 70, 215, 20, 20);
    }
    if (mouseX > (width / 2 - 125) && mouseX < (width / 2 + 125) && mouseY < height / 2) {
        fill(0);
        ellipse(width / 2 + 60, 200, 20, 20);
        ellipse(width / 2 - 60, 200, 20, 20);
    }
    if (mouseX > (width / 2 - 125) && mouseX < (width / 2 + 125) && mouseY > height / 2) {
        fill(0);
        ellipse(width / 2 + 60, 220, 20, 20);
        ellipse(width / 2 - 60, 220, 20, 20);
    }
    if (mouseX > (width / 2 + 125) && mouseY < 200) {
        fill(0);
        ellipse(width / 2 + 70, 205, 20, 20);
        ellipse(width / 2 - 50, 205, 20, 20);
    }
    if (mouseX > (width / 2 + 125) && mouseY > 200 && mouseY < 400) {
        fill(0);
        ellipse(width / 2 + 70, 210, 20, 20);
        ellipse(width / 2 - 50, 210, 20, 20);
    }
    if (mouseX > (width / 2 + 125) && mouseY > 400) {
        fill(0);
        ellipse(width / 2 + 70, 215, 20, 20);
        ellipse(width / 2 - 50, 215, 20, 20);
    }
} //eyesMove

function drawBerry() {
    //strawberry shape
    noStroke();
    fill("#E3073A");
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX, mouseY + 10, 35, 35);

    //seeds
    stroke(255);
    strokeWeight(5);
    point(mouseX, mouseY);
    point(mouseX + 15, mouseY);
    point(mouseX - 15, mouseY);
    point(mouseX - 7, mouseY + 15);
    point(mouseX + 7, mouseY - 15);
    point(mouseX + 7, mouseY + 15);
    point(mouseX - 7, mouseY - 15);

    //leaves
    stroke("#00C60B");
    line(mouseX, mouseY - 25, mouseX + 20, mouseY - 35);
    line(mouseX, mouseY - 25, mouseX - 20, mouseY - 35);
    line(mouseX, mouseY - 25, mouseX + 7, mouseY - 40);
    line(mouseX, mouseY - 25, mouseX - 7, mouseY - 40);
    noStroke();

}