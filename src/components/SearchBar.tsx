import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { BiSearch } from "react-icons/all";

import { AppDispatch } from "../redux-saga/store";
import { fetchDataRequest } from "../redux-saga/repoSlice";

import "./SearchBar.css";

export default function SearchBar() {
  const [org, setOrg] = useState("");

  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  return (
    <div className="search-bar flex-row centered">
      <form
        className="flex-row"
        onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();

          if (org !== "") {
            dispatch({ type: fetchDataRequest.type, payload: { org } });
            setOrg("");
          }
        }}
      >
        <input
          className="search-bar-input"
          placeholder="Enter the organization name..."
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setOrg(e.target.value.trim());
          }}
        />

        <button type="submit" className="submit-button flex-row centered">
          <BiSearch className="submit-icon" />
        </button>
      </form>
    </div>
  );
}
