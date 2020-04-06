import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const dynamicFederation = (scope, module) => {
  return window[scope].get(module).then((factory) => {
    const Module = factory();
    return Module;
  });
};

const RemoteButton = React.lazy(() =>
  dynamicFederation("remote_with_hooks", "ButtonWithHooks")
);

const App = () => {
  return (
    <div>
      Welcome to Host App
      <div>
        <Suspense fallback="Loading...">
          <RemoteButton />
        </Suspense>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
