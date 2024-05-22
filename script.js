$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        $('.text').html(data.message);
    }).fail(function() {
        alert("Para mi Enfermera hermosa");
    });

    $('.container').on('click', function() {
        $(this).toggleClass('open');
    });
});

