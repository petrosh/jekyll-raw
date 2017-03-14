function encrypt() {
	var key = document.getElementById('key').value.trim();
	var text = document.getElementById('text').value.trim();
	var url = "http://petrosh.altervista.org/cryptopetrosh/encrypt.php?key=";
	url += encodeURIComponent(key) + "&text=" + encodeURIComponent(text) + "&callback=read";
	appendScript(url);
}

function decrypt() {
	var key = document.getElementById('key').value.trim();
	var text = document.getElementById('text').value.trim();
	var url = "http://petrosh.altervista.org/cryptopetrosh/decrypt.php?key=";
	url += encodeURIComponent(key) + "&text=" + encodeURIComponent(text) + "&callback=read";
	appendScript(url);
}

function read(s){
	document.getElementById('text').value = s;
	new Clipboard('button');
	// Enable buttons
	var all = document.getElementsByTagName("button");
	for(var i = 0, max = all.length; i < max; i++){
		all[i].removeAttribute("disabled");
	}
}

function reset(){
	document.getElementById('text').value = '';
	document.getElementById('key').value = '';
	document.getElementById('key').focus();
}

function appendScript(url){
	// Disable buttons
	var all = document.getElementsByTagName("button");
	for(var i = 0, max = all.length; i < max; i++){
		all[i].setAttribute('disabled', '');
	}
	// Append script
	var t   = document.createElement('script');
	t.type  = 'text/javascript';
	t.async = true;
	t.src = url;
	console.log(url);
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(t, s);
}
