/*
The classicish nedry gif is based off an image here:
http://www.neogaf.com/forum/showthread.php?s=eb10a7a908ffc1e8726243ce2ef5c909&p=103049021#post103049021
which I think is from this project https://github.com/tojrobinson/jurassicsystems.com

The common nedry gif is based off an image here:
http://jurassicpark.wikia.com/wiki/File:YouDidn%27tSayTheMagicWord.gif
*/ 
(function ( $ ) {
    $.fn.addNedry = function(params) {
        var def = $.extend({
            right: "100px",
            top: "100px",
            position: "absolute",
            gifStyle: "classicish"
        },params);
        $(this).append("<img class='nedry' style='right: "+def.right+";top:"+def.top+";position:"+def.position+"' alt='nedry telling you off' src='nedry-"+def.gifStyle+".gif'>");
        return this;
    }
}( jQuery ));