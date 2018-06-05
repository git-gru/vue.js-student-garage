<template>
  <div>
    <div class="col-lg-7 mx-auto">
              <div> <h1 class = "text-center text-bold"> Product Name </h1> </div>
              <div class="flex-content">
                <div class = "row w-100">
                  <div class="flex-content-column"> Team </div>
                  <img class="avatar avatar-md left-margin-reduced" src="https://cdn.stocksnap.io/img-thumbs/960w/2UPHCTMHNR.jpg" alt="avatar">
                  <img class="avatar avatar-md left-margin-reduced" src="https://cdn.stocksnap.io/img-thumbs/960w/2UPHCTMHNR.jpg" alt="avatar">
                  <img class="avatar avatar-md left-margin-reduced" src="https://cdn.stocksnap.io/img-thumbs/960w/2UPHCTMHNR.jpg" alt="avatar">
                </div>
              </div>

              <div class="gallery gallery-4-type4" data-provide="photoswipe">
                <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                  <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                </a>
                <div class="gallery-item-group">
                  <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                  </a>
                  <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                  </a>
                  <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                  </a>
                </div>

                <div class="gallery-extra-items">
                  <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                  </a>
                  <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                  </a>
                  <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                  </a>
                  <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                  </a>
                  <a class="gallery-item" href="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/OTOSZLA6WF.jpg" alt="...">
                  </a>
                </div>
              </div>
            </div>

  </div>

</template>


<script>
export default {
  name: 'IndividualProductView',
  data () {
    return {
      msg: 'This is navbar',
      example: 'Testing',
      test: [1,2,3,4,5]
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
  display: flex !important;
  justify-content: center !important;
}
.flex-content-column{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
.left-margin-reduced{
  margin-left: 1%;
}
.margin-top{
  margin-top: 5%;
}
.message-margin{
  margin-top: 1%;
}
.my-color{
  background-color: orange;
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
}
.row{
  justify-content: center;
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
