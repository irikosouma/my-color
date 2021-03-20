const logic = () => {
    // cssHooks.backgroundColor = {
    //     get: function(elem) {
    //         if (elem.currentStyle)
    //             var bg = elem.currentStyle["backgroundColor"];
    //         else if (window.getComputedStyle)
    //             var bg = document.defaultView.getComputedStyle(elem,
    //                 null).getPropertyValue("background-color");
    //         if (bg.search("rgb") == -1)
    //             return bg;
    //         else {
    //             bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    //             function hex(x) {
    //                 return ("0" + parseInt(x).toString(16)).slice(-2);
    //             }
    //             return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    //         }
    //     }
    // }
    
    function LightenDarkenColor(col, amt) {
    
        var usePound = false;
    
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
    
        var num = parseInt(col,16);
    
        var r = (num >> 16) + amt;
    
        if (r > 255) r = 255;
        else if  (r < 0) r = 0;
    
        var b = ((num >> 8) & 0x00FF) + amt;
    
        if (b > 255) b = 255;
        else if  (b < 0) b = 0;
    
        var g = (num & 0x0000FF) + amt;
    
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
    
        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    
    }
    
    ("div > div:first-child")
    .each(function() {
        var randColor = '#' +'0123456789abcdef'.split('').map(function(v,i,a){
    return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
        (this).css("background", randColor);
    });
    
    ("body > div").each(function(i, el) {
    var interval = 0;
    var masterColor = (el).find("div:first-child").css("background-color");
    (el).find("div").each(function(i, el) {
        var adjustedColor = LightenDarkenColor(masterColor, interval);
        (el).css("background-color", adjustedColor);
        interval += 20;
    });
    });
}
export default logic