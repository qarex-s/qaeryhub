import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: !!localStorage.getItem("authToken"),
  token: localStorage.getItem("authToken"),
  status: null,
};

const apiStory = "https://localhost:7013/api/auth/login";

export const makeRequestToLogin = createAsyncThunk(
  "auth/makeRequestToLogin",
  async ({ loginFieldValue }, { rejectWithValue }) => {
    try {
      //Request to log in
      const loginUserProm = await fetch(apiStory, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName: loginFieldValue.login,
          Password: loginFieldValue.pass,
        }),
      });
      if (!loginUserProm.ok) {
        throw new Error(
          "Failed to fetch data. \nCode: " + loginUserProm.status
        );
      }
      const loginUserResult = await loginUserProm.json();

      return loginUserResult;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changhAuto(state) {
      state.status = "ok";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeRequestToLogin.pending, (state) => {
        //someAction
        state.status = "panding";
        console.log("pending: ");
      })
      .addCase(makeRequestToLogin.fulfilled, (state, action) => {
        console.log("action: ", action);
        console.log("login User Result", initialState);

        localStorage.setItem("authToken", action.payload.result);
        state.isAuthenticated = true;
      })
      .addCase(makeRequestToLogin.rejected, (state, action) => {
        console.log("rejected: ", action);
      });
  },
});
export default authSlice.reducer;
