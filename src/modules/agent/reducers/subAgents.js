import { LOADING } from "../../../constants";
import { createSymbiote } from "redux-symbiote";

export const AGENT_CREATE_URL = "/agents/create";

const initialState = {
  status: LOADING.initial,
  list: [],
  error: null
};

export const {
  actions: subAgentsActions,
  reducer: subAgentsReducer
} = createSymbiote(
  initialState,
  {
    createSubAgent: {
      start: state => ({
        ...state,
        status: LOADING.loading
      }),
      failed: (state, error) => ({
        ...state,
        error,
        status: LOADING.failed
      }),
      finish: state => ({
        ...state,
        status: LOADING.ready
      })
    },
    getSubAgents: {
      start: state => ({
        ...state,
        status: LOADING.loading
      }),
      failed: (state, error) => ({
        ...state,
        error,
        status: LOADING.failed
      }),
      finish: (state, agents) => ({
        ...state,
        status: LOADING.ready,
        list: agents
      })
    }
  },
  "auth"
);
