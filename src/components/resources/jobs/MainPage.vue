<template>
  <div>
    <div class="left-margin">
      <h2>Jobs </h2>
    </div>

    <div class="left-margin">
      <h6>Some of the educational resources recommended from our network of student
        entrepreneurs, investors, and advisors. </h6>
    </div>

    <div class="flex-row top-margin">
      <div class="form-group input-group w-80">
        <input type="text" class="form-control" placeholder="Search for jobs..." v-model="jobQuery">
        <div class="input-group-append ml-4">
          <button class="btn btn-primary" type="button" @click="queryJobs()">Go!</button>
        </div>
      </div>
    </div>


    <div class = "row left-margin right-margin">
      <div class = "col-md-6 top-margin">
        <div class="card border bg-primary white-text">
          <div class="card-body">
            <h5 class="card-title">Image at bottom</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
            <button type="button" class="btn btn-md read-more">12 Answers</button>
          </div>
        </div>
      </div>

      <div class = "col-md-6 top-margin">
        <div class="card border bg-primary white-text">
          <div class="card-body">
            <h5 class="card-title">Image at bottom</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
            <button type="button" class="btn btn-md read-more">12 Answers</button>
          </div>
        </div>

      </div>

      <div class = "col-md-6 top-margin">
        <div class="card border bg-primary white-text">
          <div class="card-body">
            <h5 class="card-title">Image at bottom</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
            <button type="button" class="btn btn-md read-more">12 Answers</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobsMain",
  data() {
    return {
      jobQuery: ""
    };
  },
  methods: {
    queryJobs() {
      console.log(this.jobQuery);
    }
  }
};
</script>
<style scoped>
.ask-color {
  background-color: #ff420e;
  color: white;
}

.flex-content {
  display: flex;
  justify-content: center;
}

.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.img-restricted {
  height: 200px;
  width: 200px;
}

.left-margin {
  margin-left: 5%;
}
.margin-top {
  margin-top: 5%;
}
.no-left-margin {
  margin-left: 0 !important;
}

.no-left-padding {
  padding-left: 0 !important;
}

@media (max-width: 400px) {
  .center-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.read-more {
  background-color: white;
  /* primary */
  color: #50a1ff;
}
.right-margin {
  margin-right: 5%;
}
.top-margin {
  margin-top: 2.5%;
}
.top-margin-shrunk {
  margin-top: 0.5%;
}

.white-text {
  color: white;
}
</style>
