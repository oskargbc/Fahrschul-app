import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./login-page";
import HomePage from "./index-page";

function Main() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <LoginPage />
                    </Route>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Main