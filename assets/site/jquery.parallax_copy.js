(function ($) {
    // Check if the section has the parallax class.
    if ($('.parallax-section').length) {
        var parallaxItem = $('.parallax-section'),
            // IE 11 => return version number
            isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
        $.browser.device = (/Android|iPad|iPhone|iPod|BlackBerry|Windows Phone|opera mini|iemobile/i.test(navigator.userAgent || navigator.vendor || window.opera));

        // Check if the browser is IE10 or below.
        if ($.browser.msie || isIE11 > 0 || $.browser.device) {
            // Remove the parallax scrolling styles and center background image vertically.
            parallaxItem.css({
                backgroundAttachment: 'scroll',
                backgroundPosition: '50% 50%'
            });
        }
        else {
            parallaxItem.addClass('parallax-started');
        }
    }

    $(document).ready(function () {
        // Cache the Window object
        $window = $(window);

        $('.parallax-started').each(function () {
            // assigning the object
            var $bgobj = $(this),
                parallaxSpeed = $bgobj.data('parallax-background-speed');

            $(window).scroll(function () {
                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!
                var yPos = -(($(window).scrollTop() - $bgobj.offset().top) / parallaxSpeed);

                // Put together our final background position
                var coords = '50% ' + yPos + 'px';

                // Move the background
                $bgobj.css({backgroundPosition: coords});
            });
            // window scroll Ends
        });
    });
})(jQuery);