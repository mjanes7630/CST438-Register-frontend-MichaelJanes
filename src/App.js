import './App.css';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/schedule' component={SchedList} />
		<Route path='/student/add' component={Semester} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;