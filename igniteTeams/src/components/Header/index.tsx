import { useNavigation } from "@react-navigation/native";
import * as Styled from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: Boolean;
};

export function Header({ showBackButton = true }: Props) {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }
  return (
    <Styled.Container>
      {showBackButton ? (
        <>
          <Styled.BackButton onPress={goBack}>
            <Styled.BackIcon />
          </Styled.BackButton>
          <Styled.buttonLogoHome
            onPress={() => {
              navigation.navigate("groups");
            }}
          >
            <Styled.Logo source={logoImg} />
          </Styled.buttonLogoHome>
        </>
      ) : (
        <Styled.Logo source={logoImg} />
      )}
    </Styled.Container>
  );
}
