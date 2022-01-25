// 1 --> 2 --> 3 --> 4 --> 5 --> null

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
//         }
//     }
// }

class Node {
    constructor(value){ //generar un nodo
        this.value = value;
        this.next = null;
    }
}

class MySinglyListedList {
    constructor(value){ //iniciar con un elemento ya la EDD, le asignamos forzosamente un valor al crearla
        this.head = {
            value: value,
            next: null, //el null ya genera un nuevo nodo
        }
        //tail y head apuntan a la misma direccion de memoria
		// y si cambia UNA PROPIEDAD de uno, cambiará en el otro
        this.tail = this.head; //cola apuntada a la cabeza o null
        this.length = 1; //contar cuantos nodos
    }
    //insertar al final
	//Esto funciona ya que en el contructor hay una referencia
	//cambiamos UNA PROPIEDAD del tail entonces también cambia en el head
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        /*
		Entonces ahora tail y ese nodo que se agregó
		el next del head es el next de ese nodo que se agregó
		Ambos next estan referenciados, COMO AL INICIO
		entonces cuando creemos otro nodo simplemente se repetirá el proceso
		*/
        return this;
    }
    preppend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        if (index === 0) {
        return this.prepend(value);
}
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index-1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        if (index > 0 && index < this.length) {
            const prevPointer = this.get(index - 1);
            if (prevPointer) {
                const pointer = prevPointer.next;
                if (pointer) prevPointer.next = pointer.next;
                    if (pointer === this.tail) this.tail = prevPointer;
                        this.length--;
                        return;
            }
        }
        console.log("index out of bounds: " + index);
    }
}

let myLinkedList = new MySinglyListedList(1);