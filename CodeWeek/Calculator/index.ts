/*Conception d'une Calculatrice Simple en TypeScript
L'objectif de cet exercice est de créer une calculatrice simple en TypeScript
capable d'évaluer des expressions mathématiques de base. Il est nécessaire de déterminer l'ordre des opérations
pour assurer une évaluation correcte.
Le but est ensuite de Transpiler en JavaScript pour que le fichier index.html puisse charger le script et l'associer à l'affichage.
Pistes de Résolution :
- Remplacement des Signes de Soustraction :
Pour simplifier le traitement, remplacer les signes de soustraction par des opérations d'addition suivie 
d'une multiplication par -1. Cela transforme les soustractions en additions, ce qui facilite la logique de traitement.
En effet, l'addition et la soustraction sont des opérations similaires, et traiter toutes les opérations comme des additions.
Par exemple, l'expression "5 - 3" devient "5 + -1*3", ce qui peut être traité de manière plus uniforme avec les autres opérations d'addition.
- Séparation des Termes d'Addition :
Diviser l'expression en termes additionnels avant de la traiter. Cela simplifie le traitement en permettant de gérer 
les opérations d'addition de manière uniforme avant de passer aux opérations de multiplication/division.
Évaluation des Termes :
Une fois les termes additionnels définis, évaluer chaque terme séparément en suivant l'ordre des opérations. 
Cela garantit une évaluation cohérente et précise de l'expression mathématique.*/
function addToDisplay(value: string): void {
    let display: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
    display.value += value;
}

function clearDisplay(): void {
    let display: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
    display.value = '';
}

function calculate() {
    let display : HTMLInputElement = (document.getElementById('display') as HTMLInputElement)
    let result = evaluate(display.value);
    display.value = result.toString();
}


function evaluate(expr: string): number {
    expr = expr.replace('-', '+-');

    let terms = expr.split('+');
    let sum = 0;

    for (let i = 0; i < terms.length; i++) {
        
        let term = terms[i];
        let factors = term.split('*');
        let termResult = 1;

        for (let j = 0; j < factors.length; j++) {

            let factor = factors[j];
            let divisionParts = factor.split('/');

            if (divisionParts.length > 1) {
                let dividend = parseFloat(divisionParts[0]);
                let divisor = parseFloat(divisionParts[1]);
                termResult *= dividend / divisor;
            } 
            else {
                termResult *= parseFloat(factor);
            }
        }

        sum += termResult;
    }

    return sum;
}

function parseFloat(str) {
    let charToDigit = {
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
        '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
    };

    let number = 0;
    let decimalFound = false;
    let decimalFactor = 0.1;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char == '.') {
            decimalFound = true;
        }

        let digit = charToDigit[char];
        if (decimalFound) {
            number += digit * decimalFactor;
            decimalFactor /= 10;
        } else {
            number = number * 10 + digit;
        }
    }

    return number;
}


