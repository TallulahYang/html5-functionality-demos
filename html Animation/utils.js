var lastTime = 0;
var vendors = ['webkit', 'moz'];
for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // name has changed in Webkit
        window[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}
var utils = {
    captureMouse: function(element) {
        var mouse = {
            x: 0,
            y: 0
        };
        var l1 = document.body.scrollLeft, //body
            l2 = document.documentElement.scrollLeft, //html
            t1 = document.body.scrollTop,
            t2 = document.documentElement.scrollTop,
            ofX = element.scrollLeft,
            ofY = element.scrollTop;
        element.addEventListener('mousemove', function(event) {
            var x, y;
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else {
                x = event.clientX + l1 + l2;
                y = event.clientY + t1 + t2;
            }
            // console.log(x,y)
            x -= ofX;
            y -= ofY;
            // console.log(ofX,ofY)

            mouse.x = x;
            mouse.y = y;
            mouse.event = event;
        });
        return mouse;
    }
};