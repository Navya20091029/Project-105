Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality: 100
})

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'">';
    });
}

console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YIpRi60QH/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}


function check(){
 img = document.getElementById('captured_img');
  classifier.classify(img, gotResults);
}

function gotResults(error,results){
if (error){
console.log("Error");}
else{
console.log(results);
document.getElementById("members_name").innerHTML = results[0].label;
document.getElementById("members_confidence").innerHTML = results[0].confidence.toFixed(3);
}
}
