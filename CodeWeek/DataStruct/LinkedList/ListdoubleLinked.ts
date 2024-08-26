class DoubleListNode<T> {
    value: T;
    next: DoubleListNode<T> | undefined;
    prev: DoubleListNode<T> | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
    }
}

class DoubleLinkedList<T> {
    head: DoubleListNode<T> | undefined;
    tail: DoubleListNode<T> | undefined; 
    constructor() {
        this.head = undefined;
        this.tail = undefined;
    }

    add(data: T): void {
        let new_node = new DoubleListNode(data);
        if (this.head == undefined) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            new_node.prev = this.tail;
            if (this.tail != undefined) {
                this.tail.next = new_node;
            }
            this.tail = new_node;
        }
    }

    insertAt(data: T, index: number): void {
        if (index < 0) {
            console.log("L'index doit être supérieur ou égal à 0");
            return;
        }
        let new_node = new DoubleListNode(data);
        if (index == 0) {
            if (this.head != undefined) {
                new_node.next = this.head;
                this.head.prev = new_node;
            }
            this.head = new_node;
            if (this.tail == undefined) { 
                this.tail = new_node;
            }
            return;
        }
        let current: DoubleListNode<T> | undefined = this.head;
        for (let i = 0; i < index; i++) {
            if (current == undefined) {
                console.log("L'index est en dehors de la liste");
                return;
            }
            current = current.next;
        }
        new_node.next = current;
        if (current != undefined) {
            new_node.prev = current.prev;
            if (current.prev != undefined) {
                current.prev.next = new_node;
            }
            current.prev = new_node;
        }
    }
    

    removeFrom(index: number): void {
        if (index < 0) {
            console.log("L'index doit être supérieur ou égal à 0");
            return;
        }
        if (this.head == undefined) {
            return;
        }
        if (index == 0) {
            this.head = this.head.next;
            if (this.head != undefined) {
                this.head.prev = undefined;
            }
            if (this.head == undefined) {
                this.tail = undefined;
            }
            return;
        }
        let current: DoubleListNode<T> | undefined = this.head;
        for (let i = 0; i < index; i++) {
            if (current == undefined) {
                console.log("L'index est en dehors de la liste");
                return;
            }
            current = current.next;
        }
        if (current != undefined) {
            if (current.prev != undefined) {
                current.prev.next = current.next;
            }
            if (current.next != undefined) {
                current.next.prev = current.prev;
            }
            if (current == this.tail) {
                this.tail = current.prev;
            }
        }
    }

    display(): string {
        let res: string = '';
        let current: DoubleListNode<T> | undefined = this.head;
        while (current != undefined) {
            res += current.value + (current.next ? ' <-> ' : '');
            current = current.next;
        }
        return res;
    }
}

let linked_list = new DoubleLinkedList<number>();
linked_list.add(1);
linked_list.add(2);
linked_list.add(3);
linked_list.add(4);

console.log(linked_list.display()); // Affiche : 1 2 3 4

linked_list.insertAt(5, 2);
console.log(linked_list.display()); // Affiche : 1 2 5 3 4

linked_list.removeFrom(1);
console.log(linked_list.display()); // Affiche : 1 5 3 4