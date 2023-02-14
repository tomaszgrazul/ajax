// $('.accordion-content').slideUp();
// $(document).ready(function() {
//     $('.accordion-item').click(function() {
//         if($(this).hasClass('open')) {
//             $(this).removeClass('open');
//             $(this).find('.accordion-content').slideUp();
//         } else {
//             $(this).addClass('open');
//             $(this).find('.accordion-content').slideDown();
//         }
//     });
// });


$(document).ready(function() {
    $('button').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
            $('.name').text(data.imie);
            $('.surname').text(data.nazwisko);
            $('.occupation').text(data.zawod);
            $('.company').text(data.firma);
        });
    });

});