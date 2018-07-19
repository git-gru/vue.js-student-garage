<template>
  <div>
    <div class="col-lg-7 mx-auto">
              <div> <h1 class = "text-center text-bold"> {{project.name}} </h1> </div>
              <div class="flex-content">
                <div class = "row w-100">
                  <div class="flex-content-column"> Posted By: </div>
                  <img class="avatar avatar-md left-margin-reduced" :src="projectPoster.profile_img_add" alt="avatar">
                </div>
              </div>

              <div class = "">
                <div class="card">

                <section id="lity" class="section">
                <div class="container">

                  <div class="row">

                      <div class="gallery gallery-4-type4">
                        <a v-if= "hasMainImage()"class="gallery-item" href="#">
                          <img :src="mainPhoto" alt="..." data-provide="lightbox">
                        </a>
                        <div class="gallery-item-group">
                          <a v-for="photo in otherPhotos"class="gallery-item" href="#">
                            <img :src="photo" alt="..." data-provide="lightbox">
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
              </section>
                </div>
              </div>

              <div v-if="isYoutube(project.youtubeLink)">
                <div class="flex-content">
                  <h4> Demo Video </h4>
                </div>
                <div class="flex-content">
                  <iframe width="420" height="345" :src="show(project.youtubeLink)">
                  </iframe>
                </div>
              </div>

              <div class="top-margin bottom-margin">
                <p class="inline bolded"> Description: </p>
                <p class="inline"> {{project.description}} </p>
              </div>
            </div>

  </div>

</template>


<script>
import DemoDayService from '../../../services/demoDayService.js';
import UserService from '../../../services/userService.js';
export default {
  name: 'IndividualProductView',
  data () {
    return {
      projectId:'',
      projectPoster:{},
      project:{},
      mainPhoto:'',
      otherPhotos:[]
    }
  },
  methods: {
    getProject(){
      let self = this;
      DemoDayService.getProject(this.projectId).then(function(project){
        console.log(project);
        self.project = project;
        self.breakdownPhotos(project.imageUrls);
        UserService.getUserProfileStatus(project.posterId).then(function(user){
          if(user.isStudent){
            UserService.getUserIsStudent(project.posterId).then(function(student){
              self.projectPoster= student;
            });
          } else if(user.isInvestor){
            UserService.getUserIsStudent(project.posterId).then(function(investor){
              self.projectPoster= investor;
              });
            }
        })
      })

    },
    breakdownPhotos(photos){
      if(photos.length > 0){
        this.mainPhoto = photos[0];
        let count = 1;
        while(count < 4 && count < photos.length){
          this.otherPhotos.push(photos[count]);
          console.log(this.otherPhotos);
          count ++;
        }
      }
    },
    hasMainImage(){
      return this.mainPhoto !== '';
    },
    isYoutube(link){
      if(!link)return false;
      console.log(link);
      return true;
    },
    show(link){
      return 'https://www.youtube.com/embed/' + this.getYouTubeId(link);
    },
    getYouTubeId(link){
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = link.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
    }
  },
  mounted(){
     this.projectId = this.$route.params.id;
     this.getProject();
  }
}
</script>



<style scoped>
.bolded{
  font-weight: bold;
}
.bordered{
  border-style: solid;
  border-color: black;
}
.bottom-margin{
  margin-bottom: 5%;
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

.inline{
  display: inline;
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
