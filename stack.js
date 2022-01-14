class Stack {
    constructor(storage, count){
        this.storage = storage;
        this.count = count;
    }

    // adds elemeent to the end/top of the stack 
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }
}