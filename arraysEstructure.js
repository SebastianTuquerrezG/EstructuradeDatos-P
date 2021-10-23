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
}

const myArray = new MyArray();

myArray.push("Paula"); //queda en el 0
myArray.push("Idrobo"); //queda en el espacio 1

myArray.get(1); //nos regresa Idrobo

myArray.pop(); //elimina Idrobo