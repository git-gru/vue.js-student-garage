<template>
  <div>
    <div class="left-margin">
      <h2>Events Near You </h2>
      <div class ="float-right right-margin">
        <button type="button" class="btn btn-lg btn-success" @click="createEvent()">Create an Event</button>
      </div>
    </div>

    <div class="left-margin">
      <h6>Find entrepreneurial events on campus </h6>
    </div>

    <div class="flex-row top-margin">
      <div class="form-group input-group w-80">
                <input type="text" class="form-control" placeholder="Search for events..." v-model="eventQuery">
                <div class="input-group-append ml-4">
                  <button class="btn btn-primary" type="button" @click='queryEvents()'>Go!</button>
                </div>
      </div>
    </div>

    <div class = "row left-margin right-margin">
      <div class = "col-md-6 top-margin">
        <div class="card border">
            <div class="card-body">
              <h5 class="card-title">Image at bottom</h5>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
              <button type="button" class="btn btn-md btn-primary">12 Answers</button>
            </div>
        </div>
      </div>

      <div class = "col-md-6 top-margin">
        <div class="card border">
            <div class="card-body">
              <h5 class="card-title">Image at bottom</h5>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
              <button type="button" class="btn btn-md btn-primary">12 Answers</button>
            </div>
        </div>

      </div>

      <div class = "col-md-6 top-margin">
        <div class="card border">
            <div class="card-body">
              <h5 class="card-title">Image at bottom</h5>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
              <button type="button" class="btn btn-md btn-primary">12 Answers</button>
            </div>
        </div>

      </div>

    </div>
  </div>

</template>
<script>
export default {
  name: "EventsMain",
  data() {
    return {
      eventQuery: ""
    };
  },
  methods: {
    queryEvents() {
      console.log(this.eventQuery);
    },
    createEvent() {
      this.$router.push("/create-event");
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
.float-right {
  float: right;
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

.right-margin {
  margin-right: 5%;
}
.top-margin {
  margin-top: 2.5%;
}
</style>
