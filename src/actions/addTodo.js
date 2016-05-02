import {
 ADD_TODO
} from '../constants/formConstantsList.js';


let nextTodoId = 0;

export default {
 addTodo: (response) => {
 	console.info( response);
 	
 	
   return {
     type: 'ADD_TODO',
     payload: { 
     	text: response.text,
     	id: nextTodoId++
     }
   }
   
 }
}