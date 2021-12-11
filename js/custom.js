$(document).ready(function() {
    //Initialize tooltips
    $('#createCard .nav-tabs > li a[title]').tooltip();

    //Wizard
    $('#createCard a[data-toggle="tab"]').on('show.bs.tab', function(e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $("#createCard .next-step").click(function(e) {

        var $active = $('#createCard .wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $("#createCard .prev-step").click(function(e) {

        var $active = $('#createCard .wizard .nav-tabs li.active');
        prevTab($active);

    });


    $('a[title]').tooltip();

    $('#myCarousel').carousel({
        interval: 3000,
    })

});

function nextTab(elem) {
    $(elem).next().find('#createCard a[data-toggle="tab"]').click();
}

function prevTab(elem) {
    $(elem).prev().find('#createCard a[data-toggle="tab"]').click();
}