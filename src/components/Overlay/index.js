import styled from "styled-components";
import { Tooltip } from "react-bootstrap";

export const StyledTooltip = styled(Tooltip)`
  font-weight: bold;
  .arrow::before {
    border-bottom-color: ${(props) => props.theme.bgColor};
  }
  .tooltip-inner {
    background-color: ${(props) => props.theme.bgColor};
  }
`;
