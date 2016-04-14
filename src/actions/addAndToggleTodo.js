import {
 TOGGLE_TODO,
 ADD_TODO
} from '../constants/formConstantsList.js';

export default {
 addTodo: (payload) => {
   return {
     type: ADD_TODO,
     payload: { payload: payload }
   }
 },
 toggleTodo: (payload) => {
   return {
     type: TOGGLE_TODO,
     payload: { payload: payload }
   }
 }
}