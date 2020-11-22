import Login from './components/login/Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
      
   
    </div>
  );
}

export default App;
