
var image1 = document.getElementsByClassName('image1');
new simpleParallax(image1, {
    orientation: 'down',
    delay: .8,
    scale:1.1,
	transition: 'cubic-bezier(0,0,0,1)'

});
var image2 = document.getElementsByClassName('image2');
new simpleParallax(image2, {
    orientation: 'up',
    delay: .8,
    scale:1.3,
	transition: 'cubic-bezier(0,0,0,1)'
});

var image3 = document.getElementsByClassName('image3');
new simpleParallax(image3, {
    orientation: 'down',
    delay: .8,
    scale:1.3,
	transition: 'cubic-bezier(0,0,0,1)'
});

