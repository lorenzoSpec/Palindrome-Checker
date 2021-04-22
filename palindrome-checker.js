function palindrome(str) {
  let argCopy = str.slice();
  let argArr = argCopy.split("");

  let filtered = argArr.filter(item => {
    if(/[a-z0-9]/i.test(item)){
      return true;
    }
  });
  let flOrig = filtered.join("").toLowerCase();

  let reverseIt = filtered.reverse();
  let filRev = reverseIt.join("").toLowerCase(); 

  return flOrig === filRev;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("five|\_/|four"));
