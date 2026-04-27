

function LearnReact() {
  return (
    <div className="learn">

     
      <section className="learn-hero">
        <h1>Learn React</h1>
      </section>

    
      <section className="learn-content">
        <p>React is a JavaScript library for building user interfaces.</p>
        <p>React is used to build single-page applications.</p>
        <p>React allows us to create reusable UI components.</p>
      </section>

      {/* EXAMPLES */}
      <section className="learn-examples">
        <h2>Learning by Examples</h2>

        <div className="code-box">
          <h3>Example Part.1: Hello Component</h3>

          <pre>
{`import React from "react";

function Hello() {
  return (
    <div>
      <h1>Hello React 👋</h1>
      <p>This is a simple component.</p>
    </div>
  );
}

export default Hello;`}
          </pre>
        </div>

        <div className="code-box">
          <h3>Example Part.2: Using Component in App</h3>

          <pre>
{`import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;`}
          </pre>
        </div>

      </section>

    </div>
  );
}

export default LearnReact;