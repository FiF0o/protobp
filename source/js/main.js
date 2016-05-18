//import $ from '../vendors/jquery/dist/jquery.js';
//import Boot from '../vendors/bootstrap/dist/js/bootstrap.js';

var QC = window.$ = window.jQuery = require('./../vendors/jquery/dist/jquery.js');
//// * Debug * //
console.log('QC');
console.log(QC);

var Boot = require('./../vendors/bootstrap/dist/js/bootstrap.js');
//console.log($);
console.log('Boot');
console.log(Boot);

import kikou from './test';
console.log('kikou');
console.log(kikou);


$('#change_management').click(function() {
    console.log('div clicked!');
});

(function(){
    console.log('pure js iife');
})();
