//topに戻る

$(function () {
    let topBtn = $('#top_page');
    topBtn.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.click(function (event) {
        event.preventDefault();

        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
});

//    スライドショー

$(function () {
    $('#slide_show').slick({
       fade: true,    // fedeオン
    speed: 1500,   // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 3000,   // 自動スライド切り替え速度
    arrows: false,         // 矢印表示・非表示
    autoplay: true,        // 自動再生
    slidesToShow: 1,       // スライド表示数
    slidesToScroll: 1,     // スライドする数
    infinite: true         // 無限リピート オン・オフ
    });
});

//ハンバーガーメニュー


$(function () {
	var $nav = $('#area');
	var $btn = $('.toggle_btn');
	var $mask = $('#mask');
	var open2 = 'open2';

	// menu open close
	$btn.on('click', function () {
		if (!$nav.hasClass(open2)) {
			$nav.addClass(open2);
		} else {
			$nav.removeClass(open2);
		}
	});

	// mask close
	$mask.on('click', function () {
		$nav.removeClass(open2);
	});
});


//アコーディオンメニュー

$(function(){
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});
});


