//function for generating random colors in javascript
  function getRandomColor(){
    var letters = '012345679ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
      color +=letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var start = new Date().getTime();
  function makeShapeAppear(){
      var top = Math.random() * 400;
      var left = Math.random() * 400;
      var width = (Math.random() * 200) + 100;

      if (Math.random() > 0.5) {
        document.getElementById('shape').style.borderRadius = "50px";

      } else {
            document.getElementById('shape').style.borderRadius = "0";
      }
    document.getElementById('shape').style.backgroundColor = getRandomColor();
    document.getElementById('shape').style.display = "block";
    document.getElementById('shape').style.top = top + "px";
    document.getElementById('shape').style.top = left + "px";
    document.getElementById('shape').style.width = width + "px";
    document.getElementById('shape').style.height = width + "px";
        start = new Date().getTime();
  }
//function to make shape appear after a specific time using the setTimeout function in javascript
function appearAfterDelay(){
      setTimeout(makeShapeAppear , Math.random() * 2000);
}

  appearAfterDelay();
// what happens when the user clicks the shape
  document.getElementById('shape').onclick = function(){
    document.getElementById('shape').style.display = "none";
    var end = new Date().getTime();
//time is in milliseconds so we have to divide it by 1000 to get the time by seconds
    var timeTaken = (end - start) / 1000;
//display time to be taken in html
    document.getElementById('timeTaken').innerHTML = timeTaken + "s";
    appearAfterDelay();
  }
