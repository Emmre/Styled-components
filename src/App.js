import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #2dc44d;
  border-radius: 4px;
  color: white;
  padding: 1em;
  border: none;
`;
const ButtonProps = styled(Button)`
  background: ${({ error }) => (error ? "#FF0000" : "#2dc44d")};
`;
const ButtonExtended = styled(Button)`
  color: red;
`;

const App = () => {
  return (
    <div className="container">
      <Button>First example</Button>
      <ButtonProps error>Second example</ButtonProps>
      <ButtonExtended>Third example</ButtonExtended>
    </div>
  );
};

export default App;
