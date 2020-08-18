import React from "react";
import "./App.scss";
import Homepage from "./components/Homepage";
import Login from "./pages/Login";
import Task from "./pages/Task";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { utilities } from "./helper/utilities";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import WriteMemory from "./pages/Task/Write/write-memory"

function App() {
  const isLoggedIn = utilities.checkIsLogged();
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          render={(history) => (
            <div>
              {/* {history.location.pathname === '/login' ? null : <Header />} */}
              <div className="container-fluid page-body-wrapper">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                  <Sidebar />
                  {isLoggedIn ? (
                    <Redirect exact from="/login" to="/" />
                  ) : (
                    <Redirect to="/login" />
                  )}
                  <div className="main-panel">
                      <Switch>
                        {/* <Redirect exact from='/' to='/home' /> */}
                        <Route exact path="/" component={Homepage} />
                        <Route path="/login" component={Login} />
                        <Route path="/task/write-memory" component={WriteMemory} />
                        <Route path="/task" component={Task} />
                      </Switch>
                  </div>
                </div>
              </div>
            </div>
          )}
        ></Route>
      </BrowserRouter>
    </div>
  );
}
export default App;
