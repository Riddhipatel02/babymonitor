song="";
objects=[];
status="";

function preload(){
    song=loadSound("alert.mp3");
}
function setup(){
canvas=createCanvas(380, 380);
canvas.center();
video=createCapture(VIDEO);
video.size(380, 380);
video.hide();
objectdetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
function gotResults(error, results){
if(error){
console.log(error);
}else{
    console.log(results);
    objects=results;
}
}
function draw(){
    image(video,0,0,380,380);
    if(status!=""){
        objectDetector.detect(video,gotResults);
        {
            if(objects[i].label=="person"){
                document.getElementById("number_of_objects").innerHTML = "Baby Found";
                console.log("stop");
                song.stop();
            }else{
            document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
                console.log("stop");
                song.stop();
            }
            if(objects.length=0){
                document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
                console.log("stop");
                song.stop();
            }
        }
    }
}

