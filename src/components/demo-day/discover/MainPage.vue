<template>
  <div>
    <div class="left-margin">
      <h2>Demo Day </h2>
    </div>

    <div class="left-margin">
      <h6>Discover some of the latest projects coming out of Stanford</h6>
    </div>

    <div class="flex-row top-margin">
      <div class="form-group input-group w-80">
                <input type="text" class="form-control" placeholder="Search for projects...">
                <div class="input-group-append ml-4">
                  <button class="btn btn-primary" type="button">Go!</button>
                </div>
      </div>
    </div>
    <div class="left-margin flex-row top-margin-shrunk">
      <span class="badge badge-pill badge-primary">Primary</span>
      <span class="badge badge-pill badge-secondary">Secondary</span>
      <span class="badge badge-pill badge-success">Success</span>
      <span class="badge badge-pill badge-danger">Danger</span>
      <span class="badge badge-pill badge-warning">Warning</span>
      <span class="badge badge-pill badge-info">Info</span>
      <span class="badge badge-pill badge-light">Light</span>
      <span class="badge badge-pill badge-dark">Dark</span>
    </div>

    <div v-if="showSpinner" class="top-margin-5">
      <div class="flex-content">
        <semipolar-spinner
          :animation-duration="2000"
          :size="65"
          color="black"
  />
      </div>
      <h4 class="text-center"> Loading... </h4>
    </div>

    <div class = "row left-margin right-margin">
      <div class = "col-md-6 top-margin" v-for="(project, key) in projects">
        <div class="card">
                <div class="card-img-top">
                  <img src="https://static.makeuseof.com/wp-content/uploads/2015/08/free-images-1.jpg" alt="Card image cap">
                  <div class="badges">
                    <a class="badge badge-warning" href="#">Product</a>
                    <a class="badge badge-info" href="#">Design</a>
                  </div>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Image at top with labels</h5>
                  <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
                  <a class="fs-12 fw-600" @click="goToProduct(project.id)" href="#">Read more <i class="fa fa-angle-right pl-1"></i></a>
                </div>
              </div>
      </div>
    </div>
  </div>

</template>
<script>
import DemoDayService from '../../../services/demoDayService.js';
export default {
  name: 'DiscoverMain',
  data () {
    return {
      projects:[],
      showSpinner: true,
      projectQuery: ""
    }
  },
  mounted(){
    var self = this;
    DemoDayService.getAllProjects().then(function(querySnapshot){
      self.projects = querySnapshot.docs.map(doc => {
        let project = doc.data();
        project.id = doc.id;
        return project;
      })
      self.showSpinner = false;
    });
  },
  methods: {
    goToProduct(id){
      this.$router.push({ name: 'IndividualProductView', params: { id }});
    },
    queryProjects(){
      console.log(this.projectQuery);
    }
  }
}
</script>
<style scoped>

.ask-color{
  background-color: #FF420E;
  color: white;
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
