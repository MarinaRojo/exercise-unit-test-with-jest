// import the function sum from the app.js file
const { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One dollar should be 106,58 yen", function(){
    // this is the comparison for the unit test
     expect(fromDollarToYen(2.4)).toBe(255.8);
})


test("One yen should be  dollar", function(){
    // this is the comparison for the unit test
     expect(fromYenToPound(255.8)).toBe(1.6); 
})