function encrypt() {
	var key = document.getElementById('key').value;
	var text = document.getElementById('text').value;
	var url = "https://crossorigin.me/http://petrosh.altervista.org/cryptopetrosh/encrypt.php?key=";
	url += encodeURI(key) + "&text=" + encodeURI(text);
	fetch(url, {mode: 'no-cors',headers:{'Access-Control-Allow-Origin':'*'}}).then(function(response) {
    return Promise.resolve(response)
	}).then(json).then(console.log);
}

function decrypt() {
	var key = document.getElementById('key').value;
	var text = document.getElementById('text').value;
	var url = "https://crossorigin.me/http://petrosh.altervista.org/cryptopetrosh/decrypt.php?key=";
	url += encodeURI(key) + "&text=" + encodeURI(text);
	fetch(url, {mode: 'no-cors',headers:{'Access-Control-Allow-Origin':'*'}}).then(function(response) {
    return Promise.resolve(response)
  }).then(json).then(console.log);
}

function json(response) {
	console.log(response);
  return response.json()
}
