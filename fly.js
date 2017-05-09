(function() {
    window.__flyToCart = function(options) {
        /**
         * {
         *   startLeft
         *   startTop
         *   startWidth
         *   startHeight
         *   endLeft
         *   endTop
         *   endWidth
         *   endHeight
         *   leftVelocity
         *   topVelocity
         *   flyDuration
         *   sourceImg
         * }
         */

        if (!options
            || !options.startLeft
            || !options.startTop
            || !options.startWidth 
            || !options.startHeight
            || !options.endLeft
            || !options.endTop
            || !options.flyDuration
            || !options.sourceImg) {
            alert('Please set the options');
        } else {
            
            //generate start css
            var startCssStr = 'position: absolute; ';
            startCssStr += 'top: ' + options.startTop + '; ';
            startCssStr += 'left: ' + options.startLeft + '; '; 
            startCssStr += 'width: ' + options.startWidth + '; '; 
            startCssStr += 'height: ' + options.startHeight + '; ';

            //generate end css
            var leftTransition = 'left ' + options.flyDuration + (options.leftVelocity ? ' ' + options.leftVelocity : '');
            var topTransition = 'top ' + options.flyDuration + (options.topVelocity ? ' ' + options.topVelocity : '');
            var sizeTransition = 'width ' + options.flyDuration + ' linear, height ' + options.flyDuration + ' linear';
            var transitionStr = leftTransition + ', ' + topTransition + ', ' + sizeTransition;
            var endCssStr = 'position: absolute; ';
            endCssStr += 'top: ' + options.endTop + '; ';
            endCssStr += 'left: ' + options.endLeft + '; '; 
            endCssStr += 'width: ' + options.endWidth + '; '; 
            endCssStr += 'height: ' + options.endHeight + '; ';
            endCssStr += 'transition: ' + transitionStr + '; ';
            endCssStr += '-webkit-transition: ' + transitionStr + '; ';
            endCssStr += '-moz-transition: ' + transitionStr + '; ';

         
            // initialize the item to fly
            var __flyItem = document.createElement('img');
            __flyItem.setAttribute('src', options.sourceImg);
            __flyItem.style.cssText = startCssStr;
            
            //destroy
            __flyItem.addEventListener('transitionend', function() {
                try {
                    document.body.removeChild(__flyItem);
                } catch (e) {
                    console.log('flyItem already deleted');
                }
            });

            document.body.appendChild(__flyItem);

            // start to fly
            setTimeout(function() {
                __flyItem.style.cssText = endCssStr;
            }, 10);
        }
    }
})();

