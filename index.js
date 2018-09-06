"use strict"; {
    function main(){
        $('#grow-me').addClass('big');
        $('#shrink-me').removeClass('big');
        const listText = $('li').text();
        console.log(listText);
        $('.link').attr('href', 'https://www.example.com').text("somewhere");
        $('#hide-me').css('display', 'none');
        $('#show-me').css('display', 'block');
        const name = $('#name').val();
        $('h1').text(`Welcome ${name}`);
    }
    $('#action').on('click', main);
}