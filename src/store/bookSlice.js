import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getBooks = createAsyncThunk(
  'book/getBooks',
  async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
  try {
    const res = await fetch('http://localhost:3005/book');
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})


//
export const insertBook = createAsyncThunk(
  'book/insertBook',
  async(dataBook, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
  try {
    const res = await fetch('http://localhost:3005/book',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(dataBook)
    })  
    const data = await res.json();
    return data;

  } catch (error) {
    return rejectWithValue(error.message);
  }
})
//

export const bookSlice = createSlice({
  name: 'book',
  initialState: {books: [] , isLoading: false, error: null },
  reducers: {},
  extraReducers: {
    //getBooks
    [getBooks.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action);
      state.books = action.payload;      
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action);
      state.error = action.payload
    },

    // insertBook
    [insertBook.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action);
      state.books.push(action.payload);      
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action);
      state.error = action.payload
    },
    //



  }
})


export default bookSlice.reducer