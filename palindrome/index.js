// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

///// **** FIRST POSSIBLE SOLUTION ****
// function palindrome(str) {
//     let reversed = str.split('').reverse().join('');
//    return str === reversed
// }

//// **** SECOND POSSIBLE SOLUTION ****
// function palindrome(str){
//     return str.split('').every((char,i)=>{
//         return char === str[str.length-i-1];
//     })
// }

//// **** THIRD POSSIBLE SOLUTION ****
function palindrome(str){
    // update the string changing all to lowercase and remove any non chars 
    // let string = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
    // determin the left pointer and the right one 
    let leftPointer = 0;
    let rightPointer = str.length-1;
    // loop throught the string 
    while(leftPointer<rightPointer){
        if(str[leftPointer]!==str[rightPointer]) return false;
        else{
            leftPointer++;
            rightPointer--;
        }
    }
    return true;
}
module.exports = palindrome;
