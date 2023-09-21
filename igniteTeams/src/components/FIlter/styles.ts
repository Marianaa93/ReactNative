import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStylesProps = {
  isActive?: Boolean;
};

export const Container = styled(TouchableOpacity)<FilterStylesProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: solid 1px ${theme.COLORS.GREEN_700};
    `}

  border-radius:4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.WHITE};
    `}
`;
