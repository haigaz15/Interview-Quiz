import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionList from './components/QuestionList/QuestionList';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/QuestionList">
            {' '}
            <QuestionList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
