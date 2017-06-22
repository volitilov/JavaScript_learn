// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*let div = document.createElement('div');

div.className = 'alert';
div.innerHTML = '<p>THis is message2, example error</p>';

// home.appendChild(div);
// home.insertBefore(div, home.children[1]);
// home.insertBefore(div, home.firstChild);
home.insertBefore(div, null);
div2 = div.cloneNode(true);
div2.innerHTML = 'Hello world message';
home.insertBefore(div2, home.firstChild);

setTimeout(() => home.removeChild(div), 3000);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let div = document.createElement('div');
div.className = 'alert';
home.appendChild(div);

let text = prompt('text', 'example');
div.appendChild(document.createTextNode(text));