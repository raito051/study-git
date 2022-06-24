console.log('aa');

var app1 = new Vue({
  delimiters: ["[[", "]]"],
    el: '#app1',
    data() {
      return{
        message: 'Hello World!'
      }
    }
})