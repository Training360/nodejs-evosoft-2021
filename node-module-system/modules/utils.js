const even = arr => arr.filter( item => item % 2 === 0 );

const odd = arr => arr.filter( item => item % 2 !== 0 );

const test = 4;

// Default export
// module.exports = even;

// Multiple export
module.exports = {
    even,
    odd
};
