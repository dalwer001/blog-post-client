import './App.css';
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Components/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Homepage from './Components/Home/Homepage/Homepage';
import Navbar from './Components/Home/Navbar/Navbar';
import Main from './Components/Dashboard/Main/Main';
import AddBlog from './Components/Dashboard/AddBlog/AddBlog';
import ManageBlog from './Components/Dashboard/ManageBlog/ManageBlog';
import Feedback from './Components/Dashboard/Feedback/Feedback';
import ShowBlog from './Components/ShowBlog/ShowBlog';



export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <PrivateRoute path="/dashboard">
            <Main></Main>
          </PrivateRoute>
          <Route path="/showBlog/:id">
            <ShowBlog></ShowBlog>
          </Route>
          <PrivateRoute path="/addBlog">
            <AddBlog></AddBlog>
          </PrivateRoute>
          <PrivateRoute path="/manageBlog">
            <ManageBlog></ManageBlog>
          </PrivateRoute>
          <PrivateRoute path="/feedback">
            <Feedback></Feedback>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
