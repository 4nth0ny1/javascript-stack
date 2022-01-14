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

    // shows the length of the stack
    size(){
        return this.count;
    }
}

const stack = new Stack({}, 0);         // creates an empty stack with a count of zero
stack.push('lord of the rings');        // adds a book to the empty stack
stack.push('the hobbit'); 
stack.push('harry potter'); 
stack.push('dune'); 

console.log(stack.storage);                         // shows the stack in the console
console.log(`COUNT: ${stack.count}`);               // reveals the count of the stack in the console
console.log(`LAST REMOVED: ${stack.pop()}`);        // shows the last removed element from the stack
console.log(stack.storage);                         // shows the stack in the console
console.log(`TOP ELEMENT: ${stack.peek()}`);        // show the top element 
console.log(`STACK SIZE: ${stack.size()}`);         // show the size of the stack