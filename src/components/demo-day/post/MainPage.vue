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
                <DemoDayDrop ref='demoDayDrop' @uploadFinish='addPhotosToPost' />
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
      youtubeLink:''
    }
  },
  methods: {
    postProject(){
      let project = {};
      project.name = this.projectName;
      project.description = this.projectDescription;
      project.youtubeLink = this.youtubeLink;
      console.log(project);
      let id = DemoDayService.postProject(project);
      this.projectId = id;
      this.$refs.demoDayDrop.uploadFiles();
    },
    addPhotosToPost(images) {
      images.forEach((imgUrl) => {
        DemoDayService.addPhoto(this.projectId, 'img', imgUrl)
      })
    }
  }
}
</script>


<style scoped>

.ask-color{
  background-color: #FF420E;
  color: white;
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
  height: 200px;
  width: 200px;
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
