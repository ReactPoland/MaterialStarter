import {
 TOGGLE_TODO
} from '../constants/formConstantsList.js';


let nextTodoId = 0;

export default {
 toggleTodo: (response) => {
 	console.info( response);
 	
 	
   return {
     type: 'TOGGLE_TODO',
     payload: { 
     	text: response.text,
     	id: nextTodoId++
     }
   }
 }
}