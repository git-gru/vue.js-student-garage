//import firebase database here
import {store} from '../store/store.js'
import firebase from '../store/firebase.js'
const db = firebase.database;
const projects = db.collection('garage-projects');
const storage = firebase.storage;
const storageRef = storage.ref();

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
  getGarageImageURL(postId, fileName,image) {
    let path = '/images/demo-day/' + postId +'/' + fileName;
    let imageRef = storageRef.child(path)
    return imageRef.put(image).then(snapshot =>{
      return snapshot.ref.getDownloadURL().then(function(downloadURL){
        return downloadURL;
        })
      })
    },
  addDownloadURL(id,url){
    let projectRef = projects.doc(id);
    projects.doc(id).get().then(function(querySnapshot){
      let project = querySnapshot.data();
      let urls = project.imageUrls;
      urls.push(url);
      return projectRef.update({
        imageUrls: urls
      }).then(function() {
        console.log("Document successfully updated!");
        })
        .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        });
    });
  },
  getAllProjects(){
    return projects.get().then(function(querySnapshot){
      return querySnapshot;
    })
  },
  getProject(id){
    return projects.doc(id).get().then(function(snapshot){
      return snapshot.data();
    })
  }
}
