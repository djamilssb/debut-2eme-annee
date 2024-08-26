"use strict";
function sommeptt2(l) {
    let min1 = l[0];
    let min2 = l[1];
    for (let i = 2; i < l.length; i++) {
        if (l[i] < min1) {
            if (min1 < min2) {
                min2 = min1;
            }
            min1 = l[i];
        }
        else {
            if (l[i] < min2) {
                min2 = l[i];
            }
        }
    }
    return min1 + min2;
}
console.log(sommeptt2([7, 14, 8, 5, 12]));
//# sourceMappingURL=2ptt.js.map