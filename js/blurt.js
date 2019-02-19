/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // lazy load the photos section
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });

});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function() {
    var $lightbox = $( '#lightbox' ),
        $caption  = $lightbox.find( '.caption' ),
        $bigImg   = $lightbox.find( 'img' ),
        $dialog   = $lightbox.find( '.modal-dialog' ),
        $close    = $lightbox.find( '.close' );

    $('[data-target="#lightbox"]').on('click', function(event) {        
        event.preventDefault();
        var $img = $(this).find( 'img' ), 
            src  = $img.attr( 'src' ),
            alt  = $img.attr( 'alt' ),
            css  = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $close.addClass( 'hidden' );
        $dialog.css({
            'visibility': 'hidden'
        });
        $bigImg.attr( 'src', src );
        $bigImg.attr( 'alt', alt );
        $caption.text( alt );
        $bigImg.css(css);
    });
    
    $lightbox.on( 'shown.bs.modal', function ( e ) {
        var $img = $lightbox.find( 'img' );

        // +30 is for padding            
        $dialog.css({
            'width'     : $img.width() + 30,            
            'visibility': ''        
        });
        $close.removeClass('hidden');
    });
});