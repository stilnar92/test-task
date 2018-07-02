import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, lifecycle, setDisplayName, withState } from "recompose";
import { Card, CardHeader } from "reactstrap";

import { getAgent, getSubAgents } from "../effects";
import { spinnerWhileLoading } from "../../../core/utils";
import { CommonTemplate } from "../../../core/components/CommonTemplate";
import { AgentInfo, ActionButton, SubAgents, AgentCard } from "../components";

export const AgentView = ({ agent, subAgents }) => {
  return (
    <CommonTemplate>
      <AgentCard>
        <AgentInfo name={agent.name} balance={agent.balance} />
        <ActionButton
          to={`/agent/${agent.id}/balance`}
          className="mr-4"
          title="Replanish balance"
        >
          Replanish balance
        </ActionButton>
        <ActionButton
          to={`/agent/${agent.id}/subagent/create`}
          className="mr-4"
        >
          Create SubAgent
        </ActionButton>
      </AgentCard>
      <Card outline className="my-4">
        <CardHeader>Subagents</CardHeader>
        <SubAgents agents={subAgents} agentId={agent.id} />
      </Card>
    </CommonTemplate>
  );
};

const mapStateToProps = state => {
  return {
    agent: state.agent,
    subAgents: state.subAgents.list,
    username: state.auth.username,
    isAuthenticated: state.auth.isAuthenticated
  };
};
const mapDispatchToProps = {
  getSubAgents,
  getAgent
};

const enchance = compose(
  withState("isLoading", "setLoading", true),
  setDisplayName("AgentPage"),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    async componentDidMount() {
      await this.props.getAgent(this.props.username);
      await this.props.getSubAgents(this.props.agent.id);
      this.setState({ isLoading: false });
    }
  }),
  spinnerWhileLoading(({ subAgents, isLoading, isAuthenticated }) => {
    return isLoading;
  })
);

export const AgentPage = enchance(AgentView);

AgentView.propTypes = {
  agent: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    balance: PropTypes.number
  }),
  subAgents: PropTypes.array
};
