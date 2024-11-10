import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthToken } from "./pageSpeedSlice";
const initialState = {
  isAuthenticated: !!localStorage.getItem("authToken"),
  token: localStorage.getItem("authToken"),
  status: null,
};

const apiStoryLogin = "https://localhost:7013/api/auth/login";
const apiStorySignIn = "https://localhost:7013/api/auth/signin";
console.log("AUTH LOCALSTORAGE", initialState.token);

export const makeRequestToLogin = createAsyncThunk(
  "auth/makeRequestToLogin",
  async ({ loginFieldValue }, { rejectWithValue }) => {
    try {
      //Request to log in
      const SignInUserProm = await fetch(apiStoryLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName: loginFieldValue.login,
          Password: loginFieldValue.pass,
        }),
      });
      if (!SignInUserProm.ok) {
        throw new Error(
          "Failed to fetch data. \nCode: " + SignInUserProm.status
        );
      }
      const loginUserResult = await SignInUserProm.json();

      return loginUserResult;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const makeRequestToSignIn = createAsyncThunk(
  "auth/makeRequestToSignIn",
  async ({ signInFieldValue }, { dispatch, rejectWithValue }) => {
    console.log("first name", signInFieldValue.firstName);
    try {
      //Request to log in
      const SignInUserProm = await fetch(apiStorySignIn, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: signInFieldValue.firstName,
          lastName: signInFieldValue.lastName,
          userName: signInFieldValue.userName,
          email: signInFieldValue.email,
          password: signInFieldValue.password,
          confirmPass: signInFieldValue.confirmPass,
        }),
      });

      if (!SignInUserProm.ok) {
        throw new Error(
          "Failed to fetch data. \nCode: " + SignInUserProm.status
        );
      }
      const signInUserResult = await SignInUserProm.json();
      dispatch(setAuthToken(signInFieldValue.result));
      return signInUserResult;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.userName = "";
      localStorage.removeItem("authToken");
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
      })
      .addCase(makeRequestToSignIn.pending, (state) => {
        //someAction
        state.status = "panding";
        console.log("pending: ");
      })
      .addCase(makeRequestToSignIn.fulfilled, (state, action) => {
        console.log("action: ", action);
        console.log("SignIn User Result", initialState);

        state.isAuthenticated = false;
      })
      .addCase(makeRequestToSignIn.rejected, (state, action) => {
        console.log("rejected: ", action);
      });
  },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions;
