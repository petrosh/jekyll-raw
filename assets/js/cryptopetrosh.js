function encrypt() {
	var key = document.getElementById('key').value;
	var text = document.getElementById('text').value;
	var url = "//petrosh.altervista.org/cryptopetrosh/encrypt.php?key=";
	url += encodeURI(key) + "&text=" + encodeURI(text);
	fetch(url).then(console.log);
}

function decrypt() {
	var key = document.getElementById('key').value;
	var text = document.getElementById('text').value;
	var url = "//petrosh.altervista.org/cryptopetrosh/decrypt.php?key=";
	url += encodeURI(key) + "&text=" + encodeURI(text);
	fetch(url).then(console.log);
}
