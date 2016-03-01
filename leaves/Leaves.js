
const NUMBER_OF_LEAVES = 30;
function init()
{
  var container = document.getElementById('leafContainer');
  for (var i = 0; i < NUMBER_OF_LEAVES; i++) 
  {
	   CreateALeaf(container);
  }
}

function randomInteger(low, high)
{
  return low + Math.floor(Math.random() * (high - low));
}
function randomFloat(low, high)
{
  return low + Math.random() * (high - low);
}

function pixelValue(value)
{
  return value + 'px';
}

function CreateALeaf(container)
{
  var image = document.createElement('img');
  
  image.src = ['images/leaf', randomInteger(1, 5), '.png'].join('');
  
  var startPositionOnYAxis = randomInteger(-700, -200);
  var endPositionOnYAxis = randomInteger(600, 700);
  
  var duration = randomFloat(6, 12);
  
  image.style.top = pixelValue(startPositionOnYAxis);
  image.style.left = pixelValue(randomInteger(0, 500));  

  container.appendChild(image);
  new Dropper(image, startPositionOnYAxis, endPositionOnYAxis, duration).start();
}

window.addEventListener('load', init, false);
