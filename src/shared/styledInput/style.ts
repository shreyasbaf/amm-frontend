import styled, { css } from "styled-components"
interface propsInput {
  state: string
}
const inputStyles = css`
  display: block;
  width: 50%;
  margin: 0 12px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :focus,
  :hover {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  :disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`
export const InputWrapper = styled.input<propsInput>`
  border-radius: 12px;
  height: 42px;
  border-color: ${(props) =>
    (props.state == "success" && "rgb(0 128 0)") ||
    (props.state == "error" && "rgb(255 0 0)") ||
    "rgb(0 123 255 / 25%)"};
  ${inputStyles}
  :focus, :hover {
    border-color: ${(props) =>
      (props.state == "success" && "rgb(0 128 0)") ||
      (props.state == "error" && "rgb(255 0 0)")};
    box-shadow: 0 0 0 0.2rem
      ${(props) =>
        (props.state == "success" && "rgb(0 128 0 / 25%)") ||
        (props.state == "error" && "rgb(255 0 0 / 25%)") ||
        "rgb(0 123 255 / 25%)"};
  }
  width: auto;
`
