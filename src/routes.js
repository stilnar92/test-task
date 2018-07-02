import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { NotFoundPage } from "./core/components/NotFoundPage";
import { LoginPage, RegisterPage } from "./modules/auth";
import {
  AgentPage,
  AgentCreatePage,
  SubAgentCreatePage,
  ReplanishBalancePage,
  TransferPage
} from "./modules/agent";
import { withAuth } from "./core/utils";
import { ROUTES } from "./constants";

export const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path={ROUTES.AUTH.REGISTER} component={RegisterPage} />
      <Route exact path={ROUTES.AUTH.LOGIN} component={LoginPage} />
      <Route exact path={ROUTES.AGENT.MAIN} component={withAuth(AgentPage)} />
      <Route
        exact
        path={ROUTES.AGENT.CREATE}
        component={withAuth(AgentCreatePage)}
      />
      <Route
        exact
        path={ROUTES.AGENT.SUBAGENT.CREATE}
        component={withAuth(SubAgentCreatePage)}
      />
      <Route
        exact
        path={ROUTES.AGENT.BALANCE.REPLENISH}
        component={withAuth(ReplanishBalancePage)}
      />
      <Route
        exact
        path={ROUTES.AGENT.SUBAGENT.TRANSFER}
        component={TransferPage}
      />
      <Redirect exact from="/" to={ROUTES.AGENT.MAIN} />
      <Route component={NotFoundPage} />
    </Switch>
  </Fragment>
);
