import {
 CLIENTS_DATA_SHOW
} from '../constants/formConstantsList';

//response here, are mocked data from publishing app coomponent - an array

export default {
  clientsDataShow: (response) => {
    return {
      type: CLIENTS_DATA_SHOW,
      payload: { response: response }
    }
  }
}
