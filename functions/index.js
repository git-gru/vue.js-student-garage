const functions = require('firebase-functions');
const admin = require('firebase-admin');
const algoliasearch = require('algoliasearch');
const ALGOLIA_APP_ID = "V3M5YXBNG9";
const ALGOLIA_ADMIN_KEY = "e25d99bed2507f720df6ce4441202a32";
let serviceKey = './student-garage-firebase-adminsdk-7c5v6-1bd1893386.json';
let serviceAccount = require(serviceKey);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://student-garage.firebaseio.com"
});

exports.addResourcesToAlgolia = functions.https.onRequest(function(req,res){
  const db = admin.firestore();
  const ALGOLIA_INDEX_NAME = "resources";
  let arrayOfResources = [];
  let titleContains = [];
  const resources = db.collection('education-resources');
  resources.get().then(function(docs){
    docs.forEach(function(doc){
      let resource = doc.data();
      resource.objectID = doc.id;
      if(!titleContains.includes(resource.title)){ // i believe we had duplicate docs in the db
        arrayOfResources.push(resource);
        titleContains.push(resource.title);
      }
    });
    let client = algoliasearch(ALGOLIA_APP_ID,ALGOLIA_ADMIN_KEY);
    let index = client.initIndex(ALGOLIA_INDEX_NAME);
    index.saveObjects(arrayOfResources,function(err,content){
      res.status(200).send(content);
    });
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
