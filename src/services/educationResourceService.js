//import firebase database here
import firebase from '../store/firebase.js'
import algoliasearch from 'algoliasearch'
const ALGOLIA_APP_ID = "V3M5YXBNG9";
const ALGOLIA_ADMIN_KEY = "e25d99bed2507f720df6ce4441202a32";
const db = firebase.database;
const resources = db.collection('education-resources');
const client = algoliasearch(ALGOLIA_APP_ID,ALGOLIA_ADMIN_KEY,{protocol:'https:'});
const algoliaResourceIndex = client.initIndex("resources");
export default {
  getResources(){
    return resources.get();
  },
  queryResources(query){
  return algoliaResourceIndex.search({
      query:query
    }).then(function(data){
      console.log(data.hits);
      return data.hits;
    })
  }


}
