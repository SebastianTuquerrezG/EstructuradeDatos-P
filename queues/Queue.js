class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.lenght = 0;
    }
    peek(){
        return this.bottom;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.lenght === 0){
            this.bottom = newNode;
            this.top = newNode;
        }
        else{
            this.top.next = newNode;
            this.top = newNode;
        }
        this.lenght++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();