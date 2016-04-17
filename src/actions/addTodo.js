import {
 TOGGLE_TODO,
 ADD_TODO
} from '../constants/formConstantsList.js';




export default {
 addTodo: (response) => {
 	console.info( response);
 	let nextTodoId = response.id;
 	
   return {
     type: 'ADD_TODO',
     payload: { 
     	text: response.text,
     	id: nextTodoId++
     }
   }
 }
}