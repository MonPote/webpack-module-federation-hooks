import React, { useState } from "react";

const ButtonWithHooks = () => {
  // FIXME - Uncomment this line and it will break
  const [isOK, setOK] = useState(true);

  return <button>Button With Hooks</button>;
};

export default ButtonWithHooks;
