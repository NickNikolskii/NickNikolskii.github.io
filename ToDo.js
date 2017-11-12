$(document).ready(function () {

    $('.wrapper > div > button').click(function () {
        var a = $('input').val();
        $('.item_list').append('<div id="test" class="item">' + a + '</div>');
        $('input').val("");
    });

    $(item_list).dblclick(function () {
        $(this).remove();
    });

    $()
});
