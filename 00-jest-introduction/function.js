sum = (a, b) => {
    return a + b
}
modulus = (x) => {
    return x < 0 ? -x : x
}
sayHelloTo = (name) => {
    return `Hello, ${name}!`
}
duplicateObject = (obj) => {
    return { ...obj }
}
addProduct = (product, cart) => {
    cart.push(product)
}

module.exports = { sum, modulus, sayHelloTo, duplicateObject, addProduct }