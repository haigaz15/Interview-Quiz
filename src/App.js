import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import QuestionList from './components/Login/QuestionList/QuestionList';

function App() {
  let jsonArr = [];
  const userCreator = (user) => {
    jsonArr.push(user);
    console.log(jsonArr);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {' '}
            <Login userArr={jsonArr} userCreatorFunc={userCreator} />{' '}
          </Route>
          <Route exact path = "/QuestionList"> <QuestionList/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
