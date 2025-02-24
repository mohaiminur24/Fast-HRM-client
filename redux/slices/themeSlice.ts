import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "light" | "dark";
  background: string;
  primary: string;
  secondary: string;
  text: string;
  success: string;
  warning: string;
}

const initialState: ThemeState = {
  mode: "light",
  background: "#FFFFFF",
  primary: "#3674B5",
  secondary: "#578FCA",
  text: "#000000",
  success: "#5cb85c",
  warning: "#c93c08",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
