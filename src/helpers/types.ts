export interface IRepoAction {
  type: string;
  org: string;
}

export interface IRepoState {
  repositories: any[];
  isLoading: boolean;
  fetchError: boolean;
}

export interface IRepoModel {
  title: string;
  url: string;
  forksCount: number;
  watchersCount: number;
  starsCount: number;
}
