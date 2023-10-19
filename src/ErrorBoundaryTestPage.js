import React from "react";
import ErrorBoundary from "./ErrorBoundary";

function ErrorBoundaryTestPage() {
  const throwError = () => {
    throw new Error("This is an error for testing error boundaries.");
  };

  return (
    <div>
      <h1>Error Boundary Test Page</h1>
      <button onClick={throwError}>Throw an Error</button>
      <ErrorBoundary />
    </div>
  );
}

export default ErrorBoundaryTestPage;
