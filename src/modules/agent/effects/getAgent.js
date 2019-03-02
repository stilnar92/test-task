import { agentActions as actions } from "../reducers";

const mock_mode = true;

export const AGENT_ITEM_URL = "/agents/item";

export const getAgent = ({ username }) => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch(actions.getAgent.start());

  try {
    const agent = await api.get(mock_mode, AGENT_ITEM_URL, {
      username
    });
    if (agent.error) {
      await dispatch(actions.getAgent.failed(agent.error));
    } else {
      await dispatch(
        actions.getAgent.finish({
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
