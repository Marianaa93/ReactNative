import { Header } from "@components/Header";
import * as Styled from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonBTN } from "@components/Button";
import { Alert, TextInput } from "react-native";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppErrors";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  const handleNew = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Nova Turma", "Informe o nome da turma.");
      }
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Turma", error.message);
      } else {
        Alert.alert("Nova Turma", "Não foi possível criar uma nova turma.");
        console.log(error);
      }
    }
  };
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
          onAdd={handleNew}
        />
      </Styled.Content>
    </Styled.Container>
  );
}
