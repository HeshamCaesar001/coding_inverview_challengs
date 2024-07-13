// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//// **** FIRST POSSIBLE SOLUTION ****
function maxChar(str) {
    var char_freq = {};
    let max = 0;
    let maxChar = '';
    for(let char of str){
        char_freq[char] = char_freq[char]+1||1;
    }
    for (let char in char_freq) {
        if (char_freq[char]>max) {
            max = char_freq[char];
            maxChar = char;
            
        }
    }   
    return maxChar; 
}
maxChar("abccccccdddd");

module.exports = maxChar;
