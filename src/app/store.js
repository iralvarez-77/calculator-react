
import { configureStore } from '@reduxjs/toolkit'
import sliceValue from '../slices/valueSlice'

export const store = configureStore({
  reducer: {
    myValue: sliceValue,
  },
})