var reverseWords = function (str) {
  let arr = [];

  str.split(' ').forEach(word => {
    if (word !== '') {
      arr.push(word);
    }
  });
  return arr.reverse().join(' ');
};

var reverseWord = function (str) {
  return str.trim('').split('/\s+/').reverse.join('');
}