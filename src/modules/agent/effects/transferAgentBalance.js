import { agentActions as actions } from "../reducers";

const mock_mode = true;

export const AGENT_TRANSFER_BALANCE = "/agents/transfer";

export const transferAgentBalance = ({ agentId, subAgentId, amount }) => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch(actions.transferAgentBalance.start());

  try {
    const agent = await api.get(mock_mode, AGENT_TRANSFER_BALANCE, {
      agentId,
      subAgentId,
      amount
    });
    if (agent.error) {
      await dispatch(actions.transferAgentBalance.failed(agent.error));
    } else {
      await dispatch(actions.transferAgentBalance.finish());
    }
    return true;
  } catch (error) {
    return false;
  }
};
