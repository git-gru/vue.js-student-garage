export default {
  methods: { // method can be imported to any component as mixins: []
    someMethod (val) {
      alert('foo method with val: ' + val)
    }
  }
  // And You can set here:
  // data () { return { field: 'value' }},
  // computed: {} // any computed property ...
}
