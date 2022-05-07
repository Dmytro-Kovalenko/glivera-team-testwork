$(function(){
    // close Header-top block
    $('.btn-close').click(function (){
        $('.header-top').remove();
    });

    // add btn for open older posts
    if(window.innerWidth > 769){
        if($('.post-recent__item').length >= 6){
            $('<button class="post-more default-btn">Older posts</button>').appendTo('.post-recent__left-content');
        }
    }else{
        if($('.post-recent__item').length >= 3){
            $('<button class="post-more default-btn">Older posts</button>').appendTo('.post-recent__left-content');
        }
    }
    // open older posts
    $('.post-more').click(function (){
        $('.post-recent__list').addClass('active');
        $(this).remove();
    })

    // adaptive
    function  adpMenu(){
        if(window.innerWidth < 992){
            //adaptive menu
            if($('.header-content .adpMenu').length == 0){
                $('<div class="adpMenu"></div><button class="toggle-hamburger toggle-hamburger__animx"><span></span></button>').prependTo($('.header-content .container'));

                $('.menu-list').appendTo('.adpMenu');
                $('.login').appendTo('.adpMenu');

                $('.toggle-hamburger').click(function (){
                    $(this).toggleClass('active');
                    $('.adpMenu').addClass('active');
                    if($('.adpMenu').hasClass('active')){
                        $('<button class="adpMenu-close"></button>').appendTo('.adpMenu');
                    }

                    $('body').addClass('active');

                    $('.adpMenu-close').click(function (){
                        $('.toggle-hamburger').removeClass('active');
                        $('body').removeClass('active');
                        $('.adpMenu').removeClass('active');
                        setTimeout(function (){
                            $('.adpMenu-close').remove()
                        }, 400);
                    })
                });
            }

            // prepend search to another block
            $('.post-recent__search').prependTo('.post-recent__left-content');



        }else{
            // back all changes
            $('.login').prependTo('.header-btn');
            $('.menu-list').appendTo($('.header-content .container')).insertBefore('.header-btn');
            $('body').removeClass('active');
            $('.adpMenu').remove();
            $('.toggle-hamburger').remove();
            $('.post-recent__search').prependTo('.post-recent__right');

        }
    }
    adpMenu();

    function adpFooter(){
        if(window.innerWidth < 769){

            // prepent social in footer to another block
            $('.footer-social').appendTo('.footer-left');

        }else{

            // back all changes
            $('.footer-social').appendTo('.footer-right');
        }
    }
    adpFooter()

    // call function with resize
    $(window).resize(function (){
        adpMenu();
        adpFooter();
    })
})
