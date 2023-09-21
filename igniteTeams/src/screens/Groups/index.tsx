import { Header } from "@components/Header";
import * as Styled from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupsCard";
import { useState } from "react";
import { Button, FlatList } from "react-native";
import { EmptyList } from "@components/EmptyList";
import { ButtonBTN } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Styled.Container>
      <Header showBackButton={false} />
      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={[
          { paddingBottom: 100 },
          groups.length === 0 && {
            marginTop: "50%",
          },
        ]}
        scrollEnabled={groups.length !== 0}
        ListEmptyComponent={() => (
          <EmptyList message='Que tal cadastrar uma turma?' />
        )}
      />
      <ButtonBTN
        title='Criar Nova Turma'
        onPress={() => {
          console.log("clicado");
        }}
      />
    </Styled.Container>
  );
}
