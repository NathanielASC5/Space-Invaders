function setup() {
    createCanvas(500, 500);
    background(100);

}


let x = 250;
let y = 450;
function draw() {
    background(100);
    ellipse(50,50,50,50);
    ellipse(150,50,50,50);
    ellipse(250,50,50,50);
    ellipse(350,50,50,50);
    ellipse(450,50,50,50);
    ellipse(50,150,50,50);
    ellipse(150,150,50,50);
    ellipse(250,150,50,50);
    ellipse(350,150,50,50);
    ellipse(450,150,50,50);



    fill("red");
    rect(x, y, 25, 50);
    //background(51);
    if (keyIsDown(LEFT_ARROW)) {
        x -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 3;
    }
}






