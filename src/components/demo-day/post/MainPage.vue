<template>
  <div>
      <div class= "margin-20">
        <div>
          <div class="">
            <h2>Post a Project </h2>
          </div>

          <div class="">
            <h6>Show Student Garage What You're Working On</h6>
          </div>
          <form class="input-line">
            <div class="form-group ">
              <label>Project Name</label>
              <input class="form-control" type="text" placeholder="Project Name" v-model="projectName">
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" rows="4" placeholder="Project Description" v-model="projectDescription"></textarea>
            </div>
            <div class="form-group">
              <label class="">Upload Photos</label>
              <div class="">
                <button type="button" class="btn btn-xl black-button" @click="onUploadPhotos()">BROWSE PHOTOS</button>
                <input type ="file" class="display-none"
                  ref="uploader"
                  accept="image/*"
                  multiple
                  @change="onFilesChosen">
              </div>
            </div>
            <div v-if="imageUrls.length > 0" class="row">
              <div v-for="url in imageUrls" class="col-md-4">
                <img :src="url" class="img-restricted"/>
              </div>
            </div>
            <div class="form-group ">
              <label>Youtube Link (if you want to show a video demo of project)</label>
              <input class="form-control" type="text" placeholder="Youtube Link" v-model="youtubeLink">
            </div>
            <button type="submit" class="btn btn-primary" @click="postProject()">Post Project</button>
            </form>
          </div>
      </div>


  </div>


</template>


<script>
import DemoDayDrop from './demo-day-drop.vue'
import DemoDayService from '../../../services/demoDayService.js'
import UserService from '../../../services/userService.js'
export default {
  name: 'PostProductMain',
  components:{
    'DemoDayDrop': DemoDayDrop
  },
  data () {
    return {
      projectId: '',
      projectName:'',
      projectDescription:'',
      youtubeLink:'',
      imageUrls:[],
      images:[]
    }
  },
  methods: {
    onUploadPhotos(){
      this.$refs.uploader.click();
    },
    onFilesChosen(event){
      const files = event.target.files;
      let self = this;
      let filesLength = files.length;
      let fileArray = this.getFileArray(files,filesLength);
      fileArray.forEach(function(file){
        let fileName = file.name;
        if(fileName.lastIndexOf('.')<=0) return alert('Please valid files only');
        const fileReader = new FileReader();
        let imageUrl;
        fileReader.addEventListener('load',() =>{
          imageUrl = fileReader.result;
          self.imageUrls.push(imageUrl);
        })
          fileReader.readAsDataURL(file)
          self.images.push(file);
      });
    },
    getFileArray(files,length){
      let fileArray = [];
      for(let i = 0; i < length; i++){
        let file = files[i];
        fileArray.push(file);
      }
      return fileArray;
    },
    postProject(){
      let project = {};
      let self = this;
      project.name = this.projectName;
      project.description = this.projectDescription;
      project.youtubeLink = this.youtubeLink;
      project.imageUrls = [];
      DemoDayService.postProject(project,curUserId).then(function(id){
        self.projectId = id;
        UserService.addGarageProjectToUser(id);
        self.addPhotosToPost();
      });
    },
    addPhotosToPost() {
      let downloadUrls = [];
      let self = this;
      this.images.forEach((image) => {
        DemoDayService.getGarageImageURL(self.projectId,image.name, image).then(function(url){
            DemoDayService.addDownloadURL(self.projectId,url);
        });
      });
    }
  }
}
</script>


<style scoped>

.ask-color{
  background-color: #FF420E;
  color: white;
}

.black-button{
  background-color: black;
  color:white;
}

.display-none{
  display: none;
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
.float-right{
  float:right;
}
.img-restricted{
  max-height: 150px;
  max-width: 150px;
}

.left-margin{
  margin-left: 5%;
}
.margin-top{
  margin-top: 5%;
}

.margin-20{
  margin-left:20%;
  margin-right: 20%;
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

.right-margin{
  margin-right: 5%;
}
.top-margin{
  margin-top: 2.5%;
}

</style>
