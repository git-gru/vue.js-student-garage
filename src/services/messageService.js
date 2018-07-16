//import firebase database here
import firebase from '../store/firebase.js';
import Common from './common';
import UserService from './userService.js'
const db = firebase.database;
const messages = db.collection("messages");
const chatrooms = db.collection("chatrooms");


export default class MessageService {

  static createMessage(uid, rid, textMessage) {
    return Object.assign({}, {
      userId: uid,
      receiverId: rid,
      message: textMessage,
      createdDate: new Date().getTime(),
      updatedDate: new Date().getTime()
    });
  }

  static createChatRoom(userId, otherUser){
    let room = {};
    let users = {};
    users[userId] = true;
    usrs[otherUser] = true;
  }

  static addMessage(uid, rid, textMessage, cb) {
    messages.add(this.createMessage(uid, rid, textMessage))
      .then((ref) => cb(Common.constants().SUCCESS, ref))
      .catch((err) => cb(Common.constants().ERROR, err));
  }

  static getMessagesWithUser(cb,otherUserId) {
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

    static getLastMessageOfEachChat(cb)

  static getAllMessagesRealTime(cb) {
    messages.onSnapshot(() => cb());
  }

}
