import { Text, TouchableOpacityProps, View, ViewComponent } from "react-native";
import { ButtonTypeStylesProps } from "./styles";
import { ContainerBTN, Title } from "./styles";

type PropsBTN = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStylesProps;
};
export function ButtonBTN({ title, type = "PRIMARY", ...rest }: PropsBTN) {
  return (
    <ContainerBTN
      type={type}
      {...rest}
    >
      <Title>{title}</Title>
    </ContainerBTN>
  );
}
