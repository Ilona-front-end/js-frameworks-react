import styled from "styled-components";
// 7 seven creating a BTN
// secondaryColour is defined in App.js
const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.secondaryColour};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  height: 78px;
  border-radius: 8px;
  border: none;
  margin-bottom: 1rem;
  &&:hover {
    background-color: green;
  }
`

export default Button;

// extend styles for the Button component another way to have differnt styles
// can not export default DangerButton. So importing we need to use {} like: import Button, {DangerButton} from "./components/form/Button";
export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.dangerColour};
  height: 46px;
`

// NB We can only have one default export
