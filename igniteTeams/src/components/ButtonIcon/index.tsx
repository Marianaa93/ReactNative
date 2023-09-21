import { TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { ButtonTypeStylesProps } from "@components/Button/styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStylesProps;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Styled.Container {...rest}>
      <Styled.Icon
        name={icon}
        type={type}
      ></Styled.Icon>
    </Styled.Container>
  );
}
