// array = ["Paula","Lizeth","Idrobo"];

// array.push("Juspian");

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }
    myDelete(index){
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }
    shiftIndex(index){
        for (let i = index; i < this.length -1; i++)
            this.data[i] = this.data[i + 1];
        delete this.data[this.length -1];
        this.length--;
    }
    unshift (item){
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
    shift(){
        const firstItem = this.data[0];
        this.shiftIndex(0);
        return firstItem;
    }
}

const myArray = new MyArray();

myArray.push("Paula"); //queda en el 0
myArray.push("Idrobo"); //queda en el espacio 1

myArray.get(1); //nos regresa Idrobo

myArray.pop(); //elimina Idrobo el ultimo elemento del array

myArray.myDelete(0) //elimina paula y queda idrobo en la casilla 0 por el metodo shiftIndex

myArray.unshift("Lizeth") //agrega Lizeth en la posicion cero o al inicio del array

myArray.shift() //elimina lizeth el primer elemento