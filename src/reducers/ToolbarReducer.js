const ToolbarReducer = (state = { success: false, close: false }, action) => {
  switch(action.type) {
    case 'GET_STATE':
      return state;
    case 'CLICK_SUCCESS':
      return Object.assign({}, state, { success: !state.success });
    case 'CLICK_CLOSE':
      return Object.assign({}, state, { close: !state.close});
    default:
      return state;
  }
}

export default ToolbarReducer
