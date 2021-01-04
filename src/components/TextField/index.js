import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

// export const Input = styled.input`
//   border: 1px solid ${(props) => props.theme.color};
//   min-height: 35px;
//   height: 35px;
//   font-size: 17px;
//   width: auto;
//   display: initial;
// `;

// export const Label = styled.span`
//   color: ${(props) => props.theme.color};
//   width: auto;
// `;

// const TextField = ({ label, ...props }) => {
//   return (
//     <span>
//       <Label>{label}</Label>
//       <br></br>
//       <Input {...props} />
//     </span>
//   );
// };

export const TextFieldM = styled(TextField)`
  border: 1px solid ${(props) => props.theme.color};
  min-height: 35px;
  height: 35px;
  font-size: 17px;
  width: auto;
  display: initial;
`;
