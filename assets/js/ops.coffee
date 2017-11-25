---
---
# reload on anchor links
links = document.querySelectorAll 'li p a'
for i in links
  # console.log i
  i.addEventListener 'click', (e) => window.location.reload true
# get hash
hash = window.location.hash.substr 1
# stop if no hash
if !hash then throw new Error 'Missing op parameter'
# slug function
slugize = (text) ->
  text.toString().toLowerCase()
    .replace /\s+/g, '-'     # Replace spaces with -
    .replace /[^\w\-]+/g, '' # Remove all non-word chars
    .replace /\-\-+/g, '-'   # Replace multiple - with single -
    .replace /^-+/, ''       # Trim - from start of text
    .replace /-+$/, ''      # Trim - from end of text
# titol case function
titolize = (text) ->
  str.replace /\w\S*/g, (txt) ->
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
# Create hash array
hashArray = hash.split('&').map (e) -> e.split '='
# Get op parameter
op = hashArray.filter( (couple) -> `couple[0] === 'op'`)[0][1]
# Isolate equation
equation = hash.replace "op=#{op}&", ''
# Split equation in terms
terms = equation.split '='
  .map (e) -> e.split '/'
console.log terms
# Check operation
switch op
  # Stringize
  when 'stringize'
    str = terms[0].toString().toUpperCase()
    res_string = "$$\\text{#{slugize(str)}}$$
      $$\\text{#{titolize(terms[0])}}$$
      $$\\text{#{str}}$$"

  # Proportion
  when 'proportion'
    if terms[1][1] == 'x'
      res = (terms[0][1]*terms[1][0])/terms[0][0]
    if terms[1][0] == 'x'
      res = (terms[0][0]*terms[1][1])/terms[0][1]
    res_string = "$${#{terms[0][0]} \\over #{terms[0][1]}}={#{terms[1][0]} \\over #{terms[1][1]}}$$

  $$\\boxed{x=#{res}}$$"
  # Percent
  when 'percent'
    max = Math.max(terms[0][0],terms[0][1])
    min = Math.min(terms[0][0],terms[0][1])
    res = (min*100)/max
    res_string =  "$${#{max} \\over #{min}}={#{100} \\over x}$$

      $$\\boxed{x=#{res}}$$"

# output
document.getElementById 'result'
  .innerHTML += res_string