const { sum, modulus, sayHelloTo, duplicateObject, addProduct } = require('./function.js')

test('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(33, 77)).toBe(110)
})

test('should return the absolute value of a number', () => {
    expect(modulus(4)).toBe(4)
    expect(modulus(-5)).toBe(5)
    expect(modulus(-9)).toBeGreaterThanOrEqual(0)
})

test('should say hello to somebody', () => {
    expect(sayHelloTo('Friend')).toMatch(/^Hello, .+\!$/)
})

test('should duplicate an object', () => {
    const animal = { species: 'dog', color: 'brown' }
    const clone = duplicateObject(animal)
    expect(clone).toStrictEqual(animal)
})

test('should add product to cart', () => {
    const cart = []

    addProduct('notebook', cart)
    addProduct('mouse', cart)
    addProduct('monitor', cart)

    expect(cart).toContain('notebook')
    expect(cart).toContain('mouse')
    expect(cart).toContain('monitor')
})


