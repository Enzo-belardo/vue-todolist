
const  {createApp} = Vue
createApp({
    data(){
        return{
            newTodo:"",
            index: 0,

            todos: [
            { text: 'Fare i compiti', done: false }, 
            { text: 'Fare la spesa', done: true }, 
            { text: 'Fare il bucato', done: false },
          ]
            
        }
    },

    methods: {
        addItems(content){
            this.todos.push(content)
            this.clearInput
        },
        clearInput(){
            this.newTodo= ""
        },
      
       
    },

}).mount('#app');
