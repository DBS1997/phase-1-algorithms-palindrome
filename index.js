function isPalindrome(word){
//number of letters to test
  let iterations
    if(word.length%2===0){
      iterations = (word.length/2)}
    else{
      iterations = ((word.length-1)/2)}
// testing letters
    for(i=0; i<iterations; i++){
      if(word.charAt(i) !== word.charAt(word.length-1-i)){
      return false}}

    return true

}

/* 
  Add your pseudocode here
  if(word.length is even)
    if(
      for (i=0 i<(word.length/2) i+=){
        charAt(i)===carAt(-i))
      })
      {return true}
  else{
    for (i=0; i<((word.length-1)/2); i+=){
      charAt(i)=carAt(-i))
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("adogapanicinapagoda"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("gohangasalamiimalasagnahog"));

  console.log("")

  console.log("Expecting: false");
  console.log("=>", isPalindrome("denied"));
}

module.exports = isPalindrome;