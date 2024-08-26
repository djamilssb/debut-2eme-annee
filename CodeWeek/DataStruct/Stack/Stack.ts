/*
Conception d'une Pile en TS

Dans cet exercice, vous explorerez le concept de pile (stack) en concevant une implémentation basique 
d'une pile en TypeScript. C'est une structure de données linéaire qui obéit à la règle du 
"dernier entré, premier sorti" (LIFO - Last In, First Out).

L'objectif de cet exercice est de créer une classe Stack qui représente une pile. 
La pile doit être capable d'effectuer les opérations de base d'une pile, 
- push() pour ajouter un élément au sommet de la pile
- pop() pour supprimer un élément du sommet de la pile
- isEmpty() pour vérifier si la pile est vide
- peek() pour voir l'élément au sommet de la pile sans le supprimer.
*/
class StackNode<T> {
    value: T;
    next: StackNode<T> | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}
class Stack<T> {
    head: StackNode<T> | undefined;
    constructor() {
        this.head = undefined;
    }
    push(value: T): void {
        let new_node = new StackNode(value);
        new_node.next = this.head;
        this.head = new_node;
    }
    pop(): T | undefined {
        if (this.head == undefined) {
            return undefined;
        } 
        else {
            let popped_value = this.head.value;
            this.head = this.head.next;
            return popped_value;
        }
    }
    isEmpty(): boolean {
        return this.head == undefined;
    }
    peek(): T | undefined {
        if (this.head != undefined) {
            return this.head.value;
        } 
        else {
            return undefined
        }
    }
    display(): string {
        let res: string = '';
        let current: StackNode<T> | undefined = this.head;
        while (current != undefined) {
            res += current.value + (current.next ? ', ' : '');
            current = current.next;
        }
        return res;
    }
}

const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after push:");
console.log(stack.display()); // Output: 30, 20, 10

console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack after pop:");
console.log(stack.display()); // Output: 20, 10

console.log("Top element:", stack.peek()); // Output: 20
