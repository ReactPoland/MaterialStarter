import {
 TOGGLE_TODO,
 ADD_TODO
} from '../constants/formConstantsList.js';

export default {
 addTodo: (payload) => {
 	let nextTodoId = 0;
   return {
     type: 'ADD_TODO',
     payload: { 
     	text: 'Test',
     	id: nextTodoId++
     }
   }
 }
}