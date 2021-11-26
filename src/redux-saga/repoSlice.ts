import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IRepoState } from "../helpers/types";

const initialState: IRepoState = {
  repositories: [],
  isLoading: false,
  fetchError: false
};

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      return { ...state, isLoading: true, fetchError: false };
    },
    fetchDataSuccess: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        repositories: action.payload,
        isLoading: false,
        fetchError: false
      };
    },
    fetchDataFail: (state) => {
      return { ...state, repositories: [], fetchError: true, isLoading: false };
    }
  }
});

export const {
  fetchDataFail,
  fetchDataSuccess,
  fetchDataRequest
} = repoSlice.actions;

export default repoSlice.reducer;
