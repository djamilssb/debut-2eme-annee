"use strict";
function cbancaire(word) {
    let res = "";
    for (let i = 0; i < word.length; i++) {
        if (i < word.length - 4) {
            res += "#";
        }
        else {
            res += word[i];
        }
    }
    return res;
}
console.log(cbancaire("6541556464545484"));
//# sourceMappingURL=cbancaire.js.map