/*
Le Problème du Sac à Dos (Knapsack Problem)
Le problème du sac à dos est un cas classique en informatique où l'objectif est de maximiser la valeur 
des objets qu'on peut emporter dans un sac à dos, tout en respectant sa capacité maximale.
Description du Problème :
Vous avez un sac à dos de capacité maximale CC et une liste d'objets. 
Chaque objet a un poids w​ et une valeur v​. 
L'objectif est de déterminer quels objets inclure dans le sac à dos pour maximiser la valeur totale 
des objets tout en respectant la capacité maximale du sac.

Règles du Jeu :

Vous disposez d'une liste d'objets, chaque objet étant caractérisé par un poids et une valeur.
Vous ne pouvez pas diviser les objets, c'est-à-dire qu'ils doivent être pris entièrement ou pas du tout.
L'objectif est de maximiser la valeur totale des objets dans le sac.
Vous devez respecter la capacité maximale du sac à dos, c'est-à-dire que la somme des poids des objets 
inclus dans le sac ne doit pas dépasser la capacité maximale CC.

Ce qui est Attendu :

Implémentez une fonction qui prend une liste d'objets et la capacité maximale du sac à dos en entrée, 
et renvoie la valeur maximale que vous pouvez obtenir en incluant certains des objets dans le sac, 
tout en respectant la capacité maximale du sac à dos.
Utilisez une approche de programmation dynamique pour résoudre le problème du sac à dos.

Exemple :

Supposons que vous ayez les objets suivants avec leurs poids et valeurs respectives :

Objet 1 : Poids = 2, Valeur = 6
Objet 2 : Poids = 2, Valeur = 10
Objet 3 : Poids = 3, Valeur = 12
Si la capacité maximale de votre sac à dos est de 5, 
quelle est la valeur maximale que vous pouvez obtenir en choisissant judicieusement les objets 
à inclure dans le sac ? (Objet 2 + Objet 3)*/

import { Item } from "./Item";

function knapsack(objects: Item[], capacity: number): number {
    let val = new Array(capacity);
    
    for (let i = 0; i <= capacity; i++) {
        val[i] = 0;
    }
    for (let i = 0; i < objects.length; i++) {
        for (let j = capacity; j >= objects[i].weight; j--) {
            val[j] = Math.floor(val[j-objects[i].weight] + objects[i].value);
        }
    }
    return val[capacity];
}

const objects: Item[] = [
    new Item(2,6),
    new Item(2,10),
    new Item(3,12),
];
const capacity = 5;
console.log("La valeur maximale du sac à dos est :", knapsack(objects,capacity));
