function get_random_colour() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function changeBackground(color) {
   document.body.style.background = color;
}

function randomBackgroundColour()
{
	changeBackground(get_random_colour());
}