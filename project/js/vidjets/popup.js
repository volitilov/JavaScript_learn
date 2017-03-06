var $j = jQuery.noConflict();

$j(function() {

    $j('body').append('<div id="blackout"></div>');
     
    var boxWidth = 400;

    function centerBox() {
     
		/* определяем нужные данные */
		var winWidth = $j(window).width();
		var winHeight = $j(document).height();
		var scrollPos = $j(window).scrollTop();
		 
		/* Вычисляем позицию */
		 
		var disWidth = (winWidth - boxWidth) / 2
		var disHeight = scrollPos + 150;
		 
		/* Добавляем стили к блокам */
		$j('.popup-box').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
		$j('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
		 
		return false;
	};

	$j(window).resize(centerBox);
	$j(window).scroll(centerBox);
	centerBox();

	$j('[class*=popup-link]').click(function(e) {
     
        /* Предотвращаем действия по умолчанию */
        e.preventDefault();
        e.stopPropagation();
         
        /* Получаем id (последний номер в имени класса ссылки) */
        var name = $j(this).attr('class');
        var id = name[name.length - 1];
        var scrollPos = $j(window).scrollTop();
         
        /* Корректный вывод popup окна, накрытие тенью, предотвращение скроллинга */
        $j('#popup-box-'+id).show();
        $j('#blackout').show();
        $j('html,body').css('overflow', 'hidden');
         
        /* Убираем баг в Firefox */
        $j('html').scrollTop(scrollPos);
    });
     
    $j('[class*=popup-box]').click(function(e) { 
        /* Предотвращаем работу ссылки, если она являеться нашим popup окном */
        e.stopPropagation(); 
    });
    $j('html').click(function() { 
        var scrollPos = $(window).scrollTop();
        /* Скрыть окно, когда кликаем вне его области */
        $j('[id^=popup-box-]').hide(); 
        $j('#blackout').hide(); 
        $j("html,body").css("overflow","auto");
        $j('html').scrollTop(scrollPos);
    });
    $j('.close').click(function() { 
        var scrollPos = $(window).scrollTop();
        /* Скрываем тень и окно, когда пользователь кликнул по X */
        $j('[id^=popup-box-]').hide(); 
        $j('#blackout').hide(); 
        $j("html,body").css("overflow","auto");
        $j('html').scrollTop(scrollPos);
    });
});