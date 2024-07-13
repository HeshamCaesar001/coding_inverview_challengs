// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//// ***FIRST POSSIBLE SOLUTION****
// function reverse(str) {
//     let chars = str.split('').reverse().join('')
//     return chars;
// }

/// **** SECOND POSSIBLE SOLUTION ****
function reverse(str){
    let reversed = '';
   for(let char of str){
    reversed = char + reversed;
    debugger;
   }
   return reversed ;
}

/// **** THIRDE POSSIBLE SOLUTION ****
// function reverse(str){
//     // debugger;
//     return str.split('').reduce((reversed,char)=> char+reversed,"");
// }
console.log(reverse("apple"));
module.exports = reverse;
