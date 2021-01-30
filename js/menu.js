$(document).ready(function() {
    $('.div_1').slideDown(2000,function(){
        $('.Section').fadeIn(1000);
        $('.wrapper').fadeIn(1000);
        $('.btn_1').fadeIn(1000);
    });

    $('.btn_1').click(function() {
        $('.div_1').slideUp(2500);
        $('.Box').fadeIn(4000);
        $('.wrapper').fadeOut(2000);                
    });

    var click=1;

    $('.btn').click(function() {
        var images =["url('sandwich.jpg')","url('burgerset.jpg')","url('grills.jpeg')","url('seafood.jpeg')"],
            title=["Grilled Chicken Sandwich","Beef Burger","Beef Grills","Seafood"],
            main_course=["1 griled sandwich","1 burger","grills","2 fish"],
            content_1=["1 small fries","1 medium fries","1 salad","1 small fries"],
            content_2=["1 coke","1 coke","1 lemonade","sweet tea"],
            content_3=["1 salad","1 salad","",""],
            price=["Rs.250","Rs.380","Rs.400","Rs.450"];
    if(click > images.length -1){
        click=0;
    }

    $('.image').css('background-image',images[click]);
    $('.title').html(title[click]);
    $('.main').html(main_course[click]);
    $('.content_1').html(content_1[click]);
    $('.content_2').html(content_2[click]);
    $('.content_3').html(content_3[click]);
    $('.price').html(price[click]);

    click++;
        
    });
});