//* Non-primitive data types

// array, object
let arr: string[] = ["anime", "thriller", "action"]

arr.push("1")
// arr.push(12) //Not allowed

let mixedArr: (string | number)[] = ["user123", 123, "user456", 456]
mixedArr.push(1111) // allowed

// Tuple
let tuple: [number, number] = [1,2]

//Tuple with three elements
let tupleThreeElements: [string, number, number] = ["user123", 1,2]
// tupleThreeElements[0] = 1 // Not allowed
// tupleThreeElements[1] = "user123" // Not allowed

