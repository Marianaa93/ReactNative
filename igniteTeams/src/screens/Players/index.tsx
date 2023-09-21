import { Header } from "@components/Header";
import * as Styled from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/FIlter";
import { FlatList, View } from "react-native";
import { useState } from "react";
import { PlayerCardComponent } from "@components/PlayerCardComponent";
import { EmptyList } from "@components/EmptyList";
import { ButtonBTN } from "@components/Button";

export function Player() {
  const [team, setTeam] = useState("Time A");
  const [player, setplayer] = useState(["Mariana", "Rodrigo"]);
  return (
    <Styled.Container>
      <Header showBackButton />
      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />
      <Styled.Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon icon='add' />
      </Styled.Form>
      <Styled.HeaderList>
        <FlatList
          horizontal
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        <Styled.NumberOfPlayers>{player.length}</Styled.NumberOfPlayers>
      </Styled.HeaderList>
      <FlatList
        data={player}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCardComponent
            name={item}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyList message='Não há jogadores ainda' />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          player.length === 0 && {
            flex: 1,
          },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <ButtonBTN
        title='Deletar Time'
        type='SECONDARY'
      />
    </Styled.Container>
  );
}
