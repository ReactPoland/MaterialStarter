import {
 JOIN_ARRAY_DATA
} from '../constants/formConstantsList.js';

export default {
 joinArray: (data) => {
   return {
     type: JOIN_ARRAY_DATA,
     payload: { data: data }
   }
 }
}