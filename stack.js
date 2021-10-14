class Stack {
    constructor(){
        this.state = []
        this.count = 0
    }

    // Add element to top of stack 
    push(data){
        this.state[this.count] = data
        console.log(`${data} added to ${this.count}`)
        this.count += 1
        return this.count -1    
    }


// Return and remove top element in the stack
// Return undefined if stack is empty
pop(){
if(this.count == 0) return undefined
let deleteItem = this.state[this.count -1]
this.count -= 1
console.log(`${deleteItem} removed`)
return deleteItem

    }


// Check top element in stack
peek() {
    console.log(`Top element is ${this.state[this.count -1]}`)
    return this.state[this.count -1]
    }

// Check if the stack is empty
isEmpty() {
    console.log(this.count == 0 ? 'Stack is empty' : 'Stack is Not empty')
    return this.count == 0
}

// Check size of stack
size(){
    console.log(`${this.count} elements in stack`)
    return this.count
}

// Print elements in stack
print(){
    let str = ''
    for (let i = 0; i < this.count; i++) {
        str += this.state[i] + ' '
    }
        return str
    }

// Clear stack
clear(){
    this.state = []
    this.count = 0
    console.log('Stack cleared..')
    return this.state
}

}

const stack = new Stack()

// adding data to the top of the stack data struture 
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)
stack.push(600)

// To print all of the elements in the stack 
console.log(stack.print())

// removing the last data element entered stored at the top of the stack
stack.pop()
stack.pop()

// Clear the stack
stack.clear()

console.log(stack.print())

// console.log(stack.pop())

// checking to see which is the top element in the stack
stack.peek()

// Checking to see if the stack is empty
stack.isEmpty()

// Checks to see the how many elements are in the stack
stack.size()
