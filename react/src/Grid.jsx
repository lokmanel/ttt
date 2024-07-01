import { Case } from "./Case";
import { useState } from "react";

export const Grid = ({gameStep, caseIsClicked}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="grid-container">
      {new Array(9).fill(0).map((_, index) => (
        <Case key={index} caseIsClicked={caseIsClicked} index={index} gameStep={gameStep} />
      ))}
    </div>
  );
};
