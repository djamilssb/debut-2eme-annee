/*

Résolution de Cryptarithmes


Les cryptarithmes, également connus sous le nom d'arithmogriphes, sont des énigmes mathématiques dans lesquelles les chiffres 
d'un calcul arithmétique standard sont remplacés par des lettres. 
L'objectif est de remplacer chaque lettre par un chiffre unique de telle manière que l'équation soit correcte.


Votre programme devra prendre une équation arithmétique sous la forme d'une chaîne de caractères et 
renvoyer les valeurs correspondantes pour chaque lettre.

Exemple :

Considérons l'équation suivante :

Copy code
SEND + MORE = MONEY
Dans cette équation, chaque lettre représente un chiffre unique. 
Par exemple, 

"S" peut représenter 9, 
"E" : 5, 
"N" : 6, 
"D" : 7, 
"M" : 1, 
"O" : 0, 
"R" : 8, 
et "Y" peut représenter 2. 

Avec ces valeurs attribuées, l'équation devient 9567 + 1085 = 10652, ce qui est une équation mathématiquement valide.

Attentes :
Votre programme doit pouvoir résoudre des équations similaires, en attribuant des chiffres uniques à chaque lettre 
de telle manière que l'équation soit correcte. Si une solution existe, le programme devrait renvoyer un dictionnaire 
où chaque lettre est associée à sa valeur numérique correspondante. 
Sinon, il devrait renvoyer "undefined" pour indiquer qu'aucune solution n'a été trouvée.

Contraintes :

-Chaque lettre doit être remplacée par un chiffre unique de 0 à 9.
-Aucun chiffre ne peut commencer par zéro, sauf s'il s'agit du seul chiffre dans le mot.
-La solution doit être générée de manière à minimiser la valeur des chiffres

*/


function solveCryptarithm(cryptarithm: string): { [key: string]: number } | undefined {
    return undefined;
}

// Exemples d'utilisation :
console.log(solveCryptarithm('SEND + MORE = MONEY')); // { S: 9, E: 5, N: 6, D: 7, M: 1, O: 0, R: 8, Y: 2 } (9567 + 1085 = 10652)
console.log(solveCryptarithm('HUIT + HUIT = SEIZE')); // { H: 8, U: 2, I: 5, T: 3, S: 1, E: 6, Z: 0 } (8253 + 8253 = 16506)
