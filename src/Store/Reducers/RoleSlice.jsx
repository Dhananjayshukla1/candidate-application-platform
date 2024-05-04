import { createSlice } from "@reduxjs/toolkit";




export const RoleSlice = createSlice({
  name: "Role",
  initialState: {
    products: [],
  },
  reducers: {
    filterCard: (state, action) => {
       
     
        }

      
    
  },
});
export default RoleSlice.reducer;
export const { filterCard } = RoleSlice.actions;
