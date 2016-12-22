$(function() {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    $("#avenger").css({

        backgroundColor: '#' + randomColor

    });

    $("#colorcode").text("#" + randomColor);

    $("#colorcode").css({

        color: '#' + randomColor

    });

    $("#reload").css({

        backgroundColor: '#' + randomColor

    });
    
});

$(document).ready(function(){

$('#reload').on('click',function(){

    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    $("#avenger").css({

        backgroundColor: '#' + randomColor

    });

    $("#colorcode").text("#" + randomColor);

    $("#colorcode").css({

        color: '#' + randomColor

    });

    $("#reload").css({

        backgroundColor: '#' + randomColor

    });

});

});
