---
---

hash = window.location.hash.substr(1)
if !hash then throw new Error 'Missing op parameter'
hashArray = hash.split('&').map (e) -> e.split '='
op = hashArray.filter( (couple) ->	return `couple[0] === 'op'`)[0][1]
switch op
  when 'proportion'
    equation = hash.replace 'op=proportion&', ''
    terms = equation.split '='
      .map (e) -> e.split '/'
    if terms[1][1] == 'x'
      res = (terms[0][1]*terms[1][0])/terms[0][0]
    if terms[1][0] == 'x'
      res = (terms[0][0]*terms[1][1])/terms[0][1]
document.querySelector 'article'
  .innerHTML += "#{equation}<br>x=#{res}"
