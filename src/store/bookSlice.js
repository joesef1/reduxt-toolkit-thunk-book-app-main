import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export  const getBooks = createAsyncThunk('book/getBooks',async(_,thunkAPI)=>{
  try {
    const res = await fetch('http://localhost:3005/book');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
})

export const bookSlice = createSlice({
  name: 'book',
  initialState: {books: [] , isLoading: false},
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true
      

    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action);
      state.books = action.payload;
      

    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action);

    },

  }
})


export default bookSlice.reducer