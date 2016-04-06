import {
 FORM_DATA_SUBMIT
} from '../constants/formData';

export default {
 submitData: (model) => {
   return {
     type: FORM_DATA_SUBMIT,
     payload: { model }
   }
 }
}