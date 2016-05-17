requirejs.config({
    shim     : {
        "bootstrap" : {deps: ['jquery']}
        //"highcharts": {deps: ['jquery'], exports: "Highcharts"}
    }
    // relative to /dist dir (root web server)
    , baseUrl: "./", paths: {
        jquery    : 'vendors/jquery/dist/jquery',
        //highcharts: 'vendors/highcharts/highcharts',
        bootstrap : 'vendors/bootstrap/dist/js/bootstrap'
        // htmlshiv  : 'https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min'
        // don't need to specify the extension, require.js handles it for you
    }
});

// define([], function() {}) call execute modules
// can create config file for requirejs which will be loaded with define call
// main.js will load the config file with a require call
require([
    'jquery',
    'bootstrap'
], function(
    $,
    Boot
) {
    $(function(){
        console.log($)
        console.log(Boot)
    });

    //var a = $;
    //var b = Boot;
    //console.log('a');
    //console.log(a);
    //console.log('b');
    //console.log(b);
});

//import $ from '../vendors/jquery/dist/jquery.js';
////import Boot from '../vendors/bootstrap/dist/js/bootstrap.js';
//
////// * Debug * //
//console.log($);
////console.log(Boot);

//import kikou from './test';
//console.log('kikou');
//console.log(kikou);
//
//
////TODO Modularise code snippets for nav
//// ****** RWD MOBILE NAV  ****** //
//
////var mobileNav =
////$('.nav-mobile').click(function() {
////    $('ul.nav-list').toggleClass('nav-open').slideToggle('slow');
////});
//
//
//$('#change_management').click(function() {
//    console.log('div clicked!')
//})
//
//(function(){
//    console.log('pure js iife')
//})()
//
////(function($) {
////    console.log('jQuery IIFE');
////})(jQuery);
////
////$(document).ready(function() {
////    console.log('document ready')
////})
//
//// ****** HIDES RWD NAV  ****** //
//
////$(window).on.resize('resize', function() {
////    var isOpen = $('ul.nav-list.nav-open')
////       if(isOpen == !isOpen && window < 768px){
////           $('ul.nav-list').toggleClass('.nav-open');
////       }
////});
//
//// ****** SHOW MOBILE NAV ELEMENTS WHEN NOT MOBILE VIEW AND IF MOBILE NAV HIDDEN ****** //
//
//    //$(window).on('resize', function() {
//    //    if ($(this).width() >= 768) {
//    //        $('ul.nav-list').css({"display":"inline-block"});
//    //
//    //    }
//    //});
//    //
//    //
//    //// ****** HIDES MOBILE NAV WHEN SCROLLING ****** //
//    ////TODO add animation slide effect when scrolling - manually add a class with animation...
//    //var lastScrollTop = 0;
//    //var dh = $('div.header');
//    //
//    //$(window).scroll(function(event){
//    //    var st = $(this).scrollTop();
//    //    if (st > lastScrollTop && st){
//    //        //console.log('scroll down');
//    //        dh.slideUp(500)
//    //    } else {
//    //        dh.slideDown(500)
//    //    }
//    //    lastScrollTop = st
//    //});
//    //
//    //// ****** HIDES MOBILE NAV WHEN SCROLLING ****** //
//    //
//    ////$(window).resize(function() {
//    ////    var win = $(this);
//    ////    var isClosed = $('ul.nav-list');
//    ////    var isOpen = $('ul.nav-list.nav-open');
//    ////    if (win.width() >= 768 && isClosed !== isOpen) {
//    ////        console.log('resize');
//    ////
//    ////        //fugly hack that needs to be fixed
//    ////        $('ul.nav-list').css({"display":"inline-block" });
//    ////    }
//    ////// else if (isOpen === isOpen) {
//    //////        $('ul.nav-list').css({"display":"none" });
//    //////    }
//    ////});
//    //
//    ////$(window).resize(function() {
//    ////    var win = $(this);
//    ////    var isOpen = $('ul.nav-list.nav-open');
//    ////    if (win.width() <= 768 && isOpen != isOpen) {
//    ////        alert('resize');
//    ////        $('ul.nav-list').toggleClass('.nav-open');
//    ////
//    ////    }
//    ////});
//    ////    if (window > 768px) {
//    ////        $('ul.nav-list').css({"display":"inline-block", "margin-left":"20px" });
//    ////    }
//    ////});
//    //
//    //
//    //// ****** STICKY NAV NAV  ****** //
//    //
//    //var mn = $(".header")
//    //    , ml = $('div.logo')
//    //    , mns = "main-nav-scrolled"
//    //    , mnls = "main-nav-logo-scrolled"
//    //    , hdr = $('header').height();
//    //
//    //$(window).scroll(function() {
//    //    if( $(this).scrollTop() > hdr ) {
//    //        //mn.removeClass('nav-down');
//    //        mn.addClass(mns);
//    //        //mn.addClass('nav-up');
//    //    } else {
//    //        //mn.removeClass('nav-up');
//    //        mn.removeClass(mns);
//    //        //mn.addClass('nav-down');
//    //    }
//    //});
//    //
//    //
//    //$(window).scroll(function() {
//    //    if( $(this).scrollTop() > hdr && !mnls ) {
//    //        ml.addClass(mnls)
//    //    } else {
//    //        ml.removeClass(mnls)
//    //    }
//    //});
//    //
//    ////TODO Add script that hides nav when scrolled down and shows it back when scrolled up
//    //
//    ////var div = $( "<div>" );
//    ////
//    ////div.promise().done(function( arg1 ) {
//    ////    // Will fire right away and alert "true"
//    ////    console.log(arg1);
//    ////    alert( this === div && arg1 === div );
//    ////});
//
