import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    products: [],
  },
  reducers: {
    setcard: (state, action) => {
     
      state.products = action.payload;
    },
   
          
      
    
  },
});
export default CardSlice.reducer;
export const { setcard } = CardSlice.actions;
