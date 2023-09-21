import { ButtonIcon } from "@components/ButtonIcon";
import * as Styled from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};
export function PlayerCardComponent({ name, onRemove }: Props) {
  return (
    <Styled.Container>
      <Styled.Icon name='person' />
      <Styled.Name>{name}</Styled.Name>
      <ButtonIcon
        icon='close'
        type='SECONDARY'
        onPress={onRemove}
      />
    </Styled.Container>
  );
}
