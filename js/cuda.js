// Menus 
$('a[class^="nav"]').click(function () {
    var $class = $(this).parents('ul').attr('class');
    $('ul[class="' + $class + '"] a[class^="nav"]').removeClass('active');
    $(this).addClass('active');
});

// Menu portfolio 

$('.activities li').click(function () {
    $('.activities li').removeClass('active');
    $(this).addClass('active');
    var $target = $(this).attr('data-type');
    $('.desktop div').hide();
    if ($target == 'all'){
        $('.desktop div').show();
    } else {
        $('.desktop div[data-target~="' + $target + '"]').show();
    }
});