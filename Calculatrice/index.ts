function addToDisplay(value: string): void {
    let display: HTMLInputElement = (document.getElementById("display") as HTMLInputElement);
    display.value += value;
}

function clearDisplay(value: string): void {
    let display: HTMLInputElement = (document.getElementById("display") as HTMLInputElement);
    display.value = " ";
}

function split(word: string, char: string): string[] {
    let splitted_word: string[] = [];
    let word2: string = "";

    for (let i = 0; i < word.length; i++) {
        if (char.includes(word[i])) {
            if (word2 !== "") {
                splitted_word.push(word2);
            }
            splitted_word.push(word[i]);
            word2 = "";
        } else {
            word2 += word[i];
        }
    }

    if (word2 !== "") {
        splitted_word.push(word2);
    }

    return splitted_word;
}

function calculate(operation_string: string): number {
    let op = "*/+-";
    let result: number = 0;
    let currentOp: string = "+";
    let splitted: string[] = split(operation_string, op);

    for (let i = 0; i < splitted.length; i++) {
        let element: string = splitted[i];
        if ((element = "*") || (element = "/") || (element = "+") || (element = "-")) {
            element = currentOp
        }
        else {
            let currentNumber: number = parseFloat(element);
            if (currentOp = "*") {
                result *= currentNumber;
            }
            else if (currentOp = "/") {
                result /= currentNumber;
            }
            else if (currentOp = "+") {
                result += currentNumber;
            }
            else if (currentOp = "-") {
                result -= currentNumber;
            }
        }
    }

    return result;
}

let operation_string = "5*3+2-9/3";

console.log(`Opération: ${operation_string}`);
console.log(`Résultat: ${calculate(operation_string)}`);
