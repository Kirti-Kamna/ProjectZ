/* eslint-disable no-console */
import {useCallback, useReducer} from 'react';
import {
  createContainer,
  createReducer,
  createAsyncActions,
} from '../utils/context';

import {api} from '../utils/api/api';

export type JobState = {
  quotesLoading: boolean;
  quotesData: any;
};
const initialState: JobState = {
  quotesLoading: false,
  quotesData: [],
};
const actions = {
  quotesDataLoading: createAsyncActions('QUOTES_LOADING'),
};

const OrgJobReducer = createReducer<JobState>({
  [`${actions.quotesDataLoading.loading}`]: state => ({
    ...state,
    quotesLoading: true,
  }),
  [`${actions.quotesDataLoading.success}`]: (state, {payload}) => ({
    ...state,
    quotesLoading: false,
    quotesData: payload?.quotesData,
  }),
  [`${actions.quotesDataLoading.failure}`]: state => ({
    ...state,
    quotesLoading: false,
  }),
});

export const {
  useContext: useOrgJob,
  Context: OrgJobContext,
  Provider: OrgJobProvider,
  TestProvider: TestOrgJobProvider,
} = createContainer(() => {
  const [{...state}, dispatch] = useReducer(OrgJobReducer, initialState);

  const getQuotesList = useCallback(async () => {
    dispatch(actions.quotesDataLoading.loading());

    try {
      const {data} = await api.get<any>('https://api.quotable.io/random');

      dispatch(
        actions.quotesDataLoading.success({
          quotesData: data,
        }),
      );
      console.log('this is the api data', data);
    } catch (e) {
      // showErrorMessage(e.message);
      dispatch(actions.quotesDataLoading.failure());
    }
  }, []);

  return {
    state: {
      ...state,
    },
    actions: {
      getQuotesList,
    },
  };
});

export default useOrgJob;
