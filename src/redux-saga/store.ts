import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

import repoSlice from "./repoSlice";
import saga from "./saga";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: EnhancedStore = configureStore({
  reducer: {
    repos: repoSlice
  },
  middleware: [sagaMiddleware]
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(saga);
