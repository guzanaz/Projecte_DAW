const app = new Vue({
  el:'#app',
  data:{
    errors:[],
    name:null,
    email:null
  },
  methods:{
    checkForm:function(e) {
      if(this.name && this.age) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.name) this.errors.push("email required.");
      e.preventDefault();
    }
  }
})