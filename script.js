// Finding the maximum value in an array

// ex. [3,5,6,2,8,4,8] -> 8, [3] -> 3, [] -> false

function findMax(arr) {
    // check length
    const len = arr.length
    
    // if empty return false
    if (len === 0) {
        return false
    }
    
    // if 1 return the 1
    if (len === 1) {
        return arr[0]
    }

    // set initial max to 0 index
    let max = arr[0]

    // loop through array starting at 1st index
    for(let i = 1; i < len; i++) {
        console.log('loop')
        // if current index is greater then max
        if (arr[i] > max) {
            // set max to current index
            max = arr[i]
        }   
        // continue loop
    }
    return max
    // return max
}

// console.log(findMax([]))
// console.log(findMax([2]))
// console.log(findMax([2,5,9,5,3]))
// console.log(findMax([2,5,90,9,5,3]))
// console.log(findMax([2,5,90,9,5,103]))

// time complexity - linear (O(n))

// -----------------------------------------------------------------------------------------

// Given a document, implement an algorithm to count the number of word occurrences.

// Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

// Input: `"Hello"`
// Output: `Hello = 1`

// Input: `""`
// Output: `false

function wordCount(str) {
    // check empty string
    if (str.length === 0) {
        return false
    }

    // remove extra characters 
    // split into array
    const strArr = str.replace(/,/g,'').replace(/\?/g,'').toLowerCase().split(' ')

    // declare object
    const obj = {}

    // loop over array
    for (i = 0; i < strArr.length; i++) {
        // check if word is in object
        if(!(strArr[i] in obj)) {
            // if not add word
            obj[strArr[i]] = 1
        } else {
            // if it is add one to count
            obj[strArr[i]]++
        }
    }

    // declare word string
    let wordStr = ''
    // loop over object and format
    for (const word in obj) {
        wordStr += `${word} = ${obj[word]}, `
    }

    // return string
    return wordStr


}

// const str = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
// console.log(wordCount(str))
// console.log(wordCount("Hello, hello, hello"))
// console.log(wordCount(''))


// time complexity - linear (O(n))



// ------------------------------------------------------------------


class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
            tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    insertBefore(item, value) {
        let currNode = this.head;
        let prevNode;
        while(currNode.value !== item) {
            prevNode = currNode
            currNode = currNode.next
        }
        let newNode = new _Node(value, currNode)
        prevNode.next = newNode
    }
    insertAfter(item, value) {
        let currNode = this.head;
        let nextNode = currNode.next;
        while(currNode.value !== item) {
            currNode = currNode.next
            nextNode = currNode.next.next
        }
        let newNode = new _Node(value, nextNode)
        currNode.next = newNode
    }
    insertAt(value, pos) {
        let currNode = this.head;
        let prevNode;
        let currPos = 1
        while(currPos !== pos) {
            prevNode = currNode
            currNode = currNode.next
            currPos++
        }
        let newNode = new _Node(value, currNode)
        prevNode.next = newNode

    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
                and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;
        
        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    let SLL = new LinkedList();
    SLL.insertLast(1)
    SLL.insertLast(2)
    SLL.insertLast(4)
    SLL.insertLast(5)
    SLL.insertLast(5)
    SLL.insertLast(6)
    SLL.insertLast(7)
    return SLL;
}

let SLL = main()

// console.log(SLL)


// Given a sorted linked list, write an algorithm to 
// delete all duplicate numbers from the sorted linked list.

// examples

// 1,2,3,4,5,5,6 -> 1,2,3,4,5,6
// 1 -> 1

function deleteDupes(list) {
    // check if the linked list has only one node, if yes return the list
    if (list.head.next === null) {
        return list
    }

    // set current node and next node variables
    let currNode = list.head;
    let nextNode = list.head.next;
    
    // loop through linked list
    while(currNode !== null) {
        console.log('current node ' + currNode.value + ' and next node ' + nextNode.value )

        // while current node equals next node
        if ( currNode === nextNode) {

            // next node equals next next node
        }
    
        // once current node does not equal next node set current nodes pointer to the following note

        currNode = currNode.next
        nextNode = nextNode.next
    }



    // return list

}

// console.log(deleteDupes(SLL))




// --------------------------------------------------------------------------------------------------------------

// develop an algorithm to find the fibonacci series of a given number

// 6 -> 0,1,1,2,3,5,8
// 10 -> 0,1,1,2,3,5,8,13,21,34,55
// 1 -> 0,1
// 0 -> 0

function fibSeries(x) {
    if (x === 0) {
        return [0]
    }
    // declare [0,1] array
    const arr = [0,1]

    // loop x times
    for(let i = 0; i < x - 1; i++ ) {

        // add previous 2 indexes and push into array
        // const num = arr[0 + i] + arr[1 + i]
        arr.push(arr[0 + i] + arr[1 + i])
    }
    // return array
    return arr
}

// console.log(fibSeries(5))
// console.log(fibSeries(6))
// console.log(fibSeries(10))
// console.log(fibSeries(0))


// time complexity - linear (O(n)) more efficient


// --------------------------------------------------------------------------------------------------------------


class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        // If the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
        else if (key < this.key) {
            /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
            else {
                this.left.insert(key, value);
            }
        }
        // Similarly, if the new key is greater than the node's key 
        //    then you do the same thing, but on the right-hand side */
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
    find(key) {
        // If the item is found at the root then return that value
        if (this.key == key) {
            return this.value;
        }
        /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        /* If the item you are looking for is greater than the root 
           then follow the right child.
           If there is an existing right child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        // You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }
    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            /* If the node only has a left child, 
               then you replace the node with its left child */
            else if (this.left) {
                this._replaceWith(this.left);
            }
            /* And similarly if the node only has a right child 
               then you replace it with its right child */
            else if (this.right) {
                this._replaceWith(this.right);
            }
            /* If the node has no children then
               simply remove it and any references to it 
               by calling "this._replaceWith(null)" */
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

const BST = new BinarySearchTree();

const arr = [3,1,4,6,9,2,5,7,10]
// const arr = ['E','A','S','Y','Q','U','E','S','T','I','O','N']

for (let i = 0; i < arr.length; i++) {
    BST.insert(arr[i])
}

// BST.remove(3)

// console.log(BST)

function findHeight(node) {
    if (!node) {
      return 0;
    } else {
      return Math.max(findHeight(node.left), findHeight(node.right)) + 1;
    }
  }

// console.log(findHeight(BST))

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

// console.log(tree(BST))


// --------------------------------------------------------------------------------------------------------------



// write an algorithm that takes an alphanumeric phone number and returns its acutal phone number.
// You can ignore spaces and punctuaion

// 1-800-Flowers  -->  1-800-3569377
// 1-800-45-MACYS  -->  1-800-45-6883


function alpha(str) {
    const digits = "22233344455566677778889999"
    const alphas = "abcdefghijklmnopqrstuvwxyz"
    const lower = str.toLowerCase()
    const arr = []
    // loop over string
    for(let i = 0; i < lower.length; i++) {
        // check if char is alpha
        if (lower[i].match(/[a-z]/i)) {
            const n = alphas.indexOf(lower[i])
            arr.push(digits[n])
        } else {
            arr.push(lower[i])
        }
    }
    return arr.join('')
}

console.log(alpha('1-800-Flowers'))
console.log(alpha('1-800-Flasda-123'))

