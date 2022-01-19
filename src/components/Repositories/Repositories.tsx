import { useSelector } from "react-redux";
import { RootState } from "../../redux-saga/store";
import { useEffect, useState } from "react";

import Repository from "./Repository";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Error from "../../helpers/Error";

import "./Repositories.css";

export default function Repositories() {
  const repos: any[] = useSelector(
    (state: RootState) => state.repos.repositories
  );

  const isLoading = useSelector((state: RootState) => state.repos.isLoading);
  const fetchError = useSelector((state: RootState) => state.repos.fetchError);

  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  const lastRepo = currentPage * reposPerPage;
  const firstRepo = lastRepo - reposPerPage;

  const currentPageRepos = repos.slice(firstRepo, lastRepo);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(repos.length / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (isLoading) setCurrentPage(1);
  }, [isLoading]);

  return (
    <div className="container flex-column centered" id="repositories">
      <Error />

      {!isLoading ? (
        currentPageRepos.map((repo: any) => (
          <Repository
            key={repo.id}
            title={repo.name}
            url={repo.html_url}
            forksCount={repo.forks_count}
            watchersCount={repo.watchers_count}
            starsCount={repo.stargazers_count}
          />
        ))
      ) : (
        <LoadingSpinner />
      )}

      <div className="page-numbers-container flex-row centered">
        {!isLoading &&
          !fetchError &&
          pageNumbers.map((number) => {
            return (
              <div
                key={number}
                className={
                  number !== currentPage ? "page-number" : "page-number active"
                }
                onClick={() => {
                  setCurrentPage(number);
                  window.scrollTo(0, 0);
                }}
              >
                {number}
              </div>
            );
          })}
      </div>
    </div>
  );
}
