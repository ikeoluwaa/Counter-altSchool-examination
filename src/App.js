import React from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import CounterApp from "./CounterApp";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import NotFound from "./NotFound";
import ErrorBoundaryTestPage from "./ErrorBoundaryTestPage";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <ErrorBoundary>
          <nav className="nav">
            <ul>
              <li>
                <NavLink className="link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/counter">
                  Counter
                </NavLink>
              </li>
              <NavLink className="link" to="/error-test">
                Error Test
              </NavLink>
            </ul>
          </nav>
          <Routes>
            <Route path="/counter" element={<CounterApp />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/error-test" element={<ErrorBoundaryTestPage />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
