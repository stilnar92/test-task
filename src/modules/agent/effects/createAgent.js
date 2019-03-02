import { agentActions as actions } from "../reducers";

const mock_mode = true;

export const AGENT_CREATE_URL = "/agents/create";

export const createAgent = ({ name, balance }) => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch(actions.createAgent.start());

  try {
    const agent = await api.post(mock_mode, AGENT_CREATE_URL, {
      name,
      balance
    });
    if (agent.error) {
      await dispatch(actions.createAgent.failed(agent.error));
    } else {
      await dispatch(
        actions.createAgent.finish({
          id: agent.data.id,
          name: agent.data.name,
          balance: agent.data.balance
        })
      );
    }
    return true;
  } catch (error) {
    return false;
  }
};
