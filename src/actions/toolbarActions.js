export default {
  getState: () => {
    return {
      type: 'GET_STATE'
    }
  },
  clickSuccess: () => {
    return {
      type: 'CLICK_SUCCESS'
    }
  },
  clickClose: () => {
    return {
      type: 'CLICK_CLOSE'
    }
  }
}
