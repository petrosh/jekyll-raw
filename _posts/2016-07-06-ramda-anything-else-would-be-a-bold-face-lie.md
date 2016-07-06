---
title: Ramda – Anything else would be a bold face lie
js:
  - ramda/ramda.min
  - ramda/script
css:
  - syntax
---

* Replaced by toc
{:toc}

**Mostly from the gitBook** [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/)

> "You can call a function with fewer arguments than it expects. It returns a function that takes the remaining arguments."

- [Quotes](https://github.com/petrosh/diarissues/issues/6)

**Include ramda**

- Script: [ramda.min.js](/assets/js/ramda/ramda.min.js)
- Docs: [Ramda 0.21.0 docs](http://ramdajs.com/0.21.0/docs/)

**Define some data**

```js
var string = 'ciao sono qui';
var stringer = 'AVANTI dai UA UA';
var qstring = 'I am doctor Q';
var phrases = [string, stringer, qstring];
```

**Other definitions**

```js
var words = R.split(' ');
var sentences = R.map(words);
var matchQ = R.test(/q/i);
var filterQs = R.filter(matchQ);
var take = R.slice(0);
toLowerCase = function(x) {
	return x.toLowerCase()
};
var snakeCase = R.compose(R.replace(/\s+/ig, '-'), toLowerCase);
```

**Live results**

- <code>words(string) = <span class="result words"></span></code>
- <code>sentences(phrases) = <span class="result sentences"></span></code>
- <code>filterQs(phrases) = <span class="result filterqs"></span></code>
- <code>take(3, stringer) = <span class="result take"></span></code>
- <code>snakeCase(stringer) = <span class="result snakecase"></span></code>

**Repository using RequireJS**

- [petrosh/ramda](/ramda/)
