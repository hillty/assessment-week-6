const {shuffleArray} = require('./utils')

let testArray = [8, 4, 2]

describe('shuffle array tests', () => {
    test('shuffle elements within the array', () => {
        let result = shuffleArray(testArray)
        expect(result[0] && result[1] && result[2]).not.toBe(testArray[0] && testArray[1] && testArray[3])
    })

    test('return an array with the same length',() => {
        let result = shuffleArray(testArray)
        expect(result.length).toEqual(testArray.length)
    })
})