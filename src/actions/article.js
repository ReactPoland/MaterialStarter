import {
 ARTICLES_LIST_ADD,
 JOIN_ARRAY_DATA
} from '../constants/formConstantsList';

//response here, are mocked data from publishing app coomponent - an array

export default {
  articlesList: (response) => {
    return {
      type: ARTICLES_LIST_ADD,
      payload: { response: response }
    }
  },
  joinArray: (data) => {
   return {
     type: JOIN_ARRAY_DATA,
     payload: { data: data }
   }
 }
}
