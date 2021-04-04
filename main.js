var nose_x = ""
var nose_y = ""
function preload() {
    img = loadImage("OIP.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 200);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x - 20;
        nose_y = results[0].pose.nose.y + 25;
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(img, nose_x, nose_y, 50, 50)
}

function take_snapshot() {
    save('myFilterImage.png');
}