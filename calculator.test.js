const assert = require('assert')
const expect = require('chai').expect
const calc = require('./calculator')
const axios = require('axios')

describe('Testing basic functionality of the calculator' ,() => {

    it('adding simple numbers [1 + 1]', () => {
        // A A A
        const actual = calc.add(1, 1)

        // actual result ==? expected result
        const expected = 2

        assert.strictEqual(expected , actual)
    }),
    it('adding zero number to non-zero [1 + 0]', () => {
        // A A A
        const actual = calc.add(1, 0)

        // actual result ==? expected result
        const expected = 1

        //assert.strictEqual(expected , actual)
        expect(expected).to.equal(actual)
    })
    // it ('multiply 2 numbers')
    // it ('multiply zero with non-zero')
    // it ('div 2 numbers')
    // it ('div zero with non-zero')
    it('adding non-zero number to zero [1 / 0] creates an Error', () => {
        assert.throws(() =>{
            calc.div(3, 0)
        })
        // A A A
    })
})


describe('Async await with axios' ,() => {

    it('adding simple numbers [1 + 1]', async () => {
        // A A A
        const res = await axios.get('http://httpbin.org/get?answer=42');
        //console.log(res.data);
        expect(res.data.args.answer).to.equal('42')
    })
})