// this is my function that sums two numbers
const sum = (a,b) =>a + b


// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen=(dollar)=>{
    return (dollar/oneEuroIs["USD"])*oneEuroIs["JPY"];
}


const fromYenToPound=(yen)=>{
    return (yen/oneEuroIs["JPY"])*oneEuroIs["GBP"];
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound };