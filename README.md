This repo is for interview prep questions and notes

Notes for trivia questions:

Primitives 

string 
number 
symbol
boolean 
undefined 

Primitives have no methods and nothing can be defined on them. Although some seem to have methods like .length(). 

Under the hood, JS takes primitive values and coerces it into an object. It does this any time you call a method. for ex: 

'abc' = {
  0: 'a', 
  1: 'b', 
  2: 'c'
}

7 falsy values in js: 

false
null
undefined
0
NaN
""
document.all

