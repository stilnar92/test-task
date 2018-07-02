import { subAgentsActions as actions } from "../reducers";

const mock_mode = true;

export const AGENT_SUBAGENT_LIST_URL = "/agents/subAgents/list";

export const getSubAgents = ({ agentId }) => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch(actions.getSubAgents.start());

  try {
    const subAgents = await api.get(mock_mode, AGENT_SUBAGENT_LIST_URL, {
      agentId
    });
    if (subAgents.error) {
      await dispatch(actions.getSubAgents.failed(subAgents.error));
    } else {
      await dispatch(actions.getSubAgents.finish(subAgents.data));
    }
    return true;
  } catch (error) {
    return false;
  }
};
