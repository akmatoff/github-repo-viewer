import { useSelector } from "react-redux";
import { RootState } from "../redux-saga/store";

export default function Error() {
  const fetchError = useSelector((state: RootState) => state.repos.fetchError);

  if (fetchError) {
    return <div>An error occured while fetching.</div>;
  } else {
    return <span />;
  }
}
