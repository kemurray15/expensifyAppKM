export default (expenses) => (expenses.reduce((acc, currentValue) =>  acc + currentValue.amount, 0) / expenses.length); 
    

    //adding up the array of integers and dividing it by array's length to get the average
//     const amountAverage = amountsArray.reduce((a,b) => a + b, 0) / amountsArray.length
//     console.log(amountAverage)
//     return amountAverage
// })
