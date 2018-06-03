<template>
  <div>
      <div class= "margin-20">
        <div>
          <div class="">
            <h2>Post a Product </h2>
          </div>

          <div class="">
            <h6>Post the current project</h6>
          </div>
          <form class="input-line">
            <div class="form-group ">
                  <label>Project Name</label>
                    <textarea class="form-control" rows="4" placeholder="Textarea"></textarea>
                  </div>

                  <div class="form-group">
                  <label>Normal</label>
                  <input class="form-control" type="text" placeholder="Last name">
                </div>
            </form>
          </div>
      </div>


  </div>


</template>


<script>
export default {
  name: 'PostProductMain',
  data () {
    return {
      msg: 'This is navbar',
      example: 'Testing'
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
