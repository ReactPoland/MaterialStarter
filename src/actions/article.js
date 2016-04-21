import {
 ARTICLES_LIST_ADD
} from '../constants/formConstantsList';

//response here, are mocked data from publishing app coomponent - an array

export default {
  articlesList: (response) => {
    return {
      type: ARTICLES_LIST_ADD,
      payload: { response: response }
    }
  }
}
