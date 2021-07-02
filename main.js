Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality :90,
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){ 
        document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'"/> ';
    } );

}
console.log("ml5 version : ",ml5.version)

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5Ic8mTqyz/model.json',img_classified);

function img_classified(){
console.log("img classified");
}

function check(){
   
var img = document.getElementById("image").src;
classifier.classify(img,Result);
}
function Result(error,result){
  if(error){
  console.log(error);
  }else{
    console.log(result);
    document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3);
    document.getElementById("faces").innerHTML = result[0].label;
}



}












