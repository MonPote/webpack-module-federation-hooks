import React, { useState } from "react";

const ButtonWithHooks = () => {
  // FIXME - Comment this line and it will work
  const [isOK, setOK] = useState(true);

  return <button>Button With Hooks</button>;
};

export default ButtonWithHooks;
