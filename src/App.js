import React from "react";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import LogisticsReg from "./pages/registration/LogisticsReg";
import DriverReg from "./pages/registration/DriverReg";
import Users from "./pages/Users";
import { useAuth } from "./Context/auth";
import Delivery from "./pages/requests/Delivery";
import Ride from "./pages/requests/Ride";
import Logistics from "./pages/Logistics";
import Drivers from "./pages/Drivers";

function App() {
  return (
    <div>
      <Router>
        <ThemeProvider>
          <CSSReset />
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <PrivateRoute path="/driver-registration" component={DriverReg} />
            <PrivateRoute
              path="/logistics-registration"
              component={LogisticsReg}
            />
            <PrivateRoute path="/users" component={Users} />
            <PrivateRoute path="/delivery-request" component={Delivery} />
            <PrivateRoute path="/ride-request" component={Ride} />
            <PrivateRoute path="/drivers" component={Drivers} />
            <PrivateRoute path="/logistics" component={Logistics} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default App;
