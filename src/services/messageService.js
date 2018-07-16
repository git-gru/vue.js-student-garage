//import firebase database here
import firebase from '../store/firebase.js';
import Common from './common';
import UserService from './userService.js'
const db = firebase.database;
const messages = db.collection("messages");
const chatrooms = db.collection("chatrooms");


export default{

  createMessage(uid, rid, textMessage) {
    return Object.assign({}, {
      userId: uid,
      receiverId: rid,
      message: textMessage,
      createdDate: new Date().getTime(),
      updatedDate: new Date().getTime()
    });
  }

  createChatRoom(userId, otherUser){
    let room = {};
    let users = {};
    users[userId] = true;
    usrs[otherUser] = true;
    room.users = users;
    room.messages = [];
    chatrooms.add(room).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
    console.error("Error adding document: ", error);
    });
}

  addMessage(chatId,) {
    let chatRef = chatrooms.doc(chatId);
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
  }

  getMessagesWithUser(cb,otherUserId) {
    let userId = UserService.getCurrentUserId();
    let messages = [];
    return messages.where("userId", "==",userId).where("receiverId", "==",otherUserId).get().then(function(snapshot){
      snapshot.docs.forEach(function(doc){
        messages.push(doc);
      })
      messages.where("userId", "==",otherUserId).where("receiverId", "==",userId).then(function(snapshot){
        snapshot.docs.forEach(function(doc){
          messages.push(doc)
        })
        return messages.sort(function(a,b){
          return new Date(b.createdDate) - new Date(a.createdDate);
        })
      })
    })
  }


  getAllMessagesRealTime(cb) {
    messages.onSnapshot(() => cb());
  }

}
