<template>
<footer class="footer fixed-bottom footer-color">
      <div class="container">
        <div class="row gap-y align-items-center">
          <div class="col-6 col-lg-3">
            <a href="index.html"><img src="/static/assets/img/Footer-Logo.png" alt="logo"></a>
          </div>
          <div class="col-6 col-lg-3 text-right order-lg-last">
            <div class="social">
              <a class="social-facebook" href="https://www.facebook.com/thethemeio"><i class="fa fa-facebook"></i></a>
              <a class="social-twitter" href="https://twitter.com/thethemeio"><i class="fa fa-twitter"></i></a>
              <a class="social-instagram" href="https://www.instagram.com/thethemeio/"><i class="fa fa-instagram"></i></a>
              <a class="social-dribbble" href="https://dribbble.com/thethemeio"><i class="fa fa-dribbble"></i></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="nav nav-bold nav-uppercase nav-trim justify-content-lg-center">
              <a class="nav-link" href="uikit/index.html">Elements</a>
              <a class="nav-link" href="block/index.html">Blocks</a>
              <a class="nav-link" href="page/about.html">About</a>
              <a class="nav-link" href="blog/grid.html">Blog</a>
              <a class="nav-link" href="page/contact.html">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      msg: 'This is Footer'
    }
  }
}
</script>

<style scoped>
.fixed-bottom{
    position: initial;
    left: 0;
    bottom: 0;
    width: 100%;
}

.footer-color{
  background-color: black;
  color: white;
}

</style>
