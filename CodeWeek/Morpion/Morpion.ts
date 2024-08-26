
/*

Le but de l'exercice est de gérer une partie de Morpion.
Chaque fois qu'un coup est joué, la function input recevra un appel que vous pourrez traiter pour faire
avancer la partie. Le but est d'être capable de détecter une victoire et utiliser la fonction display_win()
lorsqu'il y en a une.

Dans un second temps, l'objectif est d'implémenter une IA qui jouera un coup sur deux en essayant de calculer
les meilleurs coups selon l'état de la partie (coup gagnant, bloquer, chercher à obtenir le milieu...)
*/

enum Symbols {
    EMPTY,
    CROSS,
    CIRCLE
}

let grid : number[][] = [
    [Symbols.EMPTY,Symbols.EMPTY,Symbols.EMPTY],
    [Symbols.EMPTY,Symbols.EMPTY,Symbols.EMPTY],
    [Symbols.EMPTY,Symbols.EMPTY,Symbols.EMPTY]
]


function input(pos_i:number,pos_j:number){
    update_grid(grid)
    if (grid[pos_i][pos_j]==Symbols.EMPTY){
        grid[pos_i][pos_j] = Symbols.CROSS || Symbols.CIRCLE;
        if (victory(Symbols.CROSS))
    }

}

update_grid(grid);