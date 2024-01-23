Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7QUcZNBZS/model.json",modelLoaded);
function modelLoaded()
{
    console.log("success")
}





Webcam.attach('#camera')

function take_snapshot()
{
    Webcam.snap(function(img_src){
        document.getElementById("result").innerHTML="<img id='pic' src='"+img_src+"'>"
    })
}

function check()
{
  image = document.getElementById('pic');
  classifier.classify(image, gotresult);  
}

function gotresult(error, result)
{
  if(error) {
    console.error(error);
  } else{
    console.log(result);
    document.getElementById("person").innerHTML = result[0].label;
    document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3);
  }
}


