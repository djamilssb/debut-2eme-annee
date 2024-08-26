class ListNode<T> {
    value: T;
    next: ListNode<T> | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}
class LinkedList<T> {
    head: ListNode<T> | undefined;
    constructor() {
        this.head = undefined;
    }
    add(data: T): void {
        let new_node = new ListNode(data);
        if (this.head == undefined) {
            this.head = new_node;
        }
        else {
            let current: ListNode<T> | undefined = this.head;
            while (current.next != undefined) {
                current = current.next;
            }
            current.next = new_node;
        }
    }
    insertAt(data: T, index: number): void {
        if (index < 0) {
            console.log("index doit depasser 0")
            return
        }
        let new_node = new ListNode(data);
        let previous: ListNode<T> | undefined;
        let current: ListNode<T> | undefined = this.head;
        for (let i = 0; i < index; i++) {
            if (current == undefined) {
                console.log("index en dehors de la liste")
                return
            }
            else {
                previous = current;
                current = current.next;
            }
        }
        new_node.next = current;
        if (previous) {
            previous.next = new_node;
        }
    }
    removeFrom(index: number): void {
        let current: ListNode<T> | undefined = this.head;
        let previous: ListNode<T> | undefined = current;
        if (current == undefined) {
            return
        }
        for (let i = 0; i < index; i++) {
            if (current == undefined) {
                console.log("index en dehors de la liste");
                return
            }
            else {
                previous = current;
                current = current.next;
            }
        }
        if (previous != undefined && current != undefined) {
            previous.next = current.next;
        }
    }
    display(): string {
        let res: string = '';
        let current: ListNode<T> | undefined = this.head;
        while (current != undefined) {
            res += current.value + (current.next ? ' -> ' : '');
            current = current.next;
        }
        return res;
    }
}

// let linked_list = new LinkedList<number>();
// linked_list.add(1);
// linked_list.add(2);
// linked_list.add(3);
// linked_list.add(4);

// console.log(linked_list.display()); // Affiche : 1 2 3 4

// linked_list.insertAt(5, 2);
// console.log(linked_list.display()); // Affiche : 1 2 5 3 4

// linked_list.removeFrom(1);
// console.log(linked_list.display()); // Affiche : 1 5 3 4