const app= Vue.createApp({
    data(){
        return{
            titulo:'Este es un hola mundo con vue.js'
        }
    },

    methods: {
        reversetitulo: function () {
          this.titulo = this.titulo.split('').reverse().join('')
        }
      }
    
})



// 
