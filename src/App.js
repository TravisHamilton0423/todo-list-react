import {
  Switch,
  Route,
} from "react-router-dom";

import Head from './Head/Head';
import Members from './Members/Members';
import Teams from './Teams/Teams';
import Team from './Teams/Team';
import Todos from './Todos/Todos';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Head />
      <div className='container'>
        <Switch>
          <Route exact path="/" component={Members} />
          <Route path="/teams" component={Teams} />
          <Route path="/team/:id" component={Team} />
          <Route path="/todos" component={Todos} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
