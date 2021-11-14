import { BaseItems } from '@caddie/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../state/store';

// Define a type for the slice state
interface ItemState {
  value: BaseItems[];
}

// Define the initial state using that type
const initialState: ItemState = {
  value: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    fetchAll: (state) => {
      console.log(state);
    },
  },
});

export const { fetchAll } = itemSlice.actions;

export const fetchAllItems = (state: RootState) => state.item;

export const itemReducer = itemSlice.reducer;
