const vue_linkedin = { };
vue_linkedin.install = function install(Vue, options) {
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) {return}
        js = d.createElement(s)
        js.id = id
        js.src = "//platform.linkedin.com/in.js"
        fjs.parentNode.insertBefore(js, fjs)
        console.log('setting linkedin')
    }(document, 'script', 'facebook-jssdk'))
}