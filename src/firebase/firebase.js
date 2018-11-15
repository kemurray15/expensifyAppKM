import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)

const database = firebase.database();

export { firebase, database as default }; 

// // database.ref('expenses').push({
// //     description: 'bagel',
// //     note: 'everything',
// //     amount: 300,
// //     createdAt: 0
// // });



// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

//     //database.ref().on('value', (snapshot) => {
//         // //     console.log(snapshot.val())
//         // // 


// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').push({
//     description: 'bagel',
//     note: 'everything',
//     amount: 300,
//     createdAt: 0
// });


// // database.ref('notes/-LRDJuU5o1cEnII_MkoE').update({
// //     title: 'test note 3 became 5',
// //     body: 'notes notes 3 became 5'
// // });

// // const notes = [{
// //     id: '12',
// //     title: 'first note',
// //     body: 'test'
// // }, {
// //     id: '761ase',
// //     title: 'another note',
// //     body: 'test2'
// // }];

// // database.ref('notes').set(notes);



// // //database.ref().child('isSingle').remove()

// // // database.ref().on('value', (snapshot) => {
// // //     console.log(snapshot.val())
// // // });

// // // setTimeout(() => {
// // //     database.ref('age').set(29)
// // // }, 3500);

// // // setTimeout(() => {
// // //     database.ref().off();
// // // }, 7000);

// // // setTimeout(() => {
// // //     database.ref('age').set(31)
// // // }, 10500);

// // // database.ref()
// // //     .once('value')
// // //     .then((snapshot) => {
// // //         const val = snapshot.val();
// // //         console.log(val)
// // //     })
// // //     .catch((e) => {
// // //         console.log('error', e)
// // //     });

// // database.ref().set({
// //     name: 'Kevin Murray',
// //     age: 33,
// //     stressLevel: 6,
// //     job: {
// //         title: 'software developer',
// //         company: 'SiteTracker'
// //     },
// //     location: {
// //         city: 'verona',
// //         state: 'new jersey'
// //     }
// // }).then(() => {
// //     console.log('Data was saved')
// // }).catch((e) => {
// //     console.log('there was an error.', e)
// // })
  
// // // database.ref().update({
// // //     stressLevel: 6,
// // //     'job/company': 'Pie Store',
// // //     'location/city': 'montclair'
// // // })

// // // // database.ref('age').set(34)
// // // // database.ref('location/city').set('Montclair')
// // // database.ref('attributes').set({
// // //     height: '6 feet',
// // //     weight: '175 pounds'
// // // }).then(() => {
// // //     console.log('The data was saved')
// // // }).catch((e) => {
// // //     console.log('There was an error', e)
// // // })

  

// // // console.log('I made a database request')

// // //setup data subscription 'Kevin is a baker at the pie store'

// // //then change the data and make sure it reprints

// // database.ref().on('value', (snapshot) => {
// //     const data = snapshot.val();
// //     console.log(`${data.name} is a ${data.job.title} at the ${data.job.company}`);
// // })

// // setTimeout(() => {
// //     database.ref().update({
// //         name: 'Bill Jones',
// //         'job/title': 'developer',
// //         'job/company': 'SiteTracker'
// //     });
// // }, 3500);
