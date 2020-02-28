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

let SLL = new LinkedList();

const vals = [4,5,6,4,5,6,6]

for (let i = 0; i < vals.length; i++) {
    SLL.insertLast(vals[i])
}

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
    while(nextNode) {
        // console.log('current node ' + currNode.value + ' and next node ' + nextNode.value )
        console.log(currNode.value);

        // while current node equals next node
        while ( currNode.value === nextNode.value ) {
            currNode.next = nextNode.next
            // next node equals next next node
            nextNode = nextNode.next
        } 
        // once current node does not equal next node set current nodes pointer to the following note

        currNode = currNode.next
        nextNode = nextNode.next
    
    }
    console.log(list)
    return list
}

// deleteDupes(SLL)

// time complexity - Exponential time O(2^n)

// UNSORTED --------------

// examples

// 1,2,3,4,5,5,6 -> 1,2,3,4,5,6
// 1 -> 1

function deleteDupes(list) {
    // check if the linked list has only one node, if yes return the list
    if (list.head.next === null) {
        return list
    }

    // set current node 
    let currNode = list.head
    
    // loop through linked list
    while(currNode) {

        // set next node to current.next
        let nextNode = currNode.next


        // loop through remaining list
        while(nextNode) {
            // check if curr === next
            if(currNode.value === nextNode.value) {
                // if yes current.next === nextNode.next && nextnode === current.next
                currNode.next = nextNode.next
                nextNode = currNode.next
            } else {
                // else nextnode === nextnode.next
                nextNode = nextNode.next
            }
        }

        // currNode to curr.next
        currNode = currNode.next
    }
    console.log(list)
    // return list
}

// deleteDupes(SLL)

// time complexity - Exponential time O(2^n)

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

// console.log(alpha('1-800-Flowers'))
// console.log(alpha('1-800-Flasda-123'))

// time complexity - linear (O(n)) more efficient


// --------------------------------------------------------------------------------------------------------------


// You are given a dataset containing positive and negative integers. Write an algorithm to find the largest sum in a continuous sequence.

// [|3,8,3,-9,-4,2,1,5|] -> 14
// [-9,|3,3,-4,2,1,5|,-4] -> 10
// [-3,3,-4,|5,5,-2,2|,-1,-2] -> 10
// [|1,1,1,1,1|] -> 5
// [1] -> 1
// [1,1] -> 2

function largestSum(arr) {
    // set over all max
    let max = 0

    // outer loop starting at i 
    for (let i = 0; i < arr.length; i++ ) {
        // set temp max
        let tempMax = arr[i]

        // loop again at i + 1
        for (let j = i+1; j < arr.length; j++) {
            
            // temp max plus i
            tempMax = tempMax + arr[j]
            
            // check if temp max is greater then max
            if (tempMax > max) {
                // max equal temp max
                max = tempMax
            }
        }
    }
    console.log(max) 
}

// largestSum([3,8,3,-9,-4,2,1,5])
// largestSum([-9,3,3,-4,2,1,5,-4])
// largestSum([1,1,1,1,1])
// largestSum([-3,3,-4,5,5,-2,2,-1,-2])

// time complexity - Exponential time O(2^n)

// --------------------------------------------------------------------------------------------------------------


// Given a string, write an algorithm to count the number of words in the string that are palindromes. 
// The output must include a list of the palindromes and the number of palindromes.

// "mom gave mom a Tesla as a racecar" -> `Dad, mom, racecar, 3 Palindromes`
// 'racecar' -> 'racecar, 1 Palindromes'
// 'steve is cool' -> '0 Palindromes'

function pal(str) {
    // declare palindrome count
    let pals = 0

    // declare empty palindrome array
    const arr = []
    
    const strArr = str.split(' ')
    console.log(strArr)
    // loop over words
    for (let i = 0; i < strArr.length; i++) {

        // check word if palindrome

        if (strArr[i].length > 1) {

            
            const first = strArr[i].slice(0, strArr[i].length / 2 ) 
            const second = strArr[i].slice(Math.ceil(strArr[i].length / 2) , strArr[i].length).split('').reverse().join('')
            console.log(first)
            console.log(second)
            
            // if yes, push to palindrome array and increase count
            if (first === second) {
                arr.push(strArr[i])
                pals++
            }
            
        }
        

    }

    arr.push(`${pals} Palindromes`)
    console.log(arr.join(', '))

    // return palindromes and count
}

// pal("mom gave mom a Tesla as a racecar")
// pal('rawar')



// --------------------------------------------------------------------------------------------



//Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. 
// If no number in the list is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

// - Input: `1`
// - Output: `Mode = 1, Frequency of mode = 1`

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`


function mode(str) {
    // mode object variable
    const nums = []

    // string to array
    const arr = str.split(',')
    // console.log(arr)
    // loop over array
    for (let i = 0; i < arr.length ; i++) {
        // let num = arr[i]
        console.log(arr[i])
        // check if object contains number
        if(nums[arr[i]]) {
            // if yes add to count
            // nums[arr[i]]++
            // nums[arr[i]] = parseInt(nums[arr[i]]) + 1
            console.log(arr[i], nums[arr[i]])
            console.log('yes')
        } else {
            // if no add number
            const num = {[arr[i]]:1}
            nums.push(num)
            console.log('no')
        }
        
    }



    console.log(nums)
    // find most frequent number
    for (let i = 0; i < nums.length; i++) {
        // console.log(max)

    }
    // return it 

    // console.log(`Mode = ${max}, Frequency of mode = ${max}`)
    // return `Mode = ${max}, Frequency of mode = ${max}`
}

mode(`1,2,3,6,10,3,5,6,3,3`)