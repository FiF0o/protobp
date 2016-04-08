/**
 * Created by jonlazarini on 04/04/16.
 */
//TODO Load plugins from bower - https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-First-Steps

import tweenMax from '../../vendors/gsap/src/uncompressed/TweenMax.js';
import $ from '../../vendors/jquery/dist/jquery.js';
//TODO fix what to import for scrollspy
import tweenLite from '../../vendors/gsap/src/uncompressed/TweenLite.js';

import scrollMagic from '../../vendors/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js';

// Can't pass debugger...
//import debugScroll from '../../vendors/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';


//Debug modules loading
console.log('\n\n' + tweenMax + '\n\n');
console.log('Log jquery fromn scrollSpy: \n\n'+ $ + '\n\n');
console.log('\n\n' + tweenLite + '\n\n');
console.log('\n\n' + scrollMagic + '\n\n');


// test
export default class TaMere {
    constructor(fdp, tromblon) {
        this.fdp = fdp;
        this.tromblon = tromblon;
    }
}

var taMere = new TaMere('jacky','michel');
console.log(taMere);

// Can't pass debugger...
//console.log('\n\n' + debugScroll + '\n\n');
//TODO Require 4 js plugins from bower

//TODO Write Scroll Spy code

// Require jquery

//TODO Inject scrollspy.s file into functions.js

//module.exports = function() {
//
//
//    var testNow = {
//        aNumber: 4,
//        aFunction: function(qwe, asd) {
//            return qwe + asd
//        },
//        qwe: 3,
//        asd: 3,
//        anArray : ['1','2','3']
//
//    }
//    //console.log('scrolly is logged in: \n\n' + scrolly + '\n\n');
//    return testNow
//
//}



//iScrollYo = function() {
//
//
//}
//
//
//
//
//exports.iScrollYo = iScrollYo;