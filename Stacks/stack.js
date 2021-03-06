class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.lenght = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.lenght === 0){
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.lenght++;
        return this;
    }
    pop(){
        if(this.lenght === 0){
            console.log("No hay elementos en el stack");
        }
		const holdingPointer = this.top.next;
		delete this.top;
		this.top = holdingPointer;
		this.length--;
        return this;
	}
}

const myStack = new Stack();