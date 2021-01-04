import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
export const ContainerFluid = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  border: 5px solid ${(props) => props.theme.color};
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.navColor};
  color: ${(props) => props.theme.color};
  height: 100%;
  margin: 0 auto;
  border-radius: 8px;
  max-width: 940px;
  @media screen and (max-width: 950px) {
    padding: 0 15px;
  }
`;

export const GridNav = styled(Grid)`
  background-color: ${(props) => props.theme.navColor};
  color: ${(props) => props.theme.color};
  padding: 0;
  margin-right: auto;
  margin-left: auto;
`;

export const GridBG = styled(Grid)`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  padding: 0 50px;
  margin-right: auto;
  margin-left: auto;
`;

export const GridSide = styled(Grid)`
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  padding: 0;
  margin-right: auto;
  margin-left: auto;
`;
