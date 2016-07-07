var string = 'ciao sono qui';
var stringer = 'AVANTI dai UA UA';
var qstring = 'I_am_doctor.Q';
var phrases = [string, stringer, qstring];

// Pure functions

var words = R.split(' ');
var sentences = R.map(words);
var matchQ = R.test(/q/i);
var filterQs = R.filter(matchQ);
var take = R.slice(0);
toLowerCase = function(x) {
	return x.toLowerCase();
};
var snakeCase = R.compose(R.replace(/\s+/ig, '-'), toLowerCase);
var snakeCases = R.map(snakeCase);

var adda = function(x){ return '[' + x + ']'; };

// Currying
var hasSpaces = R.test(/\s+/g);
var findSpaces = R.filter(hasSpaces);

// Compose
var trace = R.curry(function(tag, x) {
  console.log(tag, x);
  return x;
});
var dasherize = R.compose(R.join('-'), R.map(toLowerCase), trace('after split'), R.split(' '), trace('after replace'), R.replace(/\s{2,}/ig, ' '));
console.log(dasherize(string));

function loadAssets(){
	// Pure functions
	document.querySelector('.result.words').innerHTML = '[' + words(string) + ']';
	document.querySelector('.result.sentences').innerHTML = '['+R.map(words,R.map(adda,phrases))+']';
	document.querySelector('.result.take').innerHTML = take(3, stringer);
	document.querySelector('.result.snakecase').innerHTML = '['+R.map(snakeCase,R.map(adda,phrases))+']';
	document.querySelector('.result.filterqs').innerHTML = '[' + filterQs(phrases) + ']';
	// Currying
	document.querySelector('.result.hasspace').innerHTML = '[' + findSpaces(phrases) + ']';
}

// init
if (window.addEventListener)
  window.addEventListener('load', loadAssets, false);
else if (window.attachEvent)
  window.attachEvent('onload', loadAssets);
else window.onload = loadAssets;
