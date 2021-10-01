const app= Vue.createApp({
    data(){
        return{
            titulo:'Register Form'
            errors: [],
        name: null,
            age: null,
    movie: null
        }
    },

    methods: {
        reversetitulo: function () {
          this.titulo = this.titulo.split('').reverse().join('')
          console.log('name')
        }
      }
    
})




