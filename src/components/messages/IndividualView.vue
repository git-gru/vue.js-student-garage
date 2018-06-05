<template>
  <div>
    <div class="chat_list left-margin right-margin">
      <div class = "text-center">
      Your Chat With Curtis
    </div>
    <ul class="list-group top-margin">
        <li v-for="item in test" v-bind:class="{'to-the-right': isMe(item), 'light-blue': isMe(item)}" class="list-group-item bordered w-75 rounded top-margin-1">
          <div>
            <div class="pull-left hidden-xs">
                <div>
                    <img class="avatar avatar-lg" src="https://symsys.stanford.edu/static/filedocument/2017/11/13/CurtisStaples-public.jpg" alt="avatar">
                </div>
            </div>
            <small class="pull-right text-muted">10.12.2014 in 12:56</small>
            <div class="left-margin">
                <small class="list-group-item-heading text-muted text-primary left-margin">User1</small>
                <p class="list-group-item-text left-margin">
                    Hi! I'm on the left ya sucka ! :>>>>
                </p>
            </div>
          </div>
        </li>
      </ul>
      <form class="form-horizontal top-margin" autocomplete="off">
      <fieldset>
        <div class="form-group input-group">
                  <input type="text" class="form-control" placeholder="Send a message">
                  <div class="input-group-append ml-4">
                    <button class="btn btn-primary" type="button">Send</button>
                  </div>
        </div>
      </fieldset>
    </form>
    </div>

  </div>

</template>


<script>
export default {
  name: 'Messages',
  data () {
    return {
      msg: 'This is navbar',
      example: 'Testing',
      test: [1,2,2,3,4]
    }
  },
  methods: {
    isMe(message){
      return message % 2 === 0;
    }
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
.comment {
  width: 80%;
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
.light-blue {
  background-color: #25ddec !important;
  color: white !important;
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
.rounded{
  border-radius: 30px !important;
  border-color: #25ddec !important;
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
  color: white;
}

</style>
