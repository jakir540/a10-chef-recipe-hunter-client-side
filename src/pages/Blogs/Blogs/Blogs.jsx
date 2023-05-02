import React from "react";

const Blogs = () => {
  return (
    <div className="my-32">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto mb-5"
      >
        <div className="collapse-title text-xl font-medium p-3">
          {" "}
          <span className="text-yellow-900 font-bold">01. </span>
          Tell us the differences between uncontrolled and controlled components
        </div>
        <div className="collapse-content">
          <p className="font-serif p-3">
            {" "}
            <span className="text-yellow-900 font-bold">Ans:</span> uncontrolled
            components are simpler to implement but provide less control, while
            controlled components provide more control but can be more complex
            to implement. The choice between the two depends on the specific
            needs of the application and the developer's expertise.If a prop is
            passed to the component that does not match the specified type, a
            warning will be logged in the console. This can be very helpful for
            catching errors early on in development.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto mb-5"
      >
        <div className="collapse-title text-xl font-medium p-3">
          {" "}
          <span className="text-yellow-900 font-bold">02. </span>
          How to validate React props using PropTypes ?
        </div>
        <div className="collapse-content">
          <p className="font-serif p-3">
            {" "}
            <span className="text-yellow-900 font-bold">Ans:</span> React props
            can be validated using the PropTypes library, which is included in
            React. PropTypes allows you to specify the types of props that a
            component should receive and helps to catch errors early on in
            development.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto mb-5"
      >
        <div className="collapse-title text-xl font-medium p-3">
          {" "}
          <span className="text-yellow-900 font-bold">03. </span>
          What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p className="font-serif p-3">
            {" "}
            <span className="text-yellow-900 font-bold">Ans:</span>  a custom hook is a JavaScript function that utilizes the built-in React hooks to encapsulate reusable logic for components. Custom hooks allow you to extract common functionality from components and reuse it across your application, making your code more modular and easier to maintain.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto mb-5"
      >
        <div className="collapse-title text-xl font-medium p-3">
          {" "}
          <span className="text-yellow-900 font-bold">04. </span>
          Tell us the difference between nodejs and express js.
        </div>
        <div className="collapse-content">
          <p className="font-serif p-3">
            {" "}
            <span className="text-yellow-900 font-bold">Ans:</span> Node.js is a
            JavaScript runtime built on the V8 JavaScript engine. It allows
            developers to run JavaScript on the server-side, which was
            traditionally not possible. Node.js provides an event-driven,
            non-blocking I/O model that makes it well-suited for building fast,
            scalable, and lightweight web applications. It also provides a rich
            set of built-in modules, such as HTTP, HTTPS, and file system, that
            can be used to build server-side applications. <br /> <br />{" "}
            Express.js, on the other hand, is a popular web application
            framework built on top of Node.js. It provides a set of tools and
            features that make it easy to build web applications and APIs.
            Express.js allows developers to define routes, handle HTTP requests
            and responses, parse data, and more. It also provides middleware,
            which are functions that can be used to modify the request or
            response objects, handle errors, and perform other tasks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
