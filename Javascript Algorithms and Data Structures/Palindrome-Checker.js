function palindrome(str) {
  str = str.replace(/[^a-z0-9]+/gi, '').toLowerCase();
  let revStr = str.split('').reverse().join('');
  return !str.localeCompare(revStr);
}



console.log(palindrome("2A3*3a2"));