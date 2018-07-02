import { LOADING } from "../../../constants";
import { createSymbiote } from "redux-symbiote";

export const AGENT_CREATE_URL = "/agents/create";

const initialState = {
  status: LOADING.initial,
  id: null,
  name: null,
  balance: null,
  error: null
};

export const { actions: agentActions, reducer: agentReducer } = createSymbiote(
  initialState,
  {
    createAgent: {
      start: state => ({
        ...state,
        status: LOADING.loading
      }),
      failed: (state, error) => ({
        ...state,
        error,
        status: LOADING.failed
      }),
      finish: (state, { id, name, balance }) => ({
        ...state,
        status: LOADING.ready,
        id,
        name,
        balance
      })
    },
    getAgent: {
      start: state => ({
        ...state,
        status: LOADING.loading
      }),
      failed: (state, error) => ({
        ...state,
        error,
        status: LOADING.failed
      }),
      finish: (state, { id, name, balance }) => ({
        ...state,
        status: LOADING.ready,
        id,
        name,
        balance
      })
    },
    setAgentBalance: {
      start: state => ({
        ...state,
        status: LOADING.loading
      }),
      failed: (state, error) => ({
        ...state,
        error,
        status: LOADING.failed
      }),
      finish: (state, balance) => ({
        ...state,
        status: LOADING.ready,
        balance
      })
    },
    transferAgentBalance: {
      start: state => ({
        ...state,
        status: LOADING.loading
      }),
      failed: (state, error) => ({
        ...state,
        error,
        status: LOADING.failed
      }),
      finish: (state, balance) => ({
        ...state,
        status: LOADING.ready
      })
    }
  },
  "auth"
);
