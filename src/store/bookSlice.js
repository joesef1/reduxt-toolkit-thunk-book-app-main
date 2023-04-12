import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//getBooks
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


//getBooks
export const insertBook = createAsyncThunk(
  'book/insertBook',
  async(dataBook, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI
  try {
    dataBook.nameofuser = getState().auth.name
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
//deleteBooks
export const deleteBooks = createAsyncThunk(
  'book/deleteBooks',
  async(id, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
  try {
   await fetch(`http://localhost:3005/book/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    // const data = await res.json();
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})



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
        // deleteBooks
        [deleteBooks.pending]: (state, action) => {
          state.isLoading = true
          state.error = false      
        },
        [deleteBooks.fulfilled]: (state, action) => {
          state.isLoading = false
          state.books = state.books.filter((el) => el.id !== action.payload)
        },
        [deleteBooks.rejected]: (state, action) => {
          state.isLoading = false
          state.error = action.payload
        },



  }
})


export default bookSlice.reducer