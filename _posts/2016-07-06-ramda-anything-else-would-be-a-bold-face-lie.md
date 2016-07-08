---
title: Ramda – Anything else would be a bold face lie
js:
  - ramda/ramda.min
  - ramda/script
---
**Mostly from the gitBook** [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/)

- Quotes: [petrosh/diarissues/issues/6](https://github.com/petrosh/diarissues/issues/6)

## Pure functions

A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

The world is littered with ajax code exactly like this.

```js
var getServerStuff = function(callback) {
  return ajaxCall(function(json) {
    return callback(json);
  });
};
```

It is bad practice to surround a function with another function merely to delay evaluation, we'll see why in a moment, but it has to do with maintenance.

When a function has the `()` at the end it will run and return something, when it does not, it simply returns the function stored in the variable.

```js
// this line
return ajaxCall(function(json) { return callback(json); });
// is the same as this line
return ajaxCall(callback);

// so refactor getServerStuff
var getServerStuff = function(callback) { return ajaxCall(callback); };
// became this
var getServerStuff = ajaxCall;
```

**Coup de grâce: parallel**

We can run any pure function in parallel since it does not need access to shared memory and it cannot, by definition, have a race condition due to some side effect.

## Currying

You can call a function with fewer arguments than it expects. It returns a function that takes the remaining arguments (partial application).

Example follow:

**Include ramda**

- Script: [ramda.min.js](/assets/js/ramda/ramda.min.js)
- Docs: [Ramda 0.21.0 docs](http://ramdajs.com/0.21.0/docs/)

```js
// Data
var string = 'ciao sono qui';
var stringer = 'AVANTI dai UA UA';
var qstring = 'I_am_doctor.Q';
var phrases = [string, stringer, qstring];

// Currying
var hasSpaces = R.test(/\s+/g);
var findSpaces = R.filter(hasSpaces);
```

**Live result**

- <code>findSpaces(phrases) = <span class="result hasspace"></span></code>

**Some more**

```js
// Functions
var words = R.split(' ');
var sentences = R.map(words);
var matchQ = R.test(/q/i);
var filterQs = R.filter(matchQ);
var take = R.slice(0);
toLowerCase = function(x) {
	return x.toLowerCase()
};
var snakeCase = R.compose(R.replace(/\s+/ig, '-'), toLowerCase);
var snakeCases = R.map(snakeCase);
```

**Live results**

- <code>words(string) = <span class="result words"></span></code>
- <code>sentences(phrases) = <span class="result sentences"></span></code>
- <code>filterQs(phrases) = <span class="result filterqs"></span></code>
- <code>take(3, stringer) = <span class="result take"></span></code>
- <code>snakeCases(phrases) = <span class="result snakecase"></span></code>

## Naked functions

**`compose`**

```js
var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};
```

**`trace`**

```js
var trace = curry(function(tag, x) {
  console.log(tag, x);
  return x;
});
```

## Repository using RequireJS

- [petrosh/ramda](/ramda/)
