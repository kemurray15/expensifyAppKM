const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
    }, 5000);
});

console.log('before')

promise.then((data) => {
    console.log('1', data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is the promise returned in the then function of the first promise'); 
            //so one client function runs and say it calls server 1.  
            //The then portion runs which is some client code to process the server 1 response
            // and makes an additional callout to server 2 and so it will return another promise
            // so that there can be another then function to process the server 2 response.  Each of the calls
            // to the external servers is made asynchronously, but we have a continous flow of logic here and want
            // our code to reflect that.  Promise chaining does that so that we can see okay this code runs, gets a response
            // then this code runs.
        }, 5000);
    });
}).then((str) => {
    console.log('does this run', str)
}).catch((e) => {
    console.log('error', e)
});

console.log('after')