import {createSlice} from '@reduxjs/toolkit';

const filterBarSlice = createSlice({
  name: 'filterBar',
  initialState: {filterType: 'all'},
  reducers: {
    handleFilterType(state, action) {
      state.filterType = action.payload
    }
  }
});

export const {handleFilterType} = filterBarSlice.actions;

export default filterBarSlice.reducer
