import { UserIcon } from "@components/GroupsCard/styles";
import * as Styled from "./styles";
import { UserCircle } from "phosphor-react-native";

type Props = {
  message: string;
};
export function EmptyList({ message }: Props) {
  return (
    <Styled.Container>
      <Styled.Message>{message}</Styled.Message>
    </Styled.Container>
  );
}
