import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { NavLink } from "react-router-dom";

function ErrorBoundaryTestPage() {
  const [error, setError] = useState(false);

  const throwError = () => {
    if (error) {
      // Intentionally throw an error
      throw new Error(
        "This is an intentional error for testing error boundaries."
      );
    }
  };

  return (
    <div className="error-bound">
      <h1>Error Boundary Test Page:</h1>
      <p>
        <button onClick={() => setError(true)}>Throw an Error</button>
        <ErrorBoundary>{throwError()} </ErrorBoundary>
      </p>
    </div>
  );
}

export default ErrorBoundaryTestPage;
