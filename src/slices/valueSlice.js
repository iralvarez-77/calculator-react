import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
}

export const valueSlice = createSlice({
  name: 'valor',
  initialState,
  reducers: {
    update: ( { value }, { payload } ) => {
      return {
        value : value + payload,
      }
    },
    result : (_state, {payload}) => {
      return {
        value: payload,
      }
    },
    reset : ( _state, action ) => {
      return {
        value : action.payload
      }
    }
  },
})

export const { update, result, reset } = valueSlice.actions

export default valueSlice.reducer