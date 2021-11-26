import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { API_URL } from "../helpers/consts";
import { fetchDataFail, fetchDataSuccess, fetchDataRequest } from "./repoSlice";
import { IRepoAction } from "../helpers/types";
import { PayloadAction } from "@reduxjs/toolkit";

export function getReposRequest(org: string): Promise<AxiosResponse> {
  return axios.get(`${API_URL}/orgs/${org}/repos`, {
    headers: {
      Accept: "application/vnd.github.v3+json"
      // Authorization: `token ${process.env.TOKEN}`
    }
  });
}

export function* getRepos(action: PayloadAction<IRepoAction>): Generator {
  try {
    const response: any = yield call(getReposRequest, action.payload.org);

    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put({ type: fetchDataFail.type });
  }
}

export default function* saga() {
  yield takeLatest(fetchDataRequest.type, getRepos);
}
