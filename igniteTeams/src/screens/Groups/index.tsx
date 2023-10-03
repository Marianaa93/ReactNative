import { Header } from "@components/Header";
import * as Styled from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupsCard";
import { useCallback, useState } from "react";
import { Button, FlatList } from "react-native";
import { EmptyList } from "@components/EmptyList";
import { ButtonBTN } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate("newGroup");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }
  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

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
        renderItem={({ item }) => (
          <GroupCard
            onPress={() => handleOpenGroup(item)}
            title={item}
          />
        )}
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
        onAdd={handleSubmit}
      />
    </Styled.Container>
  );
}
