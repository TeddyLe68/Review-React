import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // this code is mutaton but redux toolkit allows us to write mutating code becase it uses immer.js under the hood
      // immer.js allows us to write mutating code and it will convert it to immutable code
      state.search = action.payload;
    },
    // this auto generates the action creator and the action type
    // for example, if the action is searchFilterChange, the action type will be filter/searchFilterChange
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
