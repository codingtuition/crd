var status="";
var video="";

function preload(){
    video=createVideo("video.mp4");
video.hide();
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
}

function start(){
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status=detecting objects";
}

function modelloaded(){
    console.log("modelisloaded");
    status=true;
    video.loop();
video.speed(1);
video.volume(0);
}

function draw(){
    image(video,0,0,500,400);
}