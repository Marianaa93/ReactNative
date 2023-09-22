import { Text, TouchableOpacityProps, View, ViewComponent } from "react-native";
import { ButtonTypeStylesProps } from "./styles";
import { ContainerBTN, Title } from "./styles";

type PropsBTN = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStylesProps;
  onAdd: () => void;
};
export function ButtonBTN({
  title,
  onAdd,
  type = "PRIMARY",
  ...rest
}: PropsBTN) {
  return (
    <ContainerBTN
      type={type}
      {...rest}
      onPress={onAdd}
    >
      <Title>{title}</Title>
    </ContainerBTN>
  );
}
