// Is Unique: Implement an algorithm to determine if a string has all 
// unique characters. What if you cannot use additional data structures?


// https://techdevguide.withgoogle.com/resources/compress-decompression/#!

function isUnique(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char] ++;
      if (result[char] > 1) {
        return false;
      }
    }
  }
  return true;
}


// function isUnique(str) {
//   for(let i = 0; i < str.length; i++) {
//     const restOfStr = str.slice(i + 1);
//     const currentChar = str[i];
//     if (restOfStr.includes(currentChar)) {
//       return false;
//     }
//   }
//   return true
// }

// function isUnique(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!result[str[i]]) {
//       result[str[i]] = 1
//     } else {
//       return false
//     }
//   }
//   return 'wow'
// }

// console.log(isUnique('heys'));


// Given two strings,write a method to decide if one is a permutation of the
// other.

function isPerm(first, sec) {
  let firstWord = first.split('').sort().toString();
  let secWord = sec.split('').sort().toString();
  return firstWord === secWord;
}



// console.log(isPerm('abcd', 'abcd'));



var urlify = function(str, length) {
  // have a pointer to check from start to end
  let strArr = str.split('');
  let result = [];
  let url = '%20';

  for (let i = 0; i < strArr.length; i++) {
    let ele = strArr[i];
    if (ele === ' ') {
      result.push('%20')
    } else {
      result.push(ele);
    }
  }
  for (let j = 0; j < result.length; j++) {
    const ele = result[j];
    const nextEle = result[j + 1];
    if (ele === url && nextEle === url) {
      result = result.slice(0, j + 1);
      break;
    }
  }
  return result.join('');
};

// console.log(urlify('Mr John Smith    ', 13));


// Given a string, write a function to check if it is a permutation of a palin­ drome. 
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters. 
// The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa // aacctto
// Output: True (permutations: "taco cat", "atco eta", etc.) Hints:#106,#121,#134,#136


// Palindrome check does not work because we can rearrange the letters so it could 
// be a palindrome (aka a permutation- when can create a permutaition so it can be a palindrome)
// function palinPerm(string) {
  // let count = 0;
  // let result = {};
  // let foward = string.split(' ').join('').toLowerCase();
  // let backwards = string.split(' ').reverse().join('').toLowerCase();
  // console.log({backwards, foward});
  // return foward === backwards;

  // for (let i = 0; i < string.length; i++) {
  //   let ele = string[i];
  //   if (!result[ele]) {
  //     result[ele] = 1;
  //   } else {
  //     result[ele]++;
  //     if (result[ele] > 1)
  //   }
  // }
// }

// function palinPerm(string) {
//   let strObj = {};
//   let check = 0;
//   let flag = true;
//   let str = string.split(' ').join('').toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     let ele = str[i];
//     if (!strObj[ele]) {
//       strObj[ele] = 1;
//     } else {
//       strObj[ele]++;
//     }
//   }
//   console.log(strObj);
//   Object.keys(strObj).forEach((char) => {
//     if (strObj[char] % 2 > 0) {
//       check++;
//     }
//     if (check >= 2) {
//       flag = false;
//     }
//   })
//   return flag;
// }



// var palinPerm = function(string) {
//   // create object literal to store charcount
//   let currChar={}
//   let isPerm = true;
//   let flag = false; 
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== ' ') {
//       let str = string[i].toLowerCase();
//       if (!currChar[str]) {
//         currChar[str] = 1
//       } else {
//         currChar[str] += 1
//       }
//     }
//   }
//   Object.keys(currChar).forEach((char) => {
//     if (currChar[char] % 2 > 0) {
//       if (flag) {
//         isPerm = false;
//       } else {
//         flag = true;
//       }
//     }
//   })
//   return isPerm;
// };

// console.log(palinPerm('racecar'));
// console.log(palinPerm('Tact coat'));


// One Away: There are three types of edits that can be performed on strings: insert a 
// character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are 
// one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false Hints:#23, #97, #130

// function oneAway(str1, str2) {
//   let errors = 0;
//   str2.split('').forEach((char, i) => {
//     // console.log(char);
//     if (!str1.includes(char)) {
//       errors += 1;
//     }
//   })
//   return errors < 2;
// }

// function oneAway( str1, str2) {
//   let count = 0;
//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if (!str1.includes(char)) {
//       count += 1;
//     }
//   }
//   return count < 2;
// }

// console.log(oneAway('pale', 'ple'));
// console.log(oneAway('pales', 'pale'));
// console.log(oneAway('pale', 'bale'));
// console.log(oneAway('pale', 'bake'));

// function strComp(str) {
//   let result = str[0];
//   let currStreak = str[0];
//   let count = 0;
//   str.split('').forEach((char) => {
//     if(char === currStreak){
//       count++;
//     }
//     else {
//       result += count += char; 
//       count = 1; 
//       currStreak = char
//     }
//   });
//   result += count;
//   return result.length < str.length ? result : str;
// }

// String Compression: Implement a method to perform basic string 
// compression using the counts of repeated characters. For example, 
// the string aabcccccaaa would become a2blc5a3. 
// If the "compressed" string would not become smaller than the original 
// string, your method should return
// the original string. You can assume the string has 
// only uppercase and lowercase letters (a - z).
// Hints:#92, #110

// ''
function strComp(str) {
  let streak = ''; 
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let nextChar = str[i + 1];
    if (char === nextChar) {
      streak += char;
    } else {
      streak += char;
      result += streak[0] + streak.length;
      streak = '';
    }
  }
  return result.length > str.length ? str : result;
}

console.log(strComp('aabcccccaaa'));

// Rotate Matrix: Given an image represented by an NxN matrix, 
// where each pixel in the image is 4 bytes, write a method to 
// rotate the image by 90 degrees. Can you do this in place?
// Hints:#51, #100



/* TEST */
let testMatrix = [
[1, 2, 3, 4],
[0, 1, 2, 3],
[0, 0, 1, 2],
[1, 0, 0, 1],
];

function rotateMatrix(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let outter = arr[i];
    let rowSet = [];
    for (let j = 0; j < outter.length; j++) {
      let ele = arr[j][i];
      rowSet.push(ele);
    }
    result.push(rowSet);
  }
  return result;
}

// console.log('before:');
// console.log(testMatrix[0]);
// console.log(testMatrix[1]);
// console.log(testMatrix[2]);
// console.log(testMatrix[3]);

let arr =
  [
    [6, 2, 3, 5],
    [0, 1, 2, 3],
    [0, 0, 1, 2],
    [1, 0, 0, 1],
  ];
// console.log(rotateMatrix(testMatrix));

// console.log('after:');
// console.log(testMatrix[0]);
// console.log(testMatrix[1]);
// console.log(testMatrix[2]);
// console.log(testMatrix[3]);


// console.log(rotateArr(arr))



// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, 
// its entire row and column are set to 0.

function zeroMatrix(matrix) {
  let col = [];
  let rows = [];

  matrix.forEach((row, j) => {
    row.forEach((column, i) => {
      if (column === 0) {
        col.push(i);
        rows.push(j)
      }
    })
  });
  rows.forEach(ele => matrix[ele].fill(0))
  matrix.forEach((ele, i) => {
    col.forEach((row) =>{
      matrix[i][row] = 0;
    })
  })
  return matrix;
}

var matrix = [
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

console.log(zeroMatrix(matrix));


// String Rotation: Assumeyou have a method isSubstrin gwhich checks if one word 
// is a substring of another. Given two strings, sl and s2, write code to check if s2 is a 
// rotation of sl using only one call to isSubstring (e.g.,"waterbottle" 
// is a rotation of"erbottlewat").

// function strRotation(str1, str2) {

// }

var stringRotation = function(string1, string2) {
  // if (string1.length !== string2.length) {
  //   return false;
  // }
  return (string2 + string2).includes(string1); // one call of isSubString
};

// Approaches:
// a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
// b) look for starting character before moving around and rotating -> starting characters might repeat
// c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

// Test
// console.log(stringRotation('waterbottle', 'erbottlewat'), true);
// console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
// console.log(stringRotation('aaata', 'aataa'), true);

// u get a string, ‘string’ and u have to see if an array has 
// all the letters in the string [x,d,s,s,t,t,r,i,i,n,d,s,g]
function checkIf(str, check) {
  let str = {};
  let flag = true;
  str.split('').forEach((ele) => {
    if (!str[ele]) {
      str[ele] = 1;
    } else {
      str[ele]++;
    }
  });
 check.split('').forEach(ele => {
   if (!str[ele]) {
     let flag = false;
   } else {

   }
 })
}

console.log(checkIf('heyimman', ['heyiman']))