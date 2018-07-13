<template>
  <div>
      <div class= "margin-20">
        <div>
          <div class="">
            <h2>Create an Event </h2>
          </div>

          <form class="input-line">
            <div class="form-group ">
                  <label>Event Title </label>
                  <input  class="form-control" type="text" placeholder="Title of Event" v-model="eventTitle">
            </div>


            <div class="form-group">
              <label>Event Description</label>
              <textarea class="form-control" rows="4" placeholder="Description of Event" v-model="eventDescription"></textarea>
            </div>

            <div class="form-group">
            <label>Date of Event </label>
              <Datepicker  v-model="date" placeholder="Date"> </Datepicker>
            </div>
            <div class="form-group">
              <label>Time of Event </label>
            <div>
              <VueTimepicker v-model="time" format="hh:mm A"> </VueTimepicker>
            </div>
              </div>

            <button type="submit" class="btn btn-primary" @click="createEvent()">Create Event</button>
            </form>
          </div>
      </div>


  </div>


</template>


<script>
import Datepicker from 'vuejs-datepicker'
import VueTimepicker from 'vue2-timepicker'
import moment from 'moment'
const today = moment()
export default {
  name: 'AccountSettingsMain',
  components:{
    'VueTimepicker': VueTimepicker,
    'Datepicker': Datepicker
  },
  data () {
    return {
      eventTitle: '',
      eventDescription: '',
      time:{
        "hh": today.format('hh'),
        "mm": today.format('mm'),
        "A": today.format('A')
      },
      date: today.toDate()
    }
  },
  methods:{
    createEvent(){
      let event = {};
      event.title = this.eventTitle;
      event.description = this.eventDescription;
      event.date = this.formatDate(this.date.toString().split(" "));
      console.log(event);
      this.posted = true;
      this.eventTitle = '';
      this.eventDescription = '';
    },
    formatDate(date){
      console.log(date,'date coming in');
      console.log(this.time, 'what is the time?');
      let result =
        `${date[2]} ${date [1]} ${date[3]} ${this.time.hh}:${this.time.mm}:00 ${this.time.A}`;
      result = new Date(result);
      return result;
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
