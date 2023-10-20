import React from "react";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";

import CounterApp from "./CounterApp";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import NotFound from "./NotFound";
import ErrorBoundaryTestPage from "./ErrorBoundaryTestPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
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
            <Route path="/error-test" element={<ErrorBoundaryTestPage />} />
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              }
            />
            <Route
              path="*"
              element={
                <ErrorBoundary>
                  <NotFound />
                </ErrorBoundary>
              }
            />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
