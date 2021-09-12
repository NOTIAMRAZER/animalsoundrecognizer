function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0dlnUuRId/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotresults);
}

function gotresults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('back');

        if(results[0].label == "Cat"){
            img.src = 'cat.gif';
            img1.src = 'dog.png';
            img2.src = 'lion.png';
            img3.src = 'back.png';
        }
        else if(results[0].label == "Dog"){
            img.src = 'cat.png';
            img1.src = 'dog.gif';
            img2.src = 'lion.png';
            img3.src = 'back.png';
        }
        else if(results[0].label == "Lion"){
            img.src = 'cat.png';
            img1.src = 'dog.png';
            img2.src = 'lion.gif';
            img3.src = 'back.png';
        }
        else{
            img.src = 'cat.png';
            img1.src = 'dog.png';
            img2.src = 'lion.png';
            img3.src = 'back.gif';
        }
    }
}