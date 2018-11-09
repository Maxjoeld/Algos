//Valid parens solution
// function ValidParens(parens) {
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }

//   return n == 0;
// }

function balancedBrackets(braces) {
  const allBrackets = {'[':']', '{': '}', '(':')'};
  const matches = [];
  const bracesNoSpace = braces.split(' ').join('');

  for (let i = 0; i < bracesNoSpace.length; i++) {
    const bracket = bracesNoSpace[i];
    if (allBrackets[bracket]) {
      matches.push(bracket);
    } else {
      if (bracket !== allBrackets[matches.pop()]) {
        return false;
      }
    }
  }
  return matches.length === 0;
}

console.log(balancedBrackets('{}[]()')); // should print true
console.log(balancedBrackets('{(([]))}')); // should print true
console.log(balancedBrackets('{ [ ] ( ) }')); // should print true
console.log(balancedBrackets('{ [ ( ] ) }')); // should print false
console.log(balancedBrackets('(')); // should print false
console.log(balancedBrackets('{[}')); // should print false