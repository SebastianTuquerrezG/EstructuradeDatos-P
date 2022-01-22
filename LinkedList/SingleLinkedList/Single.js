1 --> 2 --> 3 --> 4 --> 5 --> null

let singleLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
}

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
        this.tail = this.head; //cola apuntada a la cabeza o null

        this.length = 1; //contar cuantos nodos
    }
}

let myLinkedList = new MySinglyListedList(1);