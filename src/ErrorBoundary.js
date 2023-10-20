import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{this.state.error.toString()}</p>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
