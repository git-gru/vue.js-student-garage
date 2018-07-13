//import firebase database here
import firebase from '../store/firebase.js';
import Common from './common';
const db = firebase.database;
const messages = db.collection("messages");

export default class MessageService {

  static createMessage(uid, rid, textMessage) {
    return Object.assign({}, {
      userId: uid,
      receiverId: rid,
      userScene: 0,
      receiverScene: 0,
      message: textMessage,
      docUrl: null,
      imgUrl: null,
      status: 0,
      deletedStatus: 0,
      createdDate: new Date().getTime(),
      updatedDate: new Date().getTime()
    });
  }

  static addMessage(uid, rid, textMessage, cb) {
    messages.add(this.createMessage(uid, rid, textMessage))
      .then((ref) => cb(Common.constants().SUCCESS, ref))
      .catch((err) => cb(Common.constants().ERROR, err));
  }

  static getMessages(cb) {
    messages.get()
      .then((ref) => cb(Common.constants().SUCCESS, ref))
      .catch((err) => cb(Common.constants().ERROR, err));
  }

  static getAllMessagesRealTime(cb) {
    messages.onSnapshot(() => cb());
  }

}
