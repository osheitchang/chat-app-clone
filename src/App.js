import "./App.css";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";
import SidebarChat from "./SidebarChat";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useState} from 'react'
import Login from './Login'
import { useStateValue } from "./StateProvider"

function App() {
  const [{user}, setUser, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Home Page</h1>
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
