import { GoRepoForked, AiOutlineEye, AiOutlineStar } from "react-icons/all";

import { IRepoModel } from "../../helpers/types";

export default function Repository({
  title,
  url,
  forksCount,
  watchersCount,
  starsCount,
}: IRepoModel) {
  return (
    <a href={url}>
      <div className="container flex-column" id="repository">
        <div className="repo-info repo-title">{title}</div>
        <div className="repo-info repo-url">
          <a className="repo-url" href={url}>
            {url}
          </a>
        </div>

        <div className="repo-lower flex-row">
          <div className="repo-info flex-row centered repo-fork-count repo-count">
            <GoRepoForked className="repo-icon" /> {forksCount}
          </div>
          <div className="repo-info flex-row centered repo-watchers-count repo-count">
            <AiOutlineEye className="repo-icon" /> {watchersCount}
          </div>
          <div className="repo-info flex-row centered repo-star-count repo-count">
            <AiOutlineStar className="repo-icon" /> {starsCount}
          </div>
        </div>
      </div>
    </a>
  );
}
