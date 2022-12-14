
const  {createApp} = Vue
createApp({
    data(){
        return{
            index: 0,
            newTodo:'',
            
            todos: [
            { text: 'Fare i compiti', done: false }, 
            { text: 'Fare la spesa', done: true }, 
            { text: 'Fare il bucato', done: false },
            { text: 'dare da mangiare al cane', done: false }, 
            { text: 'andare al corso di chitarra', done: true }, 
            { text: 'cucinare', done: false },
          ]
            
        }
    },

    methods: {
        addItems(content){

          if(content != ''){
              this.todos.push({text : content, done : false});
              this.clearInput();
            }; 

        },

        clearInput(){
            this.newTodo= '';
        }   
       
    },

}).mount('#app');
