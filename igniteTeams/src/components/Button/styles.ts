import { FlatList, FlatListComponent } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStylesProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStylesProps;
};

export const ContainerBTN = styled.TouchableOpacity<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  margin-top: 20px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.MD};
  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`;
