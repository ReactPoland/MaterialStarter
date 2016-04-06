import {
 FORM_DATA_SUBMIT
} from '../constants/formData';

export default {
  articlesList: (response) => {
    return {
      type: 'ARTICLES_LIST_ADD',
      payload: { response: response }
    }
  },
  submitData: (model) => {
   return {
     type: FORM_DATA_SUBMIT,
     payload: { model }
   }
 }
}
