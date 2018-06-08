<template>
  <div>
    <div class="left-margin">
      <h2>Ask Student Garage </h2>
    </div>

    <div class="left-margin">
      <h6>Ask our network of student entrepreneurs, investors, and advisors. </h6>
    </div>

    <div class="flex-row top-margin">
      <div class="center-mobile" >
        <button type="button" class="btn btn-lg ask-color" data-toggle="modal" data-target="#modal-default">Ask a Question</button>
      </div>
    </div>


   <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">
                  <p class="lead">Modals are a great tool to display call to action contents. Mostly you want to use them for sale promotions, sign up to your application, newsletter subscription, etc.</p>
                  <p class="lead mb-0">Our template make it an easy task as well.</p>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>


    <div class="flex-row top-margin">
      <div class="form-group input-group w-80">
                <input type="text" class="form-control" placeholder="Search for questions...">
                <div class="input-group-append ml-4">
                  <button class="btn btn-primary" type="button">Go!</button>
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
  name: 'Navbar',
  data () {
    return {
      msg: 'This is navbar',
      example: 'Testing',
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

.right-margin{
  margin-right: 5%;
}
.top-margin{
  margin-top: 2.5%;
}

</style>
