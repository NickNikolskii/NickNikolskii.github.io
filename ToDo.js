$(document).ready(function () {

    $('.wrapper > div > button').click(function () {
        var a = $('input').val();
        $('.item_list').append('<div class="item">' + a + '</div>');
        $('input').val("");
    });

    $("item").dblclick(function () {
        alert("Udalis' uje");
        $(this).toggleClass("line-through");
    });

});
