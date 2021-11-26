import { Provider } from "react-redux";
import * as dotenv from "dotenv";

import OrganizationInfo from "./components/OrganizationInfo";
import SearchBar from "./components/SearchBar";
import Repositories from "./components/Repositories";

import store from "./redux-saga/store";

import "./styles.css";

dotenv.config();

export default function App() {
  return (
    <Provider store={store}>
      <div className="App flex-column centered">
        <div className="container main flex-column centered">
          <h1 className="header-text">GITHUB REPO VIEWER</h1>
          <SearchBar />
          <OrganizationInfo />
          <Repositories />
        </div>
      </div>
    </Provider>
  );
}
