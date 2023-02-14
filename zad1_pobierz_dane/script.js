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