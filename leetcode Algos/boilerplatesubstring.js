var findAnagrams = function (s, t) {
    //init a collection or int value to save the result according the question.
    let result = [];
    if (t.length > s.length) return result;
    let size = 0;
    //create a hashmap to save the Characters of the target substring.
    //(K, V) = (Character, Frequence of the Characters)
    let map = new Map();
    for (let ele of t) {
        if (!map.get(ele)) {
            map.set(ele, 1)
        } else {
            map.set(ele, map.get(ele) + 1)
        }
    }
    let counter = map.size;
    //Two Pointers: begin - left pointer of the window; end - right pointer of the window
    let begin = 0, end = 0;
    let len = Number.MAX_VALUE;
    //loop at the begining of the source string
    while (end < s.length) {
        let c = s.charAt(end);

        if (map.has(c)) {
            map.set(c, map.get(c) - 1)
            if (map.get(c) === 0) counter--;
        }
        //increase begin pointer to make it invalid/valid again
        while (counter === 0) {
            let tempc = s.charAt(begin);
            if (map.has(tempc)) {
                map.set(tempc, map.get(tempc) + 1)
                if (map.get(tempc) > 0) counter++;
            }
            /* save / update(min/max) the result if find a target*/
            // result collections or result int value
        }
        begin++;
    }
    return result
};