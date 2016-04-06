import {
 ARTICLES_LIST_ADD
} from '../constants/formConstantsList';

export default {
  articlesList: (response) => {
    return {
      type: ARTICLES_LIST_ADD,
      payload: { response: response }
    }
  }
}
