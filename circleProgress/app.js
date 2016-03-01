var PI = Math.PI,
  PI2 = PI * 2,
  perAngle = 360 / PI2,
  perStep = 360 / 189;


var circularScroller=document.getElementById("circular-scroller");
var circularScrollerCtx=circularScroller.getContext("2d");
circularScrollerCtx.beginPath();
circularScrollerCtx.strokeStyle = '#EAEAEA';
circularScrollerCtx.lineWidth = 10;
circularScrollerCtx.arc(100, 100, 50, -Math.PI/2, Math.PI*3/2);
circularScrollerCtx.stroke();
circularScrollerCtx.closePath();


function writeMessage(canvas, message, radian) {
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.strokeStyle = '#EAEAEA';
  context.lineWidth = 10;
  context.arc(100, 100, 50, -Math.PI/2, Math.PI*3/2);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.strokeStyle = '#8FCF59';
  context.lineWidth = 10;
  context.arc(100,100, 50, -Math.PI/2,radian-Math.PI/2,false);
  context.stroke();
  context.closePath();
  context.font = '12pt Calibri';
  context.fillStyle = 'black';
  context.fillText(message, 10, 25);
}
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

circularScroller.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(circularScroller, evt);
  var radian = -(Math.atan2(mousePos.x-100,mousePos.y-100) - Math.PI);
  // var age = 18 + 49/(Math.PI*2) * angle;
  var angle = radian * perAngle;
  var dollars = calDollars(angle);
  var message = 'dollars: '+ dollars + 'angle: ' + formatFloat(angle, 4);
  writeMessage(circularScroller, message, radian);
}, false);

function calDollars(angle) {
    var intervalOne = perStep * 100,
        intervalTwo = perStep * 155,
        dollars = 0;

        if (angle <= intervalOne) {
          dollars = calInveralOne(25 + 50/190*angle);
        } else if (angle <= intervalTwo) {
          dollars = Math.ceil(75 + (130-75)/(intervalTwo - intervalOne)*(angle-intervalOne));
        } else {
          dollars = calInveralThree(130 + (300-130) / (360 - intervalTwo) * (angle - intervalTwo));
        }
        return dollars;
}
function formatFloat(src, pos) {
    return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
}
function decimal(num,digit) {
    var precision = Math.pow(10,digit);
    return Math.round(num*precision)/precision;
}

function calInveralOne(number) {
    return Math.ceil(number * 2)/2;
}
function calInveralThree(number) {
  return Math.ceil(number*2/10) * 10 /2;
}