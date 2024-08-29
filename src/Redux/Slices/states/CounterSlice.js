import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      setCountIncrement : (state)=> {
        state.count++;
      },
      setCountDecrement(state) {
        state.count--;
      },
      setCountIncrementByAmount5(state, action) {
        state.count += action.payload
      },
    },
  })


  export const  { setCountIncrement, setCountDecrement,  setCountIncrementByAmount5} = counterSlice.actions;
  export default counterSlice.reducer;