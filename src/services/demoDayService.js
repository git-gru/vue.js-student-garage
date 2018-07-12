//import firebase database here
import {store} from '../store/store.js'
import firebase from '../store/firebase.js'
const db = firebase.database;
const projects = db.collection('demo-day');
export default {
  postProject(project){
    return projects.add(project)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  },
  addPhoto(postId, name, src) {
    return axios.post(`api/posts/${postId}/images`, {
      name,
      src
    }).then((response) => {
      return Promise.resolve(response.data)
    })
  }


}
