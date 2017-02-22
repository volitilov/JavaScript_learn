// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

var p = createElement('p');
document.body.append(p);

var em = createElement('em');
em.append('Hello world');

p.append('Slava: ' + em);
p.after(document.createElement('hr'));
