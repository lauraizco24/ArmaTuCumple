import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

 import Home from './components/Home/Home';

const Routes =() => {

    const history = useHistory();

    return (
        <Router >
            <Switch history ={history}>
                <Route exact path='/' component ={Home}/>

            </Switch>
        </Router>

    )
};
export default Routes;