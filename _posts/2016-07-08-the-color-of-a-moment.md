---
title: The color of a moment
js:
  - dayColor/script
---
You are about through <span class="dayfraction"></span>% of your day.

It may seems a lot but if you start counting at midnight, waking up at 8:00am is 33.33% already: `% = hour * 100 / 24`.

```js
var dayFraction = function(){
  return (new Date().getTime()-(new Date(new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate()).getTime()))/86400000;
};

dayFraction();
// returns 0.7063664814814815 at about 5 pm
```

I will add colors as expected:
<table class="result daymoments">
<tr>
  <th>
    Clock
  </th>
  <th>
    Day
  </th>
  <th>
    Color
  </th>
</tr>
</table>

```js
var dayColor = function () {
  var perc = dayFraction();
  var twopi = 2*Math.PI;
  var arr = [-Math.sin(perc*twopi), -Math.sin((perc+0.25)*twopi), Math.cos(perc*twopi)];
  return 'rgba(' +  arr.map(function(i){ return Math.floor(191.25+i*63.75); }).join(', ') + ', .7)';
};

dayColor();
// returns "rgba(252, 208, 174, .7)" at about 5 pm
```
Rewriting the functions with arguments we have this mellow background color being:

```js
document.body.style.background = dayColor(dayFraction());
```

And this will be in a couple of hours:
<div class="boxed coupleofhours"><pre>dayColor(dayFraction() + (100/12));</pre></div>
