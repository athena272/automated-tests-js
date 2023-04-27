const { sum } = require('./function.js')

test('sumTest', () => {
    const result = sum(1, 2)

    expect(result).toBe(3)
})