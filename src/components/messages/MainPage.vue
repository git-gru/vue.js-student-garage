<template>
  <div>
    <div class="chat_list left-margin right-margin">
      <div class = "text-center">
      Messages
    </div>
    <ul class="list-group">
        <li v-for="item in users" @click= "individualView(item)" class="list-group-item bordered">
            <div class="pull-left hidden-xs">
                <div>
                    <img class="avatar avatar-lg" v-bind:src="item && item.profile_img_add ? item.profile_img_add : 'https://symsys.stanford.edu/static/filedocument/2017/11/13/CurtisStaples-public.jpg'" alt="avatar">
                </div>
            </div>
            <small class="pull-right text-muted">10.12.2014 in 12:56(dummy)</small>
            <div class="left-margin">
                <small class="list-group-item-heading text-muted text-primary left-margin">{{item.email}}</small>
                <p class="list-group-item-text left-margin">
                    Hi! this message is FOR you.(dummy)
                </p>
            </div>
        </li>
      </ul>
    </div>

  </div>

</template>
<script>

import StudentService from '../../services/studentService.js';
import common from '../../services/common.js';

export default {
  name: 'Messages',
  data () {
    return {
      msg: 'This is navbar',
      example: 'Testing',
      test: [1, 2, 3, 4, 5],
      users: []
    }
  },
  methods: {
    individualView (rData) {
      this.$router.push({ name: 'IndividualMessageView',  params: { rData }})
    },
    getAllStudents(){
      StudentService.getStudents((status, snapshot)=>{
        if(status === common.constants().SUCCESS){
          if(snapshot.size)snapshot.forEach(doc => {
            this.users.push(doc.data());
            if(snapshot.size === this.users.length){
              this.users = Array.from(this.users).filter((ele, index, arr)=> ele.email);
            }
          });
        }
      })
    }
  },
  created(){
    this.getAllStudents();
  }
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
