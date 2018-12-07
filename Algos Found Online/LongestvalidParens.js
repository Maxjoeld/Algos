var longestValidParentheses = function (s) {
  var ts = s.split('');
  var stack = [],
    max = 0;

  ts.forEach(function (t, i) {
    if (t == '(') {
      stack.push(i);
    } else {
      // stack.length === 0 to solve for closed brackets om the first iteration
      /* ts[stack[stack.length - 1]] 'if there is another closed bracket in our stack 
      there should be no need to pop the last element
      */
      if (stack.length === 0 || ts[stack[stack.length - 1]] == ')') {
        stack.push(i);
      } else {
        stack.pop();
      }
    }
  });
  // add two ends                                                                      
  stack.push(ts.length);
  stack.splice(0, 0, -1);

  for (var i = 0; i < stack.length - 1; i++) {
    var v = stack[i + 1] - stack[i] - 1;
    max = Math.max(max, v);
  }

  return max;
};

// 2 steps:

//   First, eliminate all brackets in any complete segment, left the ones that is not matched anywhere.

// Second, loop through the leftovers to find the max distance between them.

// This 2 steps can be combined to form one loop only as shown by other solutions.

//  let addOne = digits[digits.length - 1] + 1;
//  digits.splice(-1, 1, addOne);
//  if (digits.length === 1) {
//    return String(digits).split('').map(a => Number(a));
//  }
//  return digits;
//  };