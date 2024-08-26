function replace_x(expr: string, value: number): string {
    let result = "";
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == "x") {
            result += value;
        }
        else {
            result += expr[i];
        }
    }
    return result;
}
function split_equation(expr: string): string[] {
  return expr.split("=");
}
function solve_equation(expr: string): number {
  const parts = expr.split('=');
  const leftPart = parts[0];
  const rightPart = parts[1];

  for (let x = 0; x <= 9; x++) {
      let leftReplaced = replace_x(leftPart, x);
      let rightReplaced = replace_x(rightPart, x);

      if ((leftReplaced[0] == '0') || (rightReplaced[0] == '0')) {
        continue ;
      } 
      let leftValue = eval(leftReplaced);
      let rightValue = eval(rightReplaced);

      if (leftValue == rightValue) {
          return x;
      }
  }
  return -1;
}
console.log(solve_equation("1+1=x")) // 2
console.log(solve_equation("123*45x=5x088")) // 6
console.log(solve_equation("-5x*-1=5x")) // 0
console.log(solve_equation("19-45=5x")) // -1
console.log(solve_equation("xx*xx=302x")) // 5
console.log(solve_equation("x*11=xx")) // 1
console.log(solve_equation("xx*1=xx")) // 1

/*

1-creer une fonction replace_x qui remplace  ‘x’ dans une chaîne de caractères par une valeur. 
la fonction construit une nouvelle chaîne en parcourant l’originale et en remplaçant ‘x’ par la valeur spécifiée.

2-cette fonction split_equation retournera un tableau contenant la partie gauche de avant le signe '=' , 
et la partie droite après le '='.

3-la fonction solve_equation divise l’expr en 2 avec parts ( ex.: parts[0]=("1+1") parts[1]=("x") )
si l’une des parties de l’équation commence par un zéro après le remplacement , le x est ignoré et on continue.
la fonction eval calcule les valeurs deleftReplaced et rightReplaced avec la valeur de x. 

*/