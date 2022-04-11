import {
  Switch,
  Route,
} from "react-router-dom";

import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/todos" component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;
