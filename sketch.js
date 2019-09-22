console.log("ml5 version:", ml5.version);

const image = document.getElementById("image"); // The image we want to classify
const result = document.getElementById("result"); // The result tag in the HTML
const probability = document.getElementById("probability"); // The probability tag in the HTML

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $("#image")
        .attr("src", e.target.result)
        .width(400);
    };

    reader.readAsDataURL(input.files[0]);

    ml5
      .imageClassifier("MobileNet")
      .then(classifier => classifier.classify(image))
      .then(results => {
        result.innerText = results[0].label;
        probability.innerText = results[0].confidence.toFixed(4);
      });
  }
}

// Initialize the Image Classifier method with MobileNet
