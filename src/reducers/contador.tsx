import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    color: '#fffff3'
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    theme: state => {
      state.color = state.color === '#fffff3' ? '#000000b4' : '#fffff3';
    }
  }
});

export const { increment, decrement, incrementByAmount, theme } = counterSlice.actions

export default counterSlice.reducer