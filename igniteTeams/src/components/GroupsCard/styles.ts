import theme from "@theme/index";
import { UsersThree } from "phosphor-react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
  color: ${(props) => props.theme.COLORS.GRAY_200};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
`;

export const UserIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;
