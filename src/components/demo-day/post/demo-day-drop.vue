<template>
  <div>
    <vue-dropzone ref="demoDayDrop" id="dropzone" :options="dropzoneOptions"
    :auto-process-queue='false'
    @vdropzone-success="linkImageToPost"
    @vdropzone-queue-complete='emitComplete' />
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  name: 'app',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://student-garage.appspot.com',
          thumbnailWidth: 150,
          maxFileSizeInMB: 10,
          addRemoveLinks: true,
          dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>UPLOAD OR DROP FILE(S) HERE"
      },
      images:[]
    }
  },
  methods:{
    uploadFiles() {
        this.images = []
        this.$refs.uploader.processQueue()
      },
      emitComplete() {
        this.$refs.uploader.removeAllFiles()
        this.$emit('uploadFinish', this.images)
      },
    linkImageToPost(file, { result }) {
        result.files.file.forEach((file) => {
          this.images.push(file.name)
        })
        console.log('A file was successfully uploaded')
      }
  }
}
</script>
