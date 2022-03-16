
$(document).ready(function () {
    // goTo
    const $link = $('.js-sroll-top-id');
    const $navHeight = $('.nav').height();
    $($link).click(function (e) { 
        e.preventDefault();
        $($link).removeClass('active');
        const $section = $(this).addClass("active").attr('href');
        const $coord = $($section).offset().top
        
        $('body,html').animate({
            scrollTop:$coord-$navHeight
        })
    });
    $(window).scroll(function(){
        let $scroll = $(this).scrollTop();
        $link.each(function(){
            let $active = $(this).attr('href');
            let $activeCoord = $($active).offset().top
            console.log($activeCoord);
            
            if($scroll >= $activeCoord - $navHeight){
                $($link).removeClass('active');
                $(this).addClass('active')
            }else if(
                $scroll < $('#features').offset().top
            ){
                $($link).removeClass('active');
            }
        })
        
    })
    // Upto
    $(window).scroll(function () { 
        const $upTo = $('#to-top');
        let $scrollWin = $(this).scrollTop()
        $($upTo).click(function () { 
            $('body,html').animate({
                scrollTop:0
            },1000)
        });
        if(400 < $scrollWin){
            $upTo.fadeIn()
        }else{
            $upTo.fadeOut()
        }
    });
    
    // Show span
    const $elText = $('.text-hidden');
    const $showBtn = $('.read-more');
    $showBtn.click(function(e){
        e.preventDefault();
        $elText.toggleClass('text-hidden')
        if(!($elText.hasClass("text-hidden"))){
            $showBtn.html('Hide')
            
        }else{
            $showBtn.html('Read More')
        }
    })
    // login
    const $modalLink = $('a.js-modal-show');
    const $closeBtn = $('button.close')
    
    $($modalLink).click(function (e){ 
        e.preventDefault();
        const $modal = $(this).attr('href');
        $($modal).fadeIn()
        
        $($closeBtn).click(function(){
            $($modal).fadeOut()
        })
    });

    //Filter
    filterColor = function(color){
        $('.js-filter-card').filter("."+color).slideDown()
        $('.js-filter-card').not("."+color).slideUp()
    }
    $('.js-filter.btn-primary').click(function(){
        filterColor('bg-primary')
    })
    $('.js-filter.btn-success').click(function(){
        filterColor('bg-success')
    })
    $('.js-filter.btn-danger').click(function(){
        filterColor('bg-danger')
    })
    $(".js-filter.btn-dark").click(function(){
        $('.js-filter-card').slideDown()
    })
});


