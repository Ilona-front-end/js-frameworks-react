import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 1rem;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.borderColour};
  border-color: ${(props) => props.colour};

  // 6 Six Nesting
  &&::placeholder {
    color: ${(props) => props.colour};
  }
`
// input is parent, StyledInput is a child. It means we get access to input props
const Input = (props) => {
  return (
    <StyledInput placeholder={props.placeholder} colour={props.colour} />
  );
};

export default Input;
