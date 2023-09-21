import { UserCircle } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
`;

export const Message = styled.Text`
  text-align: center;

  font-size: ${(props) => props.theme.FONT_SIZE.MD};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  color: ${(props) => props.theme.COLORS.GRAY_300};
`;
