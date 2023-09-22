import { Header } from "@components/Header";
import * as Styled from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonBTN } from "@components/Button";
import { TextInput } from "react-native";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Gradient } from "phosphor-react-native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();
  function handleGroupCreation() {
    navigation.navigate("players", { group });
  }
  return (
    <Styled.Container>
      <Header showBackButton />
      <Styled.Content>
        <Styled.UsersIcon />
        <Highlight
          title='Nova Turma'
          subtitle='Crie a turma para adiconar as pessoas'
        />
        <Input
          placeholder='Nome da nova turma'
          onChangeText={setGroup}
        />
        <ButtonBTN
          title='Criar'
          onAdd={handleGroupCreation}
        />
      </Styled.Content>
    </Styled.Container>
  );
}
