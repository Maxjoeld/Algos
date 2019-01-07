var largestPalindrome = function(n) {
  let max = Math.pow(10, n) -1;
  let min = Math.pow(10, n-1);
  let result = 0;
  
  for (let i = max; i >= min;i--) {
      for (let j = max; j>= i; j--) {
          let product = i * j;
          // I tried doing !result instead of product > re3sult and it didnt work 
          if (product > result) {
              let revNum = String(i * j).split('').reverse().join('');
              if (revNum ===  String(i * j)) {
                  result = (i * j);
                  break;
              }
          } else {
              break;
          }     
      }
      
  }

  return (result % 1337);
};

 