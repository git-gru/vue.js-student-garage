<template>
  <div>
    <div class="chat_list left-margin right-margin">
      <div class = "text-center">
      Your Chat With {{otherUser.first_name}}
    </div>
    <ul class="list-group top-margin">
        <li v-for="message in messages" v-bind:class="{'to-the-right': isMe(message), 'light-blue': isMe(message)}" class="list-group-item bordered w-75 rounded top-margin-1">
          <div>
            <div class="pull-left hidden-xs">
                <div>
                    <img class="avatar avatar-lg" :src="messageUserSrc(message)" alt="avatar">
                </div>
            </div>
            <small class="pull-right right-margin-time text-muted" v-bind:class="{'white-text': isMe(message)}">{{getDate(message.createdDate)}}</small>
            <div class="left-margin">
                <small class="list-group-item-heading text-muted text-primary left-margin-shrunk" v-bind:class="{'white-text': isMe(message), 'bold': isMe(message)}">{{messageUserName(message)}}</small>
                <p class="list-group-item-text left-margin" v-bind:class="{'white-text': isMe(message)}">
                    {{message.message}}
                </p>
            </div>
          </div>
        </li>
      </ul>
      <form class="form-horizontal top-margin" autocomplete="off">
      <fieldset>
        <div class="form-group input-group">
                  <input type="text" class="form-control" placeholder="Send a message" v-model="message">
                  <div class="input-group-append ml-4">
                    <button class="btn btn-success" type="button" @click="onSubmit">Send</button>
                  </div>
        </div>
      </fieldset>
    </form>
    </div>

  </div>

</template>


<script>
import MessageService from "../../services/messageService.js";
import UserService from "../../services/userService.js";
import common from '../../services/common.js';
export default {
  name: 'Messages',
  data () {
    return {
      userId:"",
      receiverId: "",
      messages: [],
      message: "",
      chatId: "",
      otherUser:{},
      curUser:{}
    }
  },
  mounted(){
    this.userId = UserService.getCurrentUserId();
    this.receiverId = this.$route.params.id;
    this.getOtherUser(this.receiverId);
    this.getMessages();
  },
  methods: {
    isMe(message){
      let curUserId = UserService.getCurrentUserId();
      return curUserId == message.userId;
    },
    finalizeSend(chatId,userId,receiverId,message){
      let self = this;
      MessageService.sendMessage(chatId,userId,receiverId,message).then(function(result){
        self.getMessages();
      });
    },
    sendMessage(message){
      let self = this;
      if(this.message && this.message.length != 0){
        if(self.chatId == "" || !self.chatId){
          MessageService.createChatRoom(this.userId,this.receiverId).then(function(id){
            self.chatId = id;
            self.finalizeSend(id,self.userId,self.receiverId,self.message);
          });
        } else{
          self.finalizeSend(self.chatId,self.userId,self.receiverId,self.message)
        }
        this.message ="";
      }
    },
    getMessages(){
      let self = this;
      MessageService.getMessgesWithUser(this.userId,this.receiverId).then(function(result){
        self.messages = result.messages.sort(function(a,b){
          return a.createdDate - b.createdDate;
        });
        self.chatId = result.chatId;
      });
    },
    onSubmit(e){
      this.sendMessage();
      this.sendTwilioMessage();
    },
    getCurUser(){
      let curUserId = UserService.getCurrentUserId();
      let self = this;
      UserService.getUserProfileStatus(curUserId).then(function(user){
        if(user.isStudent){
          UserService.getUserIsStudent(curUserId).then(function(student){
            self.curUser= student;
          });
        } else if(user.isInvestor){
          UserService.getUserIsStudent(curUserId).then(function(investor){
            self.curUser = investor;
            });
          }
      })
    },
    getOtherUser(otherUserId){
      let self = this;
      UserService.getUserProfileStatus(otherUserId).then(function(user){
        if(user.isStudent){
          UserService.getUserIsStudent(otherUserId).then(function(student){
            self.otherUser= student;
          });
        } else if(user.isInvestor){
          UserService.getUserIsStudent(otherUserId).then(function(investor){
            self.otherUser = investor;
            });
          }
      })
    },
    messageUserName(message){
      let curUserId = UserService.getCurrentUserId();
      if(curUserId == this.curUser.userId) return this.curUser.first_name;
      return this.otherUser.first_name;
    },
    messageUserSrc(message){
      let curUserId = UserService.getCurrentUserId();
      if(curUserId == this.curUser.userId) return this.curUser.profile_img_add;
      return this.otherUser.profile_img_add;
    },
    getDate(milliseconds){
      let result = "";
      let date = new Date(milliseconds);
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      result = result + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
      return result;
    },
    sendTwilioMessage(){
      MessageService.notifyUser(this.otherUser.phone_number,this.otherUser);
    }
  }
}
</script>


<style scoped>
.bold{
  font-weight: bold;
}
.bordered{
  border-style: solid;
  border-color: black;
}
.chat_list .list-group-item {
    padding: 5px 4px;
    min-height: 50px;
}
@media (max-width: 768px) {
    .chat_list .list-group-item {
        min-height: inherit;
    }
}
.chat_list .list-group-item-text {
    word-wrap: break-word;
    display: flex;
    overflow: auto;
}
.chat_list .pull-left {
    width: 55px;
    text-align: center;
}
.comment {
  width: 80%;
}

.flex-content{
  display: flex;
  justify-content: center;
}

.flex-row{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.img-restricted{
  height: 200px;
  width: 200px;
}
.light-blue {
  background-color: #50a1ff !important;
  color: white !important;
}
.left-margin{
  margin-left: 5%;
}
.left-margin-shrunk{
  margin-left: 2.5%;
}
.margin-top{
  margin-top: 5%;
}
.message-margin{
  margin-top: 1%;
}
.no-left-margin{
  margin-left: 0 !important;
}

.no-left-padding{
  padding-left: 0 !important;
}

@media (max-width:400px){
  .center-mobile{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.read-more{
  background-color: white;
  /* primary */
  color:#50a1ff;
}
.right-margin{
  margin-right: 5%;
}

.right-margin-time{
  margin-right: 5%;
}
.rounded{
  border-radius: 40px !important;
  border-color: #50a1ff !important;
}
.to-the-right{
  float: right;
  margin-left: auto !important;
  margin-right: 0 !important;
}
.top-margin{
  margin-top: 2.5%;
}
.top-margin-1{
  margin-top: 1%;
}
.top-margin-shrunk{
  margin-top: .5%;
}

.white-text{
  color: white !important;
}

</style>
