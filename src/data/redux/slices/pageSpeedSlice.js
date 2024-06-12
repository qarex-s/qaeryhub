import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  answerServer: null,
  pageFromStory: null,
  status: "",
  infoError: "",
  catogories: ["performance", "accessibility", "bestPractices", "seo"],
  auditsKeyValue: {},
  auditsArray: [],
  auditsCategories: null,
  filterDataPages: [],
  searchingError: "",
  compareData: {
    freshVersionSite: null,
    oldVersionSite: null,
  },
  listSpeedPageFromStory: [],
  filterListSpeedPageFromStory: [],
  colorTheme: false,
};

const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const apiStory = "https://localhost:7013/api/Performance/";

export const fetchDeleteItemFromStory = createAsyncThunk(
  "pageSpeed/fetchDeleteItemFromStory",
  async ({ speedPageId }, { dispatch, rejectWithValue }) => {
    const apiStoryByItemId = apiStory + speedPageId;
    try {
      const queryResult = await fetch(apiStoryByItemId, {
        method: "DELETE",
      });

      if (!queryResult.ok) {
        throw new Error("Failed to fetch data. \nCode: " + queryResult.status);
      }
      const updatedListStory = dispatch(fetchGetAllStoryPageSpeed());
      return updatedListStory;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);
export const fetchGetItemPageSpeedFromStory = createAsyncThunk(
  "pageSpeed/fetchGetItemPageSpeedFromStory ",
  async ({ speedPageId }, { rejectWithValue }) => {
    const apiStoryByItemId = apiStory + speedPageId;
    try {
      const queryResult = await fetch(apiStoryByItemId);
      if (!queryResult.ok) {
        throw new Error("Failed to fetch data. \nCode: " + queryResult.status);
      }
      const pageItemResult = await queryResult.json();
      return pageItemResult;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);
export const fetchGetAllStoryPageSpeed = createAsyncThunk(
  "pageSpeed/fetchStoryPageSpeed",
  async (_, { rejectWithValue }) => {
    try {
      const dataPageSpeed = await fetch(apiStory);
      if (!dataPageSpeed.ok) {
        throw new Error(
          "Failed to fetch data. \nCode: " + dataPageSpeed.status
        );
      }
      const dataPageSpeedUsedJson = await dataPageSpeed.json();

      return dataPageSpeedUsedJson;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);
export const fetchItemPageSpeedFromStory = createAsyncThunk(
  "pageSpeed/fetchItemPageSpeedFromStory",
  async ({ speedPageId }, { dispatch, rejectWithValue }) => {
    const apiStoryByItemId = apiStory + speedPageId;
    try {
      const dataPageSpeed = await fetch(apiStoryByItemId);
      if (!dataPageSpeed.ok) {
        throw new Error(
          "Failed to fetch data. \nCode: " + dataPageSpeed.status
        );
      }
      const dataPageSpeedUsedJson = await dataPageSpeed.json();

      if (dataPageSpeedUsedJson.siteUrl != null) {
        await dispatch(
          fetchPageSpeed({ urlSite: dataPageSpeedUsedJson.siteUrl })
        );
      }

      return dataPageSpeedUsedJson;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);
export const fetchPageSpeed = createAsyncThunk(
  "pageSpeed/fetchPageSpeed",

  async ({ urlSite }, { rejectWithValue }) => {
    try {
      const url = encodeURIComponent(urlSite);
      let someQuery = `${api}?url=${url}`;

      initialState.catogories.forEach((element) => {
        someQuery += `&category=${element}`;
      });

      const dataServerInfo = await fetch(someQuery);
      if (!dataServerInfo.ok) {
        throw new Error(
          "Failed to fetch data. \nCode: " + dataServerInfo.status
        );
      }
      const dataPageSpeed = await dataServerInfo.json();
      return dataPageSpeed;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

const pageSpeedSlice = createSlice({
  name: "pageSpeed",
  initialState,
  reducers: {
    setPagesByCheckBox(state, action) {
      state.filterDataPages.splice(0, state.filterDataPages.length);
      state.filterDataPages.push(...action.payload);
      if (state.filterDataPages.length == 0) {
        state.filterDataPages.push(...state.catogories);
      }
    },
    addSearchingError(state, action) {
      state.searchingError = action.payload;
    },
    filterListStory(state, action) {
      state.filterListSpeedPageFromStory.length = 0;
      state.filterListSpeedPageFromStory.push(...action.payload);
    },
    changeTheme(state) {
      state.colorTheme = !state.colorTheme;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageSpeed.pending, (state) => {
        state.status = "Loading";
        state.infoError = "";
        state.pageFromStory = null;
      })
      .addCase(fetchPageSpeed.fulfilled, (state, action) => {
        state.status = "Ok";
        state.answerServer = action.payload;
        state.auditsKeyValue = action.payload.lighthouseResult.audits; //{acces-bility}
        state.auditsArray = action.payload.lighthouseResult.categories; //{performance,accessibility}
        state.pageFromStory = null;
        state.searchingError = "";
      })
      .addCase(fetchPageSpeed.rejected, (state, action) => {
        state.status = "Error";
        state.infoError = action.payload;
      })
      .addCase(fetchGetAllStoryPageSpeed.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchGetAllStoryPageSpeed.fulfilled, (state, action) => {
        state.status = "Ok";
        state.listSpeedPageFromStory = action.payload;
        state.filterListSpeedPageFromStory = action.payload;
      })
      .addCase(fetchGetAllStoryPageSpeed.rejected, (state, action) => {
        state.status = "Error";
        state.infoError = action.payload;
      })
      .addCase(fetchItemPageSpeedFromStory.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchItemPageSpeedFromStory.fulfilled, (state, action) => {
        state.status = "Ok";

        state.compareData.oldVersionSite = action.payload;
        state.compareData.freshVersionSite = state.answerServer;
        state.pageFromStory = null;
      })
      .addCase(fetchItemPageSpeedFromStory.rejected, (state, action) => {
        state.status = "Error";
        state.infoError = action.payload;
      })
      .addCase(fetchDeleteItemFromStory.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchDeleteItemFromStory.fulfilled, (state, action) => {
        state.status = "Ok";
        state.listSpeedPageFromStory = action.payload;
        state.pageFromStory = null;
      })
      .addCase(fetchDeleteItemFromStory.rejected, (state, action) => {
        state.status = "Error";
        state.infoError = action.payload;
      })
      .addCase(fetchGetItemPageSpeedFromStory.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchGetItemPageSpeedFromStory.fulfilled, (state, action) => {
        state.status = "Ok";
        state.pageFromStory = action.payload;
      })
      .addCase(fetchGetItemPageSpeedFromStory.rejected, (state, action) => {
        state.status = "Error";
        state.infoError = action.payload;
      });
  },
});

export default pageSpeedSlice.reducer;
export const {
  setPagesByCheckBox,
  addSearchingError,
  filterListStory,
  changeTheme,
} = pageSpeedSlice.actions;
