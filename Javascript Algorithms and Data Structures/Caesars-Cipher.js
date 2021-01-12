function rot13(str) {

  return str.split('')
        .map((item, index) => str.charCodeAt(index) <= 90 &&  str.charCodeAt(index) >= 65 ? str.charCodeAt(index) + 13 : str.charCodeAt(index))
        .map(item => item > 90 ? item = String.fromCharCode(item - 26) : String.fromCharCode(item))
        .join('');
}

console.log(rot13("SERR PBQR PNZC"));