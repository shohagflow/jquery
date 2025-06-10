$(document).ready(function(){
    $('h2').click(function(){
        $('.all_property .text1').show(200);

    });
    $('.all_property button').click(function(){
        $('[class="text2"]').remove();

    });

});