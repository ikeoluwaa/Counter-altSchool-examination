import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <p>We're sorry, but an error occurred 😢.</p>
          <Link to="/" onClick={() => this.setState({ hasError: false })}>
            Go back to the main application
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
