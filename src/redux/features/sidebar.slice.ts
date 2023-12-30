import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
