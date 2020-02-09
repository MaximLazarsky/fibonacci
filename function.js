function getCycleFib(n) {
    let firstNum = 0
    let secondNum = 1
    let res
    for (let i = 1; i < n; i++) {
        res = firstNum + secondNum
        secondNum = firstNum
        firstNum = res
    }
    return res
}

function getRecFib(n, a = 0, b = 1) {
    if (n === 1) return 0
    return n - 2 > 1 ? getRecFib(n - 1, b, b + a) : a + b
}

let callbackFunction = (index, res) => console.log(`The ${index} element of Fibonacci sequence is ${res}`)

function getFibElement(index, callback) {
    let res = index < 100 ? getRecFib(index) : getCycleFib(index)
    callback(index, res)
    return res
}

let i = 0
let myIndex

while (i < 20) {
    myIndex = Math.ceil(2 + Math.random() * 198)
    getFibElement(myIndex, callbackFunction)
    i++
}