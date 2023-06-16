$(document).ready(function () {
    $( ".standings_tabs_wrapper" ).tabs();
    $('.jardin_shops_slider').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: $('.jardin_shops_slider_nav'),
        appendDots: $('.jardin_shops_slider_nav'),
        responsive: [
             {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.tabs_header').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        appendArrows: $('.tabs_header_nav'),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.mobile_nav_icon').on('click', function () {
        $(this).toggleClass('opened');
        $('.jardin_main_nav').toggleClass('opened');
    });
    $('.contact_button').on('click', function () {
        $('.jardin_contact_form_popup').addClass('opened');
        $('.jardin_popup_bg').addClass('opened');
    });
    $('.login_profile').on('click', function () {
        $('.jardin_login_popup').addClass('opened');
        $('.jardin_popup_bg').addClass('opened');
    });
    $('.close_popup').on('click', function () {
        $('.jardin_popup_wrapper').removeClass('opened');
        $('.jardin_popup_bg').removeClass('opened');
    });

    var $inputItem = $(".js-inputWrapper");
    $inputItem.length && $inputItem.each(function() {
        var $this = $(this),
            $input = $this.find(".formRow--input"),
            placeholderTxt = $input.attr("placeholder"),
            $placeholder;

        $input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
            $input.attr("placeholder", ""),
            $placeholder = $this.find(".placeholder"),

            $input.val().length ? $this.addClass("active") : $this.removeClass("active"),

            $input.on("focusout", function() {
                $input.val().length ? $this.addClass("active") : $this.removeClass("active");
            }).on("focus", function() {
                $this.addClass("active");
            });
    });

    /*scroll to Top*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.how_to_play_section').offset().top) {
            $('#scroll_up').fadeIn();
        } else {
            $('#scroll_up').fadeOut();
        }
    });
    $('#scroll_up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
(function($){
    $(window).on("load",function(){
        $('.weekly_results_table').mCustomScrollbar({
            axis:"y"
        });
        if($(window).width() <= 767){
            $(".standings_tab_content").mCustomScrollbar({
                axis:"x"
            });
        }else {
            $(".standings_tab_content").mCustomScrollbar('destroy');
        }
    });
    $(window).on("resize",function(){
        $('.weekly_results_table').mCustomScrollbar({
            axis:"y"
        });
        if($(window).width() <= 767){
            $(".standings_tab_content").mCustomScrollbar({
                axis:"x"
            })
        }else {
            $(".standings_tab_content").mCustomScrollbar('destroy');
        }
    });

})(jQuery);
