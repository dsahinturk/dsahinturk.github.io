import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import CoffeeContainer from "../../pages/CoffeeContainer/CoffeeContainer";

const AppRouter = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <CoffeeContainer></CoffeeContainer>
                    </Route>
                    <Route exact path="/:category">
                        <CoffeeContainer></CoffeeContainer>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter