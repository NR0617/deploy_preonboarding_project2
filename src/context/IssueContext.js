import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const initialState = {
  dataList: {
    loading: false,
    data: null,
    error: null,
    page: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
  page: null,
};

const success = (data, page) => ({
  loading: false,
  data,
  page,
  error: null,
});

const error = error => ({
  loading: false,
  data: null,
  error: error,
});

function dataListReducer(state, action) {
  switch (action.type) {
    case 'GET_DATALIST':
      return {
        ...state,
        dataList: loadingState,
      };
    case 'GET_DATALIST_SUCCESS':
      return {
        ...state,
        dataList: success(action.data),
      };
    case 'GET_DATALIST_ERROR':
      return {
        ...state,
        dataList: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const DataListStateContext = createContext(null);
const ListDispatchContext = createContext(null);

export function DataListProvider({ children }) {
  const [state, dispatch] = useReducer(dataListReducer, initialState);
  return (
    <DataListStateContext.Provider value={state}>
      <ListDispatchContext.Provider value={dispatch}>{children}</ListDispatchContext.Provider>
    </DataListStateContext.Provider>
  );
}

export function useDataListState() {
  const state = useContext(DataListStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

export function useListDispatch() {
  const dispatch = useContext(ListDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}
export const getDataList = async (dispatch, page) => {
  dispatch({ type: 'GET_DATALIST' });
  try {
    const response = await axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&state=open&per_page=11&page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    dispatch({ type: 'GET_DATALIST_SUCCESS', data: response.data, page });
  } catch (e) {
    dispatch({ type: 'GET_DATALIST_ERROR', error: e });
  }
};
