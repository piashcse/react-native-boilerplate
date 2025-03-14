import { createSelector } from 'reselect';
import { MovieApi } from '@/src/redux/query/RKTQuery';

const selectGlobalLoading = createSelector(
  (state: any) => state[MovieApi.reducerPath],
  (apiState) => {
    const isFetchingQueries = Object.values(apiState.queries).some(
      (query: any) => query?.status === 'pending'
    );
    const isFetchingMutations = Object.values(apiState.mutations).some(
      (mutation: any) => mutation?.status === 'pending'
    );
    return isFetchingQueries || isFetchingMutations;
  }
);
