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
console.log(findMax([2,5,9,5,3]))
console.log(findMax([2,5,90,9,5,3]))
console.log(findMax([2,5,90,9,5,103]))

