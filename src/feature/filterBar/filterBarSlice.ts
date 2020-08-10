import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState: {filterType: string} = {
  filterType: 'all'
}

const filterBarSlice = createSlice({
  name: 'filterBar',
  initialState,
  reducers: {
    handleFilterType(state, action:PayloadAction<string>) {
      state.filterType = action.payload
    }
  }
});

export const {handleFilterType} = filterBarSlice.actions;

export default filterBarSlice.reducer
