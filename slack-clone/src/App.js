import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div >
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          <Header />
      <div className='app_body'>
        <Sidebar />
        
        <Switch>
          <Route path='/room/:roomId'>
            <Chat />
            {/* {chat screen} */}
          </Route>
          <Route path='/'>
            <h1>Welcome</h1>
          </Route>
        </Switch>
      </div>
      </>
        )}
      

      </Router>
    </div>
  );
}

export default App;
