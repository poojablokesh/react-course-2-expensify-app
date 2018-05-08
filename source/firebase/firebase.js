import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export{ firebase, googleAuthProvider, database as default };

  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 6000,
  //   createdAt: 1234567098765
  // });

  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 6000,
  //   createdAt: 1234567098765
  // });

  //   database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 6000,
  //   createdAt: 1234567098765
  // });


  // database.ref().on('value',(snapshot) => {
  //   const val=(snapshot.val());
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // });

  // setTimeout(() => {
  //   database.ref('age').set(25);
  // }, 3500);

  //   setTimeout(() => {
  //   database.ref().off();
  // }, 7000);

  //   setTimeout(() => {
  //   database.ref('age').set(30);
  // }, 10500);

  // database.ref()
  // .once('value')
  // .then( (snapshot) => {
  //   const val= snapshot.val();
  //   console.log(val);
  // })
  // .catch((e)=>{
  //   console.log('Error fetching data',e);
  // });


  // database.ref().set({
  // 	name: 'Pooja Lokesh',
  //   age: 25,
  //   isSingle: true,
  //   stressLevel: 3,
  //   job: {
  //     title: 'Software Developer',
  //     company: 'HPE'
  //   },
  //   location: {
  //     city: 'Bangalore',
  //     country: 'India' 
  //   }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('This failed' , e);
  // });
  

  // database.ref().update({
  //     stressLevel: 9,
  //     'job/company': 'Candela Labs',
  //     'location/city': 'Singapore'
  //   });










































  //database.ref().set('This is my data');
  // not working

  // database.ref('age').set(24);
  // database.ref('location/city').set('Mysore');

  // database.ref('attributes').set({
  //   height: 5.4,
  //   weight: 75
  // }).then(() => {
  //   console.log('Second set call worked');
  // }).catch((e) => {
  //   console.log('Things didnt work for the seond call',e );
  // });


  // database.ref()
  // .remove()
  // .then(()=>{
  //   console.log('data was removed!!');
  // }).catch((e) => {
  //   console.log('data was not removed',e);
  // });
