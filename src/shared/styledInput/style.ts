import styled, { css } from "styled-components"
import { colors } from "../../styles/theme"

enum states {
  success,
  error,
}

interface propsInput {
  state: states
  fullWidth?: boolean
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
// export const InputWrapper = styled.input<propsInput>`
//   border-radius: 12px;
//   height: 42px;
//   border-color: ${(props) =>
//     (props.state == states.success && "rgb(0 128 0)") ||
//     (props.state == states.error && "rgb(255 0 0)") ||
//     "rgb(0 123 255 / 25%)"};
//   ${inputStyles}
//   :focus, :hover {
//     border-color: ${(props) =>
//       (props.state == states.success && "rgb(0 128 0)") ||
//       (props.state == states.error && "rgb(255 0 0)")};
//     box-shadow: 0 0 0 0.2rem
//       ${(props) =>
//         (props.state == states.success && "rgb(0 128 0 / 25%)") ||
//         (props.state == states.error && "rgb(255 0 0 / 25%)") ||
//         "rgb(0 123 255 / 25%)"};
//   }
//   width: auto;
// `

export const InputWrapper = styled.input<propsInput>`
  width: ${(props) => (props.fullWidth ? "100%" : "16rem")};
  border-radius: 0.3rem;
  height: 2.5rem;
  font-size: 16px;
  outline: 0;
  border: 1px solid ${colors.lightGrey};
  padding: 0rem 1rem;

  :focus,
  :hover {
    color: #495057;
    background-color: #fff;
    border: 1px solid ${colors.gray};

    outline: 0;
  }
  :disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`
