import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
//----------------button-------------------

export default styled(({ color, ...otherProps }) => <Button {...otherProps} />)`
  apperance: none;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.borderButton};
  padding: 0.25em 0.5em;
  transition: all 0.5s;
  font-size: 15px;

  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background-color: #fb4226;
    // background-color: ${(props) => props.theme.hoverBgColor};
    border: ${(props) => props.theme.borderButton};
  }
`;
