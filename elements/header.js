var headerElement = ("\
<header>\
<div id=\"logo\"><img src=\"./img/logo.png\">Xander's Page</div>\
<nav>\
<ul>\
<li><a href=\"index.html\">Home</a>\
<li><a href=\"page1.html\">Page 1</a>\
<li><a href=\"page2.html\">Page 2</a>\
<li><a href=\"page3.html\">Page 3</a>\
<li><a href=\"page4.html\">Page 4</a>\
<li><a href=\"page5.html\">Page 5</a>\
</ul>\
</nav>\
</header>");
var bodyElement = document.body;
bodyElement.innerHTML = headerElement + bodyElement.innerHTML;
