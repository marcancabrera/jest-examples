const cloneArray = require('./cloneArray');

test('properly clones array', () => {
    const array = ['a', 'b', 'c'];
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array);
})

// describe is for define a suite of test(...)