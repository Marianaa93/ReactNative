import { TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";

type Props = {
  title: string;
} & TouchableOpacityProps;

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Styled.Container {...rest}>
      <Styled.UserIcon />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
}
