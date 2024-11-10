import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  countAllQueries: 0,
  countAttempts: 0,
  countComparing: 0,
  createdAt: "",
  description: "",
  email: "",
  favoriteSite: "",
  firstName: "",
  lastName: "",
  profileImgUrl: "",
  userId: "",
  userName: "",

  allQueriesOfUser: {},
  tokenJwt: localStorage.getItem("authToken"),
};

const apiProfile = "https://localhost:7013/api/profile";
//console.log("AUTH LOCALSTORAGE", initialState.token);

export const makeRequestToGetProfile = createAsyncThunk(
  "user/makeRequestToGetProfile",
  async (_, { rejectWithValue }) => {
    try {
      //Request to log in
      const profileUser = await fetch(apiProfile, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${initialState.tokenJwt}`,
        },
      });
      if (!profileUser.ok) {
        throw new Error("Failed to fetch data. \nCode: " + profileUser.status);
      }
      const loginUserResult = await profileUser.json();

      return loginUserResult;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

const userProfileSlice = createSlice({
  name: "user",
  initialState,
  reducers: { setPagesByCheckBox(state, action) {} },
  extraReducers: (builder) => {
    builder
      .addCase(makeRequestToGetProfile.pending, (state) => {
        //someAction
        state.status = "panding";
        console.log("pending: ");
      })
      .addCase(makeRequestToGetProfile.fulfilled, (state, action) => {
        console.log("action: ", action);
        console.log("login User Result", initialState);
        state.countAllQueries = action.payload.countAllQueries;
        state.countAttempts = action.payload.countAttempts;
        state.countComparing = action.payload.countComparing;
        state.createdAt = action.payload.createdAt;
        state.description = action.payload.description;
        state.email = action.payload.email;
        state.favoriteSite = action.payload.favoriteSite;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.profileImgUrl = action.payload.profileImgUrl;
        state.userId = action.payload.userId;
        state.userName = action.payload.userName;
        state.profileImgUrl = action.payload.profileImgUrl;
        state.allQueriesOfUser = action.payload.allQueriesOfUser[0];

        state.isAuthenticated = true;

        console.log("url - ", action.payload);
        console.log("url acti - ", initialState);
      })
      .addCase(makeRequestToGetProfile.rejected, (state, action) => {
        console.log("rejected: ", action);
      });
  },
});
export default userProfileSlice.reducer;
//export const {} = userProfileSlice.actions;
