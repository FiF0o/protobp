import $ from '../vendors/jquery/dist/jquery.js';

// * Debug * //
console.log($);

import kikou from './test';
console.log(kikou);


//TODO Modularise code snippets for nav
// ****** RWD MOBILE NAV  ****** //

//var mobileNav =
$('.nav-mobile').click(function() {
    $('ul.nav-list').toggleClass('nav-open').slideToggle('slow');
});

// ****** HIDES RWD NAV  ****** //

//$(window).on.resize('resize', function() {
//    var isOpen = $('ul.nav-list.nav-open')
//       if(isOpen == !isOpen && window < 768px){
//           $('ul.nav-list').toggleClass('.nav-open');
//       }
//});

// ****** SHOW MOBILE NAV ELEMENTS WHEN NOT MOBILE VIEW AND IF MOBILE NAV HIDDEN ****** //

$(window).on('resize', function() {
    if ($(this).width() >= 768) {
        $('ul.nav-list').css({"display":"inline-block"});

    }
});


// ****** HIDES MOBILE NAV WHEN SCROLLING ****** //
//TODO add animation slide effect when scrolling - manually add a class with animation...
var lastScrollTop = 0;
var dh = $('div.header');

$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop && st){
        //console.log('scroll down');
        dh.slideUp(500)
    } else {
        dh.slideDown(500)
    }
    lastScrollTop = st
});

// ****** HIDES MOBILE NAV WHEN SCROLLING ****** //

//$(window).resize(function() {
//    var win = $(this);
//    var isClosed = $('ul.nav-list');
//    var isOpen = $('ul.nav-list.nav-open');
//    if (win.width() >= 768 && isClosed !== isOpen) {
//        console.log('resize');
//
//        //fugly hack that needs to be fixed
//        $('ul.nav-list').css({"display":"inline-block" });
//    }
//// else if (isOpen === isOpen) {
////        $('ul.nav-list').css({"display":"none" });
////    }
//});

//$(window).resize(function() {
//    var win = $(this);
//    var isOpen = $('ul.nav-list.nav-open');
//    if (win.width() <= 768 && isOpen != isOpen) {
//        alert('resize');
//        $('ul.nav-list').toggleClass('.nav-open');
//
//    }
//});
//    if (window > 768px) {
//        $('ul.nav-list').css({"display":"inline-block", "margin-left":"20px" });
//    }
//});


// ****** STICKY NAV NAV  ****** //

var mn = $(".header")
    , ml = $('div.logo')
    , mns = "main-nav-scrolled"
    , mnls = "main-nav-logo-scrolled"
    , hdr = $('header').height();

$(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
        //mn.removeClass('nav-down');
        mn.addClass(mns);
        //mn.addClass('nav-up');
    } else {
        //mn.removeClass('nav-up');
        mn.removeClass(mns);
        //mn.addClass('nav-down');
    }
});


$(window).scroll(function() {
    if( $(this).scrollTop() > hdr && !mnls ) {
        ml.addClass(mnls)
    } else {
        ml.removeClass(mnls)
    }
});

//TODO Add script that hides nav when scrolled down and shows it back when scrolled up

//var div = $( "<div>" );
//
//div.promise().done(function( arg1 ) {
//    // Will fire right away and alert "true"
//    console.log(arg1);
//    alert( this === div && arg1 === div );
//});

