// 1 <--> 2 <--> 3 <--> 4 <--> 5 <--> 6 null

// let singleLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//          }
//     }
// }

// class Node {
//     constructor(value){ //generar un nodo
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class MySinglyListedList {
//     constructor(value){ //iniciar con un elemento ya la EDD, le asignamos forzosamente un valor al crearla
//         this.head = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         this.tail = this.head;5
//     }
//     append(value){
//         const newNode = new Node(value);
//         newNode.prev = this.tail;
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
//     preppend(value){
//         const newNode = new Node(value);
//         this.head.prev = newNode;
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++
//         return this;
//     }
//     insert(index, value){
//         if(index >= this.length){
//             return this.append(value);
//         }
//         if (index === 0) {
//             return this.prepend(value);
//         }
//         const newNode = new Node(value);
//         const firstPointer = this.getTheIndex(index-1);
//         const holdingPointer = firstPointer.next;
//         firstPointer.next = newNode;
//         holdingPointer.prev = newNode;
//         newNode.prev = firstPointer;
//         newNode.next = holdingPointer;
//         this.length++;
//         return this;
//     }
//     getTheIndex(index){
//         let counter = 0;
//         let currentNode = this.head;

//         while(counter !== index){
//             currentNode = currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }
//     remove(index) {
//         if (index === 0) {
//             this.head = this.head.next;
//             this.length--;
//             return;
//         }
//         if (index > 0 && index < this.length) {
//             const prevPointer = this.getTheIndex(index - 1);
//             const nextPointer = this.getTheIndex(index + 1);
//             if (prevPointer && nextPointer) {
//                 const pointer = prevPointer.next;
//                 const pointer2 = nextPointer.prev;
//                 if (pointer && pointer2) prevPointer.next = pointer.next; nextPointer.prev = pointer2.prev;
//                     if (pointer === this.tail) this.tail = prevPointer;
//                         this.length--;
//                         return;
//             }
//         }
//         console.log("index out of bounds: " + index);
//     }
// }

// let myLinkedList = new MySinglyListedList(1);

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    searchNode(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insertByIndex(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value);
        }
        const holeToInsert = this.searchNode(index);
        const newNode = new Node(value);
        newNode.next = holeToInsert.next;
        newNode.prev = holeToInsert;
        holeToInsert.next = newNode;
        return this;
    }

    deleteFirst() {
        const nodeToDelete = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return nodeToDelete;
    }

    deleteLast() {
        const nodeToDelete = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return nodeToDelete;
    }

    deleteByIndex(index) {
        if (index >= this.length - 1) {
            return this.deleteLast();
        }
        if (index === 0) {
            return this.deleteFirst();
        }
        const nodeToDelete = this.searchNode(index);
        const previousNode = nodeToDelete.prev;
        const laterNode = nodeToDelete.next;
        laterNode.prev = previousNode;
        previousNode.next = laterNode;
        this.length--;
        return nodeToDelete;
    }
}

let myDoubleList = new DoublyLinkedList(1);