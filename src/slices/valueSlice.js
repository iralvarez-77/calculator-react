import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
}

export const valueSlice = createSlice({
  name: 'valor',
  initialState,
  reducers: {
    update: ( {value}, {payload} ) => {
      return {
        value : `${value}${payload}`,
      }
    },
    result : (state, {payload}) => {
      console.log(payload);
      return {
        value: payload,
      }
    },
    reset : ( state, action ) => {
      console.log(action);
      return {
        value : action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { update, result, reset } = valueSlice.actions

export default valueSlice.reducer