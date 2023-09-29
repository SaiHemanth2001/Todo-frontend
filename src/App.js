import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes, useParams} from "react-router-dom"
import './App.css';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import TodoList from './components/TodoList';
import EditTask from './components/EditTask';

function App() {
  return (
    <div className="App">
       <Router>
        <div className='container'>
          <Routes>
            <Route exact path='/' Component={Login}></Route>
            <Route exact path='/register' Component={RegisterUser}></Route>
            <Route exact path='/todoList/:email' Component={TodoList}></Route>            
            <Route exact path='/editTask/:email/:id' Component={EditTask}></Route>            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
