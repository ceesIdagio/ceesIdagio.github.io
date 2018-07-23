(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-4a1b8536-8f40-47cb-ba26-534fbafec2db .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
            jQuery(".s-9444c0b5-2f76-4db8-b5a6-489af8676b07 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);