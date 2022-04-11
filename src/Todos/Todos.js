import {
  Switch,
  Route,
} from "react-router-dom";

import TodoList from './TodoList';
import TodoDetail from './TodoDetail';
import TodoCreate from './TodoCreate';
import TodoEdit from './TodoEdit';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/todos" component={TodoList} />
        <Route path="/todos/detail/:id" component={TodoDetail} />
        <Route path="/todos/create" component={TodoCreate} />
        <Route path="/todos/edit/:id" component={TodoEdit} />
      </Switch>
    </div>
  );
}

export default App;
