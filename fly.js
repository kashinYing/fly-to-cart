var width = window.innerWidth;
var height = window.innerHeight;

var item = document.getElementById('item');
var cart = document.getElementById('cart');

var startX = width / 2 + 'px';
var startY = height / 2 + 'px';
var startH = '50px';
var startW = '50px';

var endX = width - 150 + 'px';
var endY = '150px';
var endH = '0px';
var endW = '0px';

var duration = '0.75s';

item.style.position = 'absolute';
item.style.top = startY;
item.style.left = startX;

cart.style.position = 'absolute';
cart.style.top = endY;
cart.style.left = endX;

var addToCart = function() {
    var toAdd = document.createElement('img');
    toAdd.setAttribute('src', 'heart.png');
    toAdd.style.position = 'absolute';
    toAdd.style.top = startY;
    toAdd.style.left = startX;
    toAdd.style.width = startW;
    toAdd.style.height = startH;
    document.body.appendChild(toAdd);
    setTimeout(fly, 0);
}

var fly = function() {
    var toAdd = document.getElementsByTagName('img')[0];
    toAdd.style.top = endY;
    toAdd.style.left = endX;
    toAdd.style.width = endW;
    toAdd.style.height = endH;
    var xTransition = 'left ' + duration + ' linear';
    var yTransition = 'top  ' + duration + ' cubic-bezier(0, 1, 1, 1)'
    var sizeTransition = 'width ' + duration + ' linear, height ' + duration + ' linear'
    var transitionStr = xTransition + ', ' + yTransition + ', ' + sizeTransition;
    toAdd.style.setProperty('transition', transitionStr);
    toAdd.style.setProperty('-webkit-transition', transitionStr);
    toAdd.addEventListener('transitionend', function() {
        try {
            document.body.removeChild(toAdd);
        } catch (e) {
            console.log('toAdd already deleted');
        }
    });
}

