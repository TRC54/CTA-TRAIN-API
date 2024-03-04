// write a function called findCharactersInString
// it accepts two arguments - the first is a string,
// and the second is an array of characters
// the function should return how many times the characters in that array
// were found in the string - capitalization matters!
// for example, findCharactersInString("hello", ["e", "l"])
// should return 3
// for example, findCharactersInString("Hello", ["h", "e"])
// should return 1 - the capital H is not the same as a lowercase h
// findCharactersInString("abcde", ["x", "y", "z"])
// should return 0 - "x", "y" and "z" never occur in the string "abcde"
// findCharactersInString("Puppies are cute!", ["p", "u", "I"])
// should return 4

// remember to break this into steps:
// first, establish your function
// then, establish what you want to return
// then, see what small steps you can make towards completing the task

function findCharactersInString(str,arr){
//itarate through the string
var counter=0;
for(let i = 0;i < str.length();i++){}{
for(var j = 0; j < str.length(); j++){
    if (arr[i] === str[j]){
        counter++;
}  
          } 
     }
}
if (counter > 0){
if (counter ===0){
return counter;
}
}
