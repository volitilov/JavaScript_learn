function addScript(src){
	var script = document.createElement('script');
	script.src = src;
	script.async = false; // чтобы гарантировать порядок
	document.head.appendChild(script);
}

addScript('/project/js/rules/jquery.slim.min.js'); 	// загружаться эти скрипты начнут сразу
addScript('/project/js/rules/jquery-ui.min.js'); 		// выполнятся, как только загрузятся
addScript('/project/js/vidjets/popup.js'); 			// но, гарантированно, в порядке 1 -> 2 -> 3