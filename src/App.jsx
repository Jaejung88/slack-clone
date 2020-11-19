import './App.css';
import Header from './views/Header';
import Sidebar from './views/Sidebar'
import Chat from "./views/Chat"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : ( 
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* React-Router -> Chat Screen*/}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
