import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-center mt-4 fs-3 fw-4">Question Bank</h2>
      <ol>
        <li className="fs-5 fw-5">
          Q1. Tell us the differences between uncontrolled and controlled
          components.
        </li>
        <li className="mb-2">
          
          ---A. In a controlled component react, state handles all the form
          data, whereas, in an uncontrolled component, the HTML form element
          data is managed by only the DOM.
        </li>

        <li className="fs-5 fw-5">Q2. How to validate React props using PropTypes?</li>
        <li className="mb-2">
        
          ---A. By defining these prop types, you can catch any prop validation
          errors during development, helping to ensure that the correct types
          are passed to your component.
        </li>
        <li className="fs-5 fw-5">Q3. Tell us the difference between nodejs and express js.</li>
        <li className="mb-3">
       
          ---A. Node.js is a runtime environment that allows you to run
          JavaScript code on the server-side. <br />
          express js provides a set of features and abstractions to simplify the
          process of building web applications and APIs.
        </li>
        <li className="fs-5 fw-5">
          Q4. What is a custom hook, and why will you create a custom hook?
        </li>
        <li>
          
          ---A. Custom hook in React is a JavaScript function that starts with
          the prefix "use" and allows you to reuse stateful logic across
          different components. It enables you to extract and share common
          functionality between components without the need for duplication.
        </li>
      </ol>
    </div>
  );
};

export default Blog;
