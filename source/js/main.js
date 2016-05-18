import $ from '../vendors/jquery/dist/jquery.js';
//import Boot from '../vendors/bootstrap/dist/js/bootstrap.js';

//// * Debug * //
console.log($);
//console.log(Boot);

import kikou from './test';
console.log('kikou');
console.log(kikou);


$('#change_management').click(function() {
    console.log('div clicked!');
});

(function(){
    console.log('pure js iife');
})();
