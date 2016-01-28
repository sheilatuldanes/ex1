//Javascript

//call to jQuery ready function
//make sure html and css is loaded

$(document).ready(function () {
    console.log('ready');

    $('li').hide();


    //-----------------hover over the categories--------------

    $('h2#work').hover(function () {
        $('h2#work').css('background-color', '#f1f1f1').css('color', '#fd873d');
    }, function () {
        $('h2#work').css('background-color', '#fd873d').css('color', 'white');
    });

    $('h2#relax').hover(function () {
        $('h2#relax').css('background-color', '#f1f1f1').css('color', '7fccba');
    }, function () {
        $('h2#relax').css('background-color', '#7fccba').css('color', 'white');
    });

    $('h2#dress').hover(function () {
        $('h2#dress').css('background-color', '#f1f1f1').css('color', '#eb4873');
    }, function () {
        $('h2#dress').css('background-color', '#eb4873').css('color', 'white');
    });

    $('h2#food').hover(function () {
        $('h2#food').css('background-color', '#f1f1f1').css('color', '#64404c');
    }, function () {
        $('h2#food').css('background-color', '#64404c').css('color', 'white');
    });

    //---------------click on categories-----------------------

    $('h2#work').click(function () {
        $('li.work').show();
        return false;
    });

    $('h2#dress').click(function () {
        $('li.dress').show();
        return false;
    });

    $('h2#relax').click(function () {
        $('li.relax').show();
        return false;
    });

    $('h2#food').click(function () {
        $('li.food').show();
        return false;
    });

    //-----------------dblclick on categories------------------

    $('h2#work').dblclick(function () {
        $('li.work').hide();
        return false;
    });

    $('h2#dress').dblclick(function () {
        $('li.dress').hide();
        return false;
    });

    $('h2#relax').dblclick(function () {
        $('li.relax').hide();
        return false;
    });

    $('h2#food').dblclick(function () {
        $('li.food').hide();
        return false;
    });
});