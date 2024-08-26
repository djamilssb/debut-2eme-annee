class QueueNode<T> {
    value: T;
    next: QueueNode<T> | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
    }
class Queue<T> {
    front: QueueNode<T> | undefined;
    rear: QueueNode<T> | undefined;
    constructor() {
        this.front = undefined;
        this.rear = undefined;
    }
    enqueue(value: T): void {
        let new_node = new QueueNode(value);
        if (this.rear == undefined){
            this.front = new_node;
            this.rear = new_node
        }
        else {
            this.rear.next = new_node
            this.rear = new_node
        }
    }
    dequeue(): T | undefined {
        if (this.front == undefined){
            return undefined;
        }
        let element_supp = this.front.value
        this.front = this.front.next
        return element_supp
    }
    isEmpty(): boolean {
        return this.front == undefined;
    }
    peek(): T | undefined {
        if (this.front != undefined) {
            return this.front.value;
        }
        else {
            return undefined
        }
    }
    display(): string {
        let res: string = "";
        let current:QueueNode<T> | undefined = this.front;
        while (current!= undefined) {
            res += current.value + (current.next ? ', ' : '')
            current = current.next;
        }
        return res;
    }
}

const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueue:");
console.log(queue.display()); // Output: 10, 20, 30

console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Queue after dequeue:");
console.log(queue.display()); // Output: 20, 30

console.log("Front element:", queue.peek()); // Output: 20
