export default (state = {}, action) => {
  switch (action.type) {
    case 'HANDLE_FILTER_TYPE': {
      return {
        ...state,
        filterType: action.filterType
      }
    }
    default:
      return state;
  }
}
