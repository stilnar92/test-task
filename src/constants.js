export const LOADING = {
  failed: -1,
  initial: 0,
  loading: 1,
  ready: 2
};

export const initialState = {
  state: LOADING.initial,
  error: null,
  users: []
};

export const API_URL = "http://localhost:80";

export const ROUTES = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register"
  },
  AGENT: {
    MAIN: "/agent",
    CREATE: "/agent/create",
    SUBAGENT: {
      CREATE: "/agent/:agentId/subagent/create",
      TRANSFER: "/agent/:agentId/transfer/subagent/:subagentId/"
    },
    BALANCE: {
      REPLENISH: "/agent/:agentId/balance"
    }
  }
};
