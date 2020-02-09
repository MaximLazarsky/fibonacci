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

function getFibElement(index, callback) {
    res = index < 100 ? getRecFib(index) : getCycleFib(index)
    return callbackFunction()
}

function callbackFunction() {
    console.log(`The ${index} element of Fibonacci sequence is ${res}`)
}

let res
let index
let i = 0

while (i < 20) {
    index = Math.ceil(2 + Math.random() * 198)
    getFibElement(index, callbackFunction())
    i++
}