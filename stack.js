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

    // removes end/top element from the stack
    pop() {
        if (this.count === 0){
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // shows the end/top element from the stack
    peek(){
        return this.storage[this.count - 1];
    }
}