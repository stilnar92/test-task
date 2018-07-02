import { subAgentsActions as actions } from "../reducers";

const mock_mode = true;

export const AGENT_SUBAGENT_CREATE_URL = "/agents/subAgents/create";

export const createSubAgent = ({ id, name, balance }) => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch(actions.createSubAgent.start());

  try {
    const agent = await api.post(mock_mode, AGENT_SUBAGENT_CREATE_URL, {
      id,
      name,
      balance
    });
    if (agent.error) {
      await dispatch(actions.createSubAgent.failed(agent.error));
    } else {
      await dispatch(actions.createSubAgent.finish());
    }
    return true;
  } catch (error) {
    return false;
  }
};
