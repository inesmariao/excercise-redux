import { createSlice } from '@reduxjs/toolkit'

//Define el slice para el contador
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

//Define el slice para el usuario
const userSlice = createSlice({
  name: 'user',
  initialState: { name: ''},
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload };
    }
  }
});

// Exportar las acciones de los slices
export const { increment, decrement } = counterSlice.actions;
export const { setName } = userSlice.actions;

// Exportar los reducers
export const counterReducer = counterSlice.reducer;
export const userReducer = userSlice.reducer;
