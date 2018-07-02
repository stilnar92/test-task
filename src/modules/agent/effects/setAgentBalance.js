import { agentActions as actions } from "../reducers";

const mock_mode = true;

export const AGENT_SET_BALANCE_URL = "/agents/balance";

export const setAgentBalance = ({ agentId, balance }) => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch(actions.setAgentBalance.start());

  try {
    const agent = await api.post(mock_mode, AGENT_SET_BALANCE_URL, {
      agentId,
      balance
    });
    if (agent.error) {
      await dispatch(actions.setAgentBalance.failed(agent.error));
    } else {
      await dispatch(
        actions.setAgentBalance.finish({
          balance: agent.data.balance
        })
      );
    }
    return true;
  } catch (error) {
    return false;
  }
};
