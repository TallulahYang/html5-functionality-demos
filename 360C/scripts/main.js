function addEventHandler(elem,eventType,handler) {
 if (elem.addEventListener)
     elem.addEventListener (eventType,handler,false);
 else if (elem.attachEvent)
     elem.attachEvent ('on'+eventType,handler); 
}

addEventHandler(window, 'load', function() {
    var frDom = document.getElementById("fullview");
    var fullviewRotate = new ReelRotate(frDom);

    var frDom2 = document.getElementById("fullview-2");
    var fullviewRotate2 = new ReelRotate(frDom2);
})