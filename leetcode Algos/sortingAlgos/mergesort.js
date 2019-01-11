function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const c = Math.floor(arr.length / 2);
  const left = arr.slice(0, c);
  const right = arr.slice(c);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(l, r) {
   let res = [];
   while (l.length && r.length) {
     if (l[0] < r[0]) {
       res.push(l.shift());
     } else {
       res.push(r.shift());
     }
   }
   return [...res, ...r, ...l];
}