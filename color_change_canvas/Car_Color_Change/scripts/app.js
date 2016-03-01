$(function() {
    console.log("Dom Ready!");
    var c = document.getElementById('car'),
        options = {

        },
        car = new Car(c, options);

    var  $colorSwitch = $('#color-switch');

    $colorSwitch.on('click', function(event) {
        var $target = $(event.target),
            nextColor = $target.data('color');

        console.log(car.status);
        if (nextColor && nextColor != car.carColor && car.status != "changing") {
            car.switchColor(nextColor);
        }
    });
});
