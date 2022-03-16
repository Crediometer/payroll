import logo from './logo.svg';
import './App.css'; import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { createContext, useState } from "react";
import Landing from './components/landing/Landing';
import Settings from './components/settings/Settings';
import PeriodSelect from './components/PeriodSelect/PeriodSelect';
import TeamMember from './components/TeamMember/TeamMember';
import AccountSetUp from './components/AccountSetUp/AccountSetUp';
import SetUpPayroll from './components/SetupPayroll/SetupPayroll';
import Dashboard from './components/Dashboard/dashboard';
import BankAccountDetails from './components/BankAccountDetails/BankAccountDetails';
import NewTeamMember from './components/NewTeam/NewTeamMember';
import BusinessInformation from './components/BusinessInformation/BusinessInformation';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route exact path="/accountSetUp">
              <AccountSetUp />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/periodSelect">
              <PeriodSelect />
            </Route>
            <Route exact path="/team/member">
              <TeamMember />
            </Route>
            <Route exact path="/payroll/setup">
              <SetUpPayroll />
            </Route>
            <Route exact path="/bankdetails">
              <BankAccountDetails />
            </Route>

            <Route exact path="/new/team/memeber">
              <NewTeamMember />
            </Route >
            <Route exact path="/business/info">
              <BusinessInformation />
            </Route>

          </Switch>
        </div>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
