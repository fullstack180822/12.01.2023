
const add = (num1, num2) => {
    // add-on
    if (num1 == 0 || num2 == 0) {
        return 
    }
    
    return num1 + num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

module.exports = {
    add, sub
}