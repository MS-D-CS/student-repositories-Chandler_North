/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, document */

// Simple jQuery event handler
$(document).ready( function() {
    var cNote = document.getElementById('cAudio');
    $('#c').mousedown(function(){
        cNote.currentTime=0;
        cNote.play();
    });
    $('#c').mouseenter(function(){
        $('#c').addClass('over');
    });
    $('#c').mouseleave(function(){
        $('#c').removeClass('over');
    });
    var dNote = document.getElementById('dAudio');
    $('#d').mousedown(function(){
        dNote.currentTime=0;
        dNote.play();
    });
    var eNote = document.getElementById('eAudio');
    $('#e').mousedown(function(){
        eNote.currentTime=0;
        eNote.play();
    });
    var fNote = document.getElementById('fAudio');
    $('#f').mousedown(function(){
        fNote.currentTime=0;
        fNote.play();
    });
    var gNote = document.getElementById('gAudio');
    $('#g').mousedown(function(){
        gNote.currentTime=0;
        gNote.play();
    });
    var aNote = document.getElementById('aAudio');
    $('#a').mousedown(function(){
        aNote.currentTime=0;
        aNote.play();
    });
    var bNote = document.getElementById('bAudio');
    $('#b').mousedown(function(){
        bNote.currentTime=0;
        bNote.play();
    });

});