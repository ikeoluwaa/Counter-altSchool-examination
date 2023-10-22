import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>Welcome to the CounterApp 💕</h1>
        <p>This is a simple Counter website</p>
        <div className="link-container">
          <Link className="home-counter-link" to="/counter">
            Go to Counter app
          </Link>
          <Link className="home-error-link" to="/error-test">
            Test Error Boundary
          </Link>
        </div>
        <div>
          <p className="home-text">
            You can also check out our 404 page by clicking on this link that
            directs you to an invalid path{" "}
            <Link className="page-404" to="/404">
              404 Page
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
