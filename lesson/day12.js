// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*elem.addEventListener("transitionend", function() {
	alert( "addEventListener" );
});*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function test() {
	txt.style.display = 'none';
}
*/
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

elem.onclick = function(event) {
	document.write(event.type + ' is ' + event.currentTarget + '<br>');
	document.write(event.clientX + ' : ' + event.clientY);
}
