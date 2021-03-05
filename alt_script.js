$('.image').click(function () {
    let temp = $(this).attr('src');
    $(this).attr('src', $(this).attr('data-alt-src'));
    $(this).attr('data-alt-src', temp)
});