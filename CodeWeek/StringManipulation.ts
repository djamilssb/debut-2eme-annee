function split(expr:string, splitter:string) {
        let result = [];
        let current_substring = '';
        for (let i = 0; i < expr.length; i++) {
            if (expr[i] == splitter) {
                result.push(current_substring);
                current_substring = '';
            }
            else{
                current_substring += expr[i];
            }
        }
        result.push(current_substring);
        return result;
}
function join(expr:string[], jointer:string) {
    let result = '';
    for (let i = 0; i < expr.length; i++) {
        result += expr[i];
        if (i < expr.length - 1) {
            result += jointer;
        }
    }
    return result;
}
function replace(expr:string, to_replace:string, replace_with:string) {
    let result = '';
    let current_string = '';
    let j = 0;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == to_replace[j]) {
            current_string += expr[i];
            j+=1;
            
            if (j == to_replace.length) {
                result += replace_with;
                current_string = '';
                j=0;
            }
        }
        else {
            if (j > 0) {
                result += current_string;
                current_string = '';
                j=0
            } 
            result += expr[i]; 
        }
    }
    return result;
}

function reverse(expr:string) {
    let reversed = '';
    for (let i = expr.length - 1; i >= 0; i--) {
        reversed += expr[i];
    }
    return reversed;
}

function slice(expr:string, start:number, end:number) {
    if (end < 0) {
        end += expr.length;
    }
    if (start >= expr.length || end > expr.length || start < 0 || end < 0 ) {
        return '';
    }
    let result = '';
    for (let i = start; i < end; i++) {
        result += expr[i];
    }
    return result;
}

// split
console.log("split");
console.log(split("Hello World", " ")); // ["Hello", "World"]
console.log(split("apple,banana,cherry", ",")); // ["apple", "banana", "cherry"]
console.log(split("abcde", ",")); // ["abcde"]

//join
console.log("\n\njoin");
console.log(join(["apple", "banana", "cherry"], ", ")); // "apple, banana, cherry"
console.log(join(["apple", "banana", "cherry"], "")); // "applebananacherry"
console.log(join([], ", ")); // ""

//replace
console.log("\n\nreplace");
console.log(replace("Hello World", "World", "Universe")); // "Hello Universe"
console.log(replace("Hello World", "Universe", "World")); // "Hello World"
console.log(replace("Hello World", "World", "")); // "Hello "
console.log(replace("Bonjour le monde", "le", "tout le")); // "Bonjour tout le monde"
console.log(replace("Wo Wor Worl World Wo World", "World", "Universe")); // Wo Wor Worl Universe Wo Universe"

//reverse
console.log("\n\nreverse");
console.log(reverse("Hello World")); // "dlroW olleH"
console.log(reverse("")); // ""
console.log(reverse("!@#$%^&*()")); // ")(*&^%$#@!"

//slice
console.log("\n\nslice");
console.log(slice("Hello World", 6, 11)); // "World"
console.log(slice("Hello World", 0, -6)); // "Hello"
console.log(slice("Hello World", 20, 30)); // ""