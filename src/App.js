import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionList from './components/QuestionList/QuestionList';
import AddNewCandidate from "./components/QuestionList/AddNewCandidate/AddNewCandidate";
import StartLiveQuiz from "./components/QuestionList/StartLiveQuiz/StartLiveQuiz";
 



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
          <Route exact path="/AddNewCandidate">
            <AddNewCandidate/>
          </Route>
          <Route exact path="/StartLiveQuiz">
           <StartLiveQuiz/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
