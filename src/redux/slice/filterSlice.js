import { createSlice } from '@reduxjs/toolkit'

const initialState = "";

export const filetrSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    newFilter:(state, action) => (state = action.payload)
    // addContact: (state, action) => {state.push(action.payload)
    // },
   
    // deleteContact: (state, action) => { return state.filter(el => el.id !== action.payload)
    // },
  },
})

export const { newFilter } = filetrSlice.actions

export const filterReducer = filetrSlice.reducer