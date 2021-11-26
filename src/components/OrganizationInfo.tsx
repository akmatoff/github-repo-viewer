import { useSelector } from "react-redux";
import { RootState } from "../redux-saga/store";

import "./OrganizationInfo.css";

export default function OrganizationInfo() {
  const repos: any[] = useSelector(
    (state: RootState) => state.repos.repositories
  );

  const isLoading = useSelector((state: RootState) => state.repos.isLoading);

  if (repos.length !== 0 && !isLoading) {
    return (
      <div className="organization-info container flex-row">
        <div className="organization-info-inner flex-row">
          <div className="avatar-container">
            <img
              className="avatar"
              src={repos[0].owner.avatar_url}
              alt="avatar"
            />
          </div>
          <div className="organization-name">{repos[0].owner.login}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
