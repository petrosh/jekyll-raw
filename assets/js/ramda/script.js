var string = 'ciao sono qui';
var stringer = 'AVANTI dai UA UA';
var qstring = 'I am doctor Q';
var phrases = [string, stringer, qstring];

var words = R.split(' ');
var sentences = R.map(words);
var matchQ = R.test(/q/i);
var filterQs = R.filter(matchQ);
var take = R.slice(0);
toLowerCase = function(x) {
	return x.toLowerCase();
};
var snakeCase = R.compose(R.replace(/\s+/ig, '-'), toLowerCase);

var adda = function(x){ return '[' + x + ']'; };
function loadAssets(){
	document.querySelector('.result.words').innerHTML = '[' + words(string) + ']';
	document.querySelector('.result.sentences').innerHTML = '['+R.map(words,R.map(adda,phrases))+']';
	document.querySelector('.result.take').innerHTML = take(3, stringer);
	document.querySelector('.result.snakecase').innerHTML = snakeCase(stringer);
	document.querySelector('.result.filterqs').innerHTML = '[' + filterQs(phrases) + ']';
}

// init
if (window.addEventListener)
  window.addEventListener('load', loadAssets, false);
else if (window.attachEvent)
  window.attachEvent('onload', loadAssets);
else window.onload = loadAssets;
