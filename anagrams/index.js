// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



//// **** FIRST POSSIBLE SOLTUION ****
// function anagrams(stringA, stringB) {
//     let a_charMap = buildCharMap(stringA);
//     let b_charMap = buildCharMap(stringB);
//     if(Object.keys(a_charMap).length !== Object.keys(b_charMap).length) return false;
//     for (const char in a_charMap) {
//         if(a_charMap[char] !== b_charMap[char]) return false;
//     }
//     return true;
// }
// function buildCharMap(str){
//     const charFrequency = {};
//     for (const char of str.replace(/[^\w]/g,"").toLowerCase()) {
//         charFrequency[char] = charFrequency[char] +1 || 1;
//     }
//     return charFrequency;
// }

//// **** SECOND POSSIBLE SOLUTION ****
function anagrams(stringA, stringB) {
  return cleanString(stringA)===cleanString(stringB)
}

function cleanString(str){
    return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')
}
module.exports = anagrams;
