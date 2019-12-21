import React from 'react';

type State = {
  response: unknown;
};

type Action = {
  type: ActionTypes;
  payload?: unknown;
};

const initialState: State = {
  response: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case useApi.types.fetching:
      return {
        response:  null,
      };
    case useApi.types.success:
      return {
        response: action.payload,
      };
    case useApi.types.error:
      return {
        response: [],
      };
    default:
      return state;
  }
};

const useApi = (endpoint: string): [State, () => Promise<void>] => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const makeRequest = React.useCallback(async () => {
    try {
      const response = await fetch(endpoint);
      if (response.status === 200) {
        const data = await response.json();
        dispatch(success(data.rates));
      } else  {
        dispatch(error());
      }
    } catch (e) {
      dispatch(error(e));
    }
  }, [endpoint]);

  const success = (response: unknown) => ({
    type: useApi.types.success,
    response,
  });
  const error = (error?: Error) => ({ type: useApi.types.error, error });

  return [state, makeRequest];
};

enum ActionTypes {
  fetching,
  success,
  error,
}

useApi.types = ActionTypes;

export default useApi;
