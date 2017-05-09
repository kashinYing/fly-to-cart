var options = {
    startLeft: '500px',
    startTop: '300px',
    startWidth: '10px',
    startHeight: '10px',
    endLeft: '900px',
    endTop: '150px',
    endWidth: '10px',
    endHeight: '10px',
    leftVelocity: 'linear',
    //topVelocity: 'cubic-bezier(0.5, -0.5, 1, 1)',
    topVelocity: 'cubic-bezier(0, 1, 1, 1)',
    flyDuration: '0.9s',
    sourceImg: 'red_star.svg'
}



var btn = document.getElementById('item');
var cart = document.getElementById('cart');

btn.style.position = 'absolute';
btn.style.top = options.startTop;
btn.style.left = options.startLeft;

cart.style.position = 'absolute';
cart.style.top = options.endTop;
cart.style.left = options.endLeft;

var addToCart = function() {
    __flyToCart(options);
}