# Webpack 5 Module Federation Hooks issue Demo 

This repository purpose is to demonstrate/replicate/isolate the hooks error I have while using the workaround in order to dynamically import a remote component without specifying it beforehand in webpack :

```javascript
const dynamicFederation = (scope, module) => {
  return window[scope].get(module).then((factory) => {
    const Module = factory();
    return Module;
  });
};
```


1) `yarn install && yarn start`
2) Browse to localhost:3001

You should see a `Welcome to Host App` and a `button`

If you go to `packages/02-remote-with-hooks/src/ButtonWithHooks.js` and comment the line :
```javascript
const [isOK, setOK] = useState(true);
```

And refresh the page you should have the React hooks issue like this :

```
Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
    at resolveDispatcher (react.development.js:1465)
    at useState (react.development.js:1496)
    at ButtonWithHooks (ButtonWithHooks.js:5)
    at renderWithHooks (react-dom.development.js:14825)
    at updateFunctionComponent (react-dom.development.js:17058)
    at mountLazyComponent (react-dom.development.js:17372)
    at beginWork (react-dom.development.js:18635)
    at HTMLUnknownElement.callCallback (react-dom.development.js:188)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:237)
    at invokeGuardedCallback (react-dom.development.js:292)
```
