<template>
  <div>
    <div class="chat_list left-margin right-margin">
      <div class = "text-center">
      Messages
    </div>
    <ul class="list-group">
        <li v-for="room in chatrooms" @click= "individualView(room.otherUser.userId)" class="list-group-item bordered">
            <div class="pull-left hidden-xs">
                <div>
                    <img class="avatar avatar-lg" :src="room.otherUser.profile_img_add"  alt="avatar">
                </div>
            </div>

            <small class="pull-right text-muted">{{getDate(room.messages[room.messages.length -1].createdDate)}}</small>
            <div class="left-margin">
                <small class="list-group-item-heading text-muted text-primary left-margin"> {{room.otherUser.first_name}} {{room.otherUser.last_name}}</small>
                <p class="list-group-item-text left-margin">
                    {{lastMessage(room)}}
                </p>
            </div>
        </li>
      </ul>
    </div>

  </div>

</template>
<script>
import UserService from '../../services/userService.js';
import MessageService from '../../services/messageService.js';
import common from '../../services/common.js';
export default {
  name: 'Messages',
  data () {
    return {
      userId: "",
      chatrooms: [],
    }
  },
  methods: {
    individualView (id) {
      this.$router.push({ name: 'IndividualMessageView',  params: { id }})
    },
    lastMessage(room){
      let message = room.messages[room.messages.length -1]
      let content = message.message;
      let sender = message.userId;
      if(sender == this.userId){
        return "You: " + content;
      } else{
        return room.otherUser.first_name + ": " + content;
      }
    },
    getUserChatrooms(){
      let self = this;
      MessageService.getUserChatrooms(this.userId).then(function(rooms){
        console.log("rooms", rooms)
        rooms.forEach(function(room){ // attaches the other user to chatroom
          for(let id in room.users){
            if(id !== self.userId){
              UserService.getUserProfileStatus(id).then(function(user){
                let index;
                if(user.isStudent){
                  UserService.getUserIsStudent(id).then(function(student){
                    index = rooms.findIndex(function(room){
                      return room.users[id] == true;
                    });
                    rooms[index].otherUser = student;
                    room.messages.sort(function(a,b){
                      console.log("creating date check")
                      return a.createdDate - b.createdDate;
                    });
                    self.chatrooms = rooms;
                  });
                } else if(user.isInvestor){
                  UserService.getUserIsStudent(id).then(function(investor){
                    index = rooms.findIndex(function(room){
                      return room.users[id] == true;
                    });
                    rooms[index].otherUser = investor;
                    room.messages.sort(function(a,b){
                      console.log("creating date check")
                      return a.createdDate - b.createdDate;
                    });
                    self.chatrooms = rooms;
                  });
                }
              })
            }
          }
        });
      });
    },
    getDate(milliseconds){
      let result = "";
      let date = new Date(milliseconds);
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      result = result + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
      return result;
    }
  },
  created(){
    this.userId = UserService.getCurrentUserId();
    this.getUserChatrooms();
  },
}

</script>
<style scoped>
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

/*
.card{
  width: auto;
}*/
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

.left-margin{
  margin-left: 5%;
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
.top-margin{
  margin-top: 2.5%;
}
.top-margin-shrunk{
  margin-top: .5%;
}

.white-text{
  color: white;
}

</style>
