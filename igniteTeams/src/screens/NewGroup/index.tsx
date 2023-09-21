import { Header } from "@components/Header";
import * as Styled from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonBTN } from "@components/Button";
import { TextInput } from "react-native";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Styled.Container>
      <Header showBackButton />
      <Styled.Content>
        <Styled.UsersIcon />
        <Highlight
          title='Nova Turma'
          subtitle='Crie a turma para adiconar as pessoas'
        />
        <Input placeholder='Nome do Participante' />
        <ButtonBTN title='Criar' />
      </Styled.Content>
    </Styled.Container>
  );
}
