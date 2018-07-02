import React from "react";
import PropTypes from "prop-types";
import { AgentInfo } from "./AgentInfo";
import { AgentCard } from "./AgentCard";
import { ActionButton } from "./ActionButton";

export const SubAgents = ({ agents, agentId }) => {
  return (
    <React.Fragment>
      {agents.map(subAgent => {
        return (
          <AgentCard key={subAgent.id}>
            <AgentInfo name={subAgent.name} balance={subAgent.balance} />
            <ActionButton
              to={`/agent/${agentId}/transfer/subagent/${subAgent.id}/`}
              className="mr-4"
            >
              Replanish
            </ActionButton>
          </AgentCard>
        );
      })}
    </React.Fragment>
  );
};

AgentInfo.propTypes = {
  agents: PropTypes.array,
  agentId: PropTypes.string
};
