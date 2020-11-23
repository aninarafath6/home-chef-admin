import Login from './components/login/Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header_and_side_pannel/header/Header'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
