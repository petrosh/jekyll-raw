// Head counter
function vaiZio() {
	document.querySelector('.dayfraction').innerHTML = (dayFraction()*100).toFixed(2);
	document.body.style.background = dayColor();
	document.querySelector('.coupleofhours').style.background = dayColor( dayFraction() + 1/12);
}
vaiZio();
setInterval(vaiZio, 200);

// Clock Table
var tableDaymoments = document.querySelector('.result.daymoments');
for (var i = 0; i < 24; i=i+1) {
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var clock = (i >= 13) ? i-12 : i;
	var pm = (i >= 12) ? " pm" : " am";
	if (i==0) clock = "12";
	td1.innerHTML = clock + pm;
	var td2 = document.createElement('td');
	td2.innerHTML = Math.round(dayFraction(i/24)*100) + '%';
	var td3 = document.createElement('td');
	td3.style.background = dayColor(i/24);
	td3.innerHTML = "&nbsp;";
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tableDaymoments.appendChild(tr);
}
