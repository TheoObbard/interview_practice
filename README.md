This repo is for interview prep questions and notes

Primitives 

string 
number 
symbol
etc 

Primitives have no methods and nothing can be defined on them. Although some seem to have methods like .length(). 

Under the hood, JS takes primitive values and coerces it into an object. It does this any time you call a method. for ex: 

'abc' = {
  0: 'a', 
  1: 'b', 
  2: 'c'
}